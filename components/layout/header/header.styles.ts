import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, sizes, logo } from 'styles/constants';
import { flex } from 'styles/mixin';

export const Container = styled.nav<{ isMinHeight: boolean }>`
  position: fixed;
  width: -webkit-fill-available;
  height: initial;
  padding: ${({ isMinHeight }) => (isMinHeight ? '16px' : '36px 16px;')};
  background-color: ${colors.gray100};
  transition: 0.4s;
  z-index: 1;
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

export const logoBtn = css`
  font-size: 32px;
  ${logo}
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
  margin-right: 6px;
  svg {
    fill: ${colors.white001};
  }
`;

export const localesContainer = css`
  width: 150px;
  position: absolute;
  background-color: ${colors.white001};
  top: 41px;
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
