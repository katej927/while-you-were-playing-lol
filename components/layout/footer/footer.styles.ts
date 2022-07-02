import { css } from '@emotion/react';
import { colors, sizes, logo, font } from 'styles/constants';
import { flex } from 'styles/mixin';

export const Container = css`
  ${flex('column')}
  margin-top: 100px;
  padding: 36px 0px 48px;
  border-top: 1px solid ${colors.gray101};
  background-color: ${colors.gray100};
  color: ${colors.lightgray100};
`;

export const contentContainer = css`
  ${flex('row')}

  svg {
    width: 25px;
    fill: ${colors.lightgray100};
  }
`;

export const iconBtn = css`
  ${flex('row')}
  margin: 10px;
`;

export const logoBtn = css`
  ${logo}
  margin: 20px 0px;
  font-size: 30px;
  cursor: pointer;
`;

export const policyExplain = css`
  max-width: ${sizes.maxWidth};
  font-size: ${font.small};
  line-height: 18px;
  text-align: center;
`;
