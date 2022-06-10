import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, sizes, font } from 'styles/constants';

export const Container = styled.div<{ isValid: boolean; validateMode: boolean }>`
  position: relative;
  width: 100%;
  height: 46px;

  select {
    width: 100%;
    height: 100%;
    background-color: ${colors.white001};
    border: 1px solid
      ${({ isValid, validateMode }) =>
        !validateMode ? colors.lightgray100 : isValid ? colors.lightgray100 : colors.error};
    padding: 0 11px;
    border-radius: ${sizes.borderRadius};
    outline: none;
    -webkit-appearance: none;
    background-image: url('/public/static/svg/arrow-down-icon.svg');
    background-position: right 11px center;
    background-repeat: no-repeat;
    font-size: ${font.regular};
    cursor: pointer;

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
