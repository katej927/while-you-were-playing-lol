import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from 'styles/constants';
import { flex, textLinearGradient } from 'styles/mixin';

export const header = css`
  ${flex('column')}
  margin: 180px auto 60px;
`;

const startColor = [colors.deepBlue, colors.theme, colors.deepOrange];
const endColor = [colors.neonBlue, colors.hotPink, colors.yellow];

export const Titles = styled.span<{ coloringTitleIdx: number; isSelected: boolean }>`
  font-size: 160px;
  font-weight: 900;
  line-height: initial;

  &:nth-of-type(${({ coloringTitleIdx }) => coloringTitleIdx}) {
    ${({ coloringTitleIdx }) =>
      textLinearGradient('90deg', startColor[coloringTitleIdx - 1], endColor[coloringTitleIdx - 1])}
  }
`;

export const titleDesc = css`
  margin-bottom: 100px;
  text-align: center;
  span {
    letter-spacing: 0.2rem;
    color: ${colors.lightgray100};
    line-height: 1.6em;
  }
`;
