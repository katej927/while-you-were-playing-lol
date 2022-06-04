import { css } from '@emotion/css';
import { colors } from '../../../styles/constants';
import { bounce, flex } from '../../../styles/mixin';

export const wrapper = css`
  ${flex('center')}
`;

export const mainIcon = css`
  path {
    fill: ${colors.theme};
  }
  animation: ${bounce} 1s ease infinite;
`;
