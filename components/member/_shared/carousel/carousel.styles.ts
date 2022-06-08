import { css } from '@emotion/react';
import { colors, font } from 'styles/constants';
import { flex } from 'styles/mixin';

export const eachWrapper = css`
  ${flex('column', 'center', 'center')}
  margin: auto;
  background-color: ${colors.black002};
  width: fit-content !important;
  padding: 8px 5px;
  border-radius: 4px;
`;

export const time = css`
  margin-top: 5px;
  font-size: ${font.medium};
  color: ${colors.lightgray100};
`;
