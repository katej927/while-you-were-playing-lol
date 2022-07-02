import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, sizes } from 'styles/constants';
import { flex } from 'styles/mixin';

export const Container = css`
  ${flex('row')}
  margin-top: 100px;
  padding: 36px 0px;
  border-top: 1px solid ${colors.gray101};
  background-color: ${colors.black001};
  color: ${colors.lightgray100};
`;

export const contentContainer = css`
  ${flex('row')}
  max-width: ${sizes.maxWidth};
`;

export const IconBtn = styled.button<{ idx: number }>`
  ${flex('row')}
  background-color: ${({ idx }) => [colors.orange, colors.white001, colors.kakao, colors.facebook][idx]};

  padding: 10px;
  border-radius: 50%;

  svg {
    width: 25px;
    fill: ${({ idx }) => [colors.white001, colors.twitter, 'black', colors.white001][idx]};
  }
`;
