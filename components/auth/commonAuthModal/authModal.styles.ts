import { css } from '@emotion/react';
import { colors, font, font_weight } from 'styles/constants';

export const wrapper = css`
  width: 568px;
  padding: 32px;
  background-color: ${colors.white001};
  z-index: 11;
`;

export const closeIcon = css`
  display: block;
  margin: 0 0 40px auto;
  cursor: pointer;
`;

export const inputWrapper = css`
  position: relative;
  margin-bottom: 16px;
`;

export const inputIcon = css`
  position: absolute;
  right: 11px;
  top: 11px;
`;

export const eyeIcons = css`
  ${inputIcon}
  cursor: pointer;
`;

export const checkAccount = css`
  margin-top: 16px;
  span {
    margin-left: 8px;
    color: ${colors.theme};
    cursor: pointer;
  }
`;