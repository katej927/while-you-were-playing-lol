import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { flex } from 'styles/mixin';

export const header = css`
  ${flex('column')}
  margin: 150px auto 50px;
`;

export const Titles = styled.span`
  font-size: 160px;
  font-weight: 900;
  line-height: initial;
  position: relative;

  &:nth-child(1) {
    background: linear-gradient(to right, #007cf0, #00dfd8);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: opacity 0.5s linear;
  }
`;
