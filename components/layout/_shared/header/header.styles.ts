import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, sizes } from '../../../../styles/constants';
import { flex } from 'styles/mixin';

export const wrapper = css`
  padding: 16px;
  height: initial;
  background-color: ${colors.gray100};
`;

export const contentWrapper = css`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  flex: 0 1 1080px;
  max-width: ${sizes.maxWidth};
  margin: auto;
  height: initial;
  background-color: transparent;
`;

export const mainIcon = css`
  path {
    fill: ${colors.theme};
  }
  cursor: pointer;
`;

type Props = {
  isSelected: boolean;
};

export const rightBtnWrapper = css`
  ${flex('row')}
`;

export const LocalBtn = styled.button`
  border: 1px solid ${(props: Props) => (props.isSelected ? colors.theme : colors.gray101)};
  border-right: none;
  padding: 5px 10px;
  color: ${(props: Props) => (props.isSelected ? colors.white001 : colors.lightPurple)};
  background-color: ${(props: Props) => (props.isSelected ? colors.theme : colors.gray104)};
`;

export const userProfileContainer = css`
  position: relative;
`;

export const authBtns = css`
  background-color: red;
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
