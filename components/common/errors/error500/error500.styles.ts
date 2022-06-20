import { css } from '@emotion/react';
import { flex } from 'styles/mixin';
import { font, colors } from 'styles/constants';

export const wrapper = css`
  ${flex('column')}
  height: 100vh;
  font-size: ${font.large};
  color: ${colors.white001};
  line-height: 1.5;
`;
