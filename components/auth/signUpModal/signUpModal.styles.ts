import { css } from '@emotion/react';
import { colors, font, font_weight } from 'styles/constants';

export const inputIcon = css`
  position: absolute;
  right: 11px;
  top: 11px;
`;

export const eyeIcons = css`
  ${inputIcon}
  cursor: pointer;
`;

export const title = css`
  font-size: ${font.regular};
  font-weight: ${font_weight.bold};
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const titleInfo = css`
  margin-bottom: 16px;
  color: ${colors.charcoal001};
`;

export const bDaySelectorWrapper = css`
  display: flex;
  margin-bottom: 24px;
`;

export const bDaySelector = css`
  &:not(:last-child) {
    margin-right: 16px;
  }
  flex-grow: 1;
`;

export const checkAccount = css`
  margin-top: 16px;
  span {
    margin-left: 8px;
    color: ${colors.theme};
    cursor: pointer;
  }
`;
