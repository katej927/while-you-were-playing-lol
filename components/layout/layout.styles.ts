import { css } from '@emotion/css';
import { flex } from './../../styles/mixin';
import { colors } from './../../styles/constants';

export const wrapper = css`
  /* ${flex('center', 'center')} */
  background-color: ${colors.gray100};
  height: 100vh;

  /* @media only screen and (min-width: 600px) {
    width: 100%;
    height: auto;
    border-radius: 0;
  } ; */
`;
