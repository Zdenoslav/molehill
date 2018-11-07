import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Form, InjectedFormProps, reduxForm } from 'redux-form';

import Button from 'app/components/button';
import FormField from 'app/components/form-elements/form-field';
import FormInput from 'app/components/form-elements/form-input';
import FormTextArea from 'app/components/form-elements/form-text-area';
import FormCheckbox from 'app/components/form-elements/checkbox/form-checkbox';

import { IFormProps } from 'app/components/form-elements/typings';
import { IRootState } from 'app/redux/root-reducer';
import { getCountry, getStreet, getCity, getZipCode } from './map/selectors';

export const ADD_STATUS_FORM = 'ADD_STATUS_FORM';
export const USE_CURRENT_LOCATION_FIELD  = 'useCurrentLocation';

export interface IFormData {
  title: string;
  description: string;
  useCurrentLocation?: boolean;
  country?: string;
  city?: string;
  zipCode?: string;
  street?: string;
}

interface IStateProps {
  useCurrentLocation: boolean;
}

type Props = IStateProps & InjectedFormProps<IFormData> & IFormProps;

class AddStatusForm extends React.PureComponent<Props> {
  public render() {
    const {
      handleSubmit,
      loading,
    } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
          <FormField required name="title" component={FormInput} placeholder="Title" />
          <FormField name="description" component={FormTextArea} placeholder="Description" />
          <FormField
            id={USE_CURRENT_LOCATION_FIELD}
            name={USE_CURRENT_LOCATION_FIELD}
            label="Use current location"
            component={FormCheckbox}
          />
          <FormField required name="country" component={FormInput} placeholder="Country" />
          <FormField required name="city" component={FormInput} placeholder="City" />
          <FormField required name="zipCode" component={FormInput} placeholder="ZIP Code" />
          <FormField
            name="street"
            component={FormInput}
            placeholder="Street"
            formName={ADD_STATUS_FORM}
            clearable
            required
          />
          <Button loading={loading} text="+ Add" type="submit" appearance="submit" fullWidth={true} />
      </Form>
    );
  }
}

interface IInitialValues {
  initialValues: {
    [K in keyof IFormData]?: string;
  };
}

export default compose<React.ComponentType<IFormProps>>(
  connect<IInitialValues, {}, IFormProps, IRootState>((state: IRootState, props) => ({
    initialValues: {
      country: getCountry(state),
      street: getStreet(state),
      city: getCity(state),
      zipCode: getZipCode(state),
    },
  })),
  reduxForm({
    form: ADD_STATUS_FORM,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
  }),
)(AddStatusForm);
