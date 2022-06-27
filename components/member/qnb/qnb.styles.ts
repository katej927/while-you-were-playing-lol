import { css } from '@emotion/react';
import { colors, font, sizes } from 'styles/constants';
import { flex } from 'styles/mixin';

export const container = css`
  background-color: red;
  margin: 166px 0 0 16px;
  position: absolute;
  height: 88vh;
  width: 150px;
`;

export const contentContainer = css`
  position: sticky;
  top: 10rem;
  background-color: ${colors.gray100};
`;

export const slideContainer = css`
  ${flex('column', 'center')}
  margin: 8px 0 0 8px;
`;

export const arrows = css`
  fill: ${colors.white001};
  width: 20px;
  height: 20px;
`;

export const eachSlide = css`
  position: relative;
  display: flex !important;
  justify-content: space-between;
  background: linear-gradient(to left, rgba(169, 208, 113, 0), rgba(0, 0, 0, 1));

  img {
    z-index: -1;
    width: inherit;
  }
`;

export const txtContainer = css`
  position: absolute;
  ${flex('column', 'start', 'center')};
  font-size: ${font.medium};
  color: ${colors.lightgray100};
  top: 21px;
  left: 9px;
`;

export const region = css`
  margin-top: 6px;
  font-size: ${font.small};
`;
