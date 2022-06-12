import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, sizes } from '../../../styles/constants';
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

export const rightBtnWrapper = css`
  ${flex('row')}
`;

export const switchLanguageContainer = css`
  display: flex;
  justify-content: center;

  position: relative;
`;

export const switchLanguageBtn = css`
  svg {
    fill: ${colors.white001};
  }
`;

export const localesContainer = css`
  width: 150px;
  position: absolute;
  background-color: ${colors.white001};
  top: 34px;
  border-radius: ${sizes.borderRadius};
`;

export const LocalBtn = styled.button<{ isSelected: boolean }>`
  border-right: none;
  padding: 0 0 0 20px;
  color: ${({ isSelected }) => (isSelected ? colors.theme : colors.gray100)};
  line-height: 40px;
  width: 100%;
  text-align: start;
`;
