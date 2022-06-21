import { css } from '@emotion/react';
import { colors, font, sizes, font_weight, modal } from 'styles/constants';

export const wrapper = css`
  position: relative;
  width: 568px;
  padding: ${modal.padding};
  background-color: ${colors.white001};
  z-index: 11;
`;

export const title = css`
  ${modal.title}
`;

export const closeIconBtn = css`
  ${modal.closeIcon}
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
