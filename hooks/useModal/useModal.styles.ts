import { css } from '@emotion/react';
import { flex } from 'styles/mixin';

export const wrapper = css`
  width: 100%;
  height: 100%;
  ${flex('row')}
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
`;

export const background = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`;
