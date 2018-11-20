import React from 'react';
import { compose } from 'redux';
import { graphql, MutateProps, DataProps } from 'react-apollo';
import { connect } from 'react-redux';

import Modal from 'app/components/modal/modal';

import { ModalIds } from 'app/components/modal/constants';
import withStateMutation, { IWithStateMutationProps } from 'app/components/higher-order/with-state-mutation';
import { updateSuccess, updateError } from 'app/components/global-event/actions';
import { closeModal } from 'app/components/modal/actions';
import { IRootState } from 'app/redux/root-reducer';

import AddStatusForm from './add-status-form';

import { addStatusMutation, statusesInRadius } from '../graphql';
import { getRadiusInMeters } from '../selectors';
import { StatusInput, StatusesInRadius, StatusesInRadiusVariables, UserById } from 'app/generated/graphql';
import { getUserId } from 'app/login/selectos';
import { userById } from 'app/user-profile/graphql';

interface IAddStatusProps {
  userId: string | null;
  userLat?: number;
  userLng?: number;
}

interface IStateProps {
  radiusInMeters: number;
  userId: string;
}

type Props = IAddStatusProps & IStateProps & MutateProps & IWithStateMutationProps & DataProps<UserById>;

class AddStatus extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    this.handleAddStatus = this.handleAddStatus.bind(this);
  }

  public render() {
    const {
      sMutation,
    } = this.props;

    return (
      <Modal id={ModalIds.addNewStatus} headerTitle="Add status">
        <AddStatusForm loading={sMutation.loading} onSubmit={this.handleAddStatus}/>
      </Modal>
    );
  }

  private handleAddStatus(values: StatusInput) {
    const {
      sMutation,
      userId,
      userLat,
      userLng,
      radiusInMeters,
      data,
    } = this.props;

    const {useCurrentLocation, ...formValues} = values;
    // Used for not having all statuses at the very same point
    const RANDOMIZER = Math.random() / Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
    const statusLocation = useCurrentLocation ? {
      type: 'Point',
      coordinates: [
        Number(userLat) + RANDOMIZER,
        Number(userLng) + RANDOMIZER,
      ], // TODO: remove RANDOMIZER and check if userCoordinates are available
    } : null;

    return sMutation.mutate({
      variables: {
        status: {
          ...formValues,
          useCurrentLocation,
          location: statusLocation,
          userId,
        },
      },
      // update locally cached statuses data
      update: (store, addStatusResult) => {
        const statusesData = store.readQuery<StatusesInRadius, Partial<StatusesInRadiusVariables>>({
          query: statusesInRadius,
          variables: {
            radius: radiusInMeters,
            latitude: userLat as number,
            longitude: userLng as number,
            skip: false,
          },
        });

        if (statusesData) {
          store.writeQuery<StatusesInRadius, Partial<StatusesInRadiusVariables>>({
            query: statusesInRadius,
            variables: {
              radius: radiusInMeters,
              latitude: userLat as number,
              longitude: userLng as number,
              skip: false,
            },
            data: {
              statusesInRadius: {
                ...statusesData.statusesInRadius,
                statuses: [
                  ...statusesData.statusesInRadius.statuses,
                  {
                    ...addStatusResult.data.addStatus,
                    statusLikes: [],
                    user: data.userById,
                  },
                ],
              },
            },
          });
        }
      },
    }).then((response: any) => {
      if (response) {
        closeModal.dispatch(ModalIds.addNewStatus);
        if (!response.data) {
          throw new Error();
        }
        updateSuccess.dispatch('New status successfully added.');
      }
    }).catch((e: any) => updateError.dispatch('Failed to add a new status.'));
  }
}

export default compose<React.ComponentType<IAddStatusProps>>(
  connect<IStateProps, {}, IAddStatusProps, IRootState>((state) => ({
    radiusInMeters: getRadiusInMeters(state),
    userId: getUserId(state),
  })),
  graphql<IStateProps>(userById, {
    options: (props) => ({
      variables: {
        id: props.userId,
      },
    }),
  }),
  graphql(addStatusMutation),
  withStateMutation(),
)(AddStatus);
