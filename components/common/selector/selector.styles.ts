import { css } from '@emotion/react';
import { colors, sizes, font } from 'styles/constants';

export const container = css`
  position: relative;
  width: 100%;
  height: 46px;

  select {
    width: 100%;
    height: 100%;
    background-color: ${colors.white001};
    border: 1px solid ${colors.lightgray100};
    padding: 0 11px;
    border-radius: ${sizes.borderRadius};
    outline: none;
    -webkit-appearance: none;
    background-image: url('/public/static/svg/arrow-down-icon.svg');
    background-position: right 11px center;
    background-repeat: no-repeat;
    font-size: ${font.regular};

    &:focus {
      border-color: ${colors.black001};
    }
  }
`;

export const icon = css`
  position: absolute;
  right: 11px;
  top: 11px;
`;
