import { css } from '@emotion/react';
import { colors, font, sizes, font_weight } from 'styles/constants';

export const wrapper = css`
  position: relative;
  width: 568px;
  padding: 40px;
  background-color: ${colors.white001};
  z-index: 11;
`;

export const title = css`
  margin-bottom: 40px;
  font-size: ${font.large};
  font-weight: ${font_weight.medium};
  text-align: center;
`;

export const closeIconBtn = css`
  position: absolute;
  top: 32px;
  right: 32px;
  cursor: pointer;
`;

export const inputWrapper = css`
  position: relative;
  margin-bottom: 16px;
`;

export const submitBtn = css`
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
