import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, sizes, font } from 'styles/constants';

export const Container = styled.div<{ iconExist: boolean }>`
  input {
    position: relative;
    width: 100%;
    height: 46px;
    padding: ${({ iconExist }) => (iconExist ? '0 44px 0 11px' : '0 11px')};
    border: 1px solid ${colors.lightgray100};
    border-radius: ${sizes.borderRadius};
    font-size: ${font.regular};
    outline: none;
    ::placeholder {
      color: ${colors.lightgray100};
    }
    &:focus {
      border-color: ${colors.black001} !important ;
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
