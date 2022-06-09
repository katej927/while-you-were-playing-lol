import { css } from '@emotion/react';
import { sizes, colors, font } from './../../styles/constants';
import { flex, bounce } from './../../styles/mixin';

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
  border: 1px solid ${colors.gray103};
  border-radius: ${sizes.borderRadius};
  font-size: ${font.regular};
`;

export const region = css`
  ${flex('center')}
  padding: 7px 16px;
  width: 70px;
  background-color: ${colors.gray104};
  color: ${colors.white001};
`;

export const searchWrapper = css`
  ${flex('center', 'center', 'space-between')}
  padding: 7px 24px;
  width: 100%;
`;

export const searchInput = css`
  width: inherit;
  line-height: 1.6;
  color: ${colors.white001};
`;

export const searchIcon = css`
  path {
    fill: ${colors.white001};
  }
`;
