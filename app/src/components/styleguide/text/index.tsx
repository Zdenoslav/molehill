import styled from 'app/components/styleguide';
import {Base as BaseLayout, IBaseLayoutProps} from 'app/components/styleguide/layout';
import { DOMAttributes } from 'react';

interface IBaseTextProps {
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  inverted?: boolean;
  as?: string;
}

type BaseProps = IBaseTextProps & IBaseLayoutProps & DOMAttributes<any>;

const BaseText = styled(BaseLayout)<BaseProps>`
  text-align: ${props => props.textAlign};
  color: ${props => props.inverted ? props.theme.invertedText : props.theme.text};
`;

export const Headline = styled(BaseText).attrs({
  as: 'h1',
})`
  font-size: 40px;
`;

export const SubHeadline = styled(BaseText).attrs({
  as: 'h2',
})`
  font-size: 32px;
`;

export const Title = styled(BaseText).attrs({
  as: 'p',
})`
  font-size: 24px;
`;

export const Body = styled(BaseText).attrs({
  as: 'p',
})`
  font-size: 16px;
`;