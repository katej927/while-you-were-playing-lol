import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, sizes, font, font_weight } from 'styles/constants';

type TContainerProps = {
  iconExist: boolean;
  isvalid: boolean;
  isValidateMode: boolean | undefined;
};

export const Container = styled.div<TContainerProps>`
  input {
    position: relative;
    width: 100%;
    height: 46px;
    padding: ${({ iconExist }) => (iconExist ? '0 44px 0 11px' : '0 11px')};
    border: 1px solid
      ${({ isvalid, isValidateMode }) => (isValidateMode && !isvalid ? colors.error : colors.lightgray100)};
    border-radius: ${sizes.borderRadius};
    font-size: ${font.regular};
    outline: none;
    ::placeholder {
      color: ${colors.lightgray100};
    }
    &:focus {
      border-color: ${({ isvalid, isValidateMode }) =>
        isValidateMode && !isvalid ? colors.error : colors.black001} !important ;
    }
  }
`;

export const iconWrapper = css`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 11px;
  height: 46px;
`;

export const errorMsg = css`
  margin-top: 8px;
  font-weight: ${font_weight.bold};
  font-size: ${font.medium};
  color: ${colors.error};
`;
