import { css } from '@emotion/react';
import { sizes, colors, font } from 'styles/constants';

export const container = css`
  width: 100%;
  height: 48px;
  border: 0;
  border-radius: ${sizes.borderRadius};
  background-color: ${colors.theme};
  color: ${colors.white001};
  font-size: ${font.regular};
  font-weight: 800;
  outline: none;
  cursor: pointer;
`;
