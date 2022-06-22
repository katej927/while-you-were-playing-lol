import { css } from '@emotion/react';
import { sizes, colors, font, font_weight } from 'styles/constants';
import { flex, bounce } from 'styles/mixin';

export const homeWrapper = css`
  padding: ${sizes.padding};
`;

export const header = css`
  ${flex('column')}
  margin: 20px auto 50px;
  h1 {
    font-size: 40px;
    font-weight: 900;
    color: ${colors.lightgray100};
  }
`;

export const mainIcon = css`
  path {
    fill: ${colors.theme};
  }
  animation: ${bounce} 1s ease infinite;
`;

export const homeForm = css`
  display: flex;
  margin: auto;
  margin-top: 16px;
  max-width: ${sizes.maxWidth};
  background-color: ${colors.gray101};
  border-radius: 35px;
  font-size: ${font.regular};
`;

export const regionBtnContainer = css`
  ${flex('column', 'start', 'flex-start')}
  position: relative;
  padding: 10px 8px 10px 32px;
  width: 194px;
  color: ${colors.white001};

  small {
    margin-bottom: 10px;
    font-size: ${font.small};
    font-weight: ${font_weight.bold};
    color: ${colors.white001};
  }

  span {
    font-size: ${font.regular};
    color: ${colors.lightgray102};
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -7px;
    width: 1px;
    height: 14px;
    background: ${colors.black001};
  }
`;

export const arrowDownIcon = css`
  position: absolute;
  width: 20px;
  right: 8px;
  bottom: 11px;
  fill: ${colors.lightgray102};
`;

export const searchWrapper = css`
  position: relative;
  ${flex('center', 'center', 'space-between')}
  padding: 7px 24px;
  width: 100%;
`;
export const searchLabel = css`
  position: absolute;
  top: 12px;
  font-size: ${font.small};
  font-weight: ${font_weight.bold};
  color: ${colors.white001};
`;

export const searchInput = css`
  width: inherit;
  padding-top: 25px;
  line-height: 1.6;
  color: ${colors.lightgray102};
`;

export const searchIcon = css`
  path {
    fill: ${colors.lightgray102};
  }
`;
