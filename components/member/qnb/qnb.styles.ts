import { colors } from 'styles/constants';
import { css } from '@emotion/react';

export const container = css`
  background-color: red;
  position: absolute;
  height: 102vh;
  width: 150px;
  margin: 24px;
`;

export const contentContainer = css`
  background-color: ${colors.gray100};
  position: sticky;
  position: -webkit-sticky;
  top: 30rem;
`;

export const slideContainer = css`
  margin: 8px 0 0 8px;

  div {
    height: fit-content !important;
  }
`;

export const eachSlide = css`
  display: flex !important;
  justify-content: space-between;
  background: linear-gradient(to left, rgba(169, 208, 113, 0), rgba(0, 0, 0, 1));

  span {
    color: ${colors.lightgray100};
  }

  img {
    z-index: -1;
    height: 70px;
  }
`;
