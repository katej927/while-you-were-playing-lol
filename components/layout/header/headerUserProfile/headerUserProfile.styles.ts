import { css } from '@emotion/react';
import { colors, sizes, font } from 'styles/constants';
import { flex } from 'styles/mixin';

export const userProfileContainer = css`
  position: relative;
  font-size: ${font.medium};
`;

export const userProfile = css`
  ${flex('row')}
  margin-left: 10px;
  padding: 8px 16px;
  border: 0;
  border-radius: ${sizes.borderRadius};
  background-color: ${colors.gray104};
  color: ${colors.white001};
  cursor: pointer;
  outline: none;

  svg {
    fill: ${colors.white001};
    margin-left: 16px;
  }
`;

export const userMenuBtnContainer = css`
  position: absolute;
  right: 0;
  top: 43px;
  width: 240px;
  padding: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  border-radius: ${sizes.borderRadius};
  background-color: ${colors.white001};
  z-index: 1;

  li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 35px;
    padding: 0 16px;
    border-radius: ${sizes.borderRadius};
    cursor: pointer;

    &:hover {
      background-color: ${colors.lightgray101};
      color: ${colors.theme};
    }
  }
`;
