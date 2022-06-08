import { css } from '@emotion/react';
import { colors } from 'styles/constants';
import { flex } from 'styles/mixin';

export const wrapper = css`
  ${flex('row')}
  position: relative;
  z-index: 11;
`;

export const img = css``;

export const descWrapper = css`
  position: absolute;
  left: 0;
  background-color: red;
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
`;
