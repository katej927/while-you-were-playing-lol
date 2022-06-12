import { css } from '@emotion/react';
import { colors, sizes } from 'styles/constants';

export const userProfileContainer = css`
  position: relative;
`;

export const userProfile = css`
  display: flex;
  align-items: center;
  margin-left: 10px;
  height: 42px;
  padding: 0 6px 0 16px;
  border: 0;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  border-radius: 21px;
  background-color: ${colors.white001};
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  }
  img {
    margin-left: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const userMenuBtnContainer = css`
  position: absolute;
  right: 0;
  top: 52px;
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
    height: 42px;
    padding: 0 16px;
    border-radius: ${sizes.borderRadius};
    cursor: pointer;

    &:hover {
      background-color: ${colors.lightgray101};
    }
  }
`;
