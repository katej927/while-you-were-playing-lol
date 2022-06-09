import { css } from '@emotion/react';
import { colors, sizes } from 'styles/constants';
import { flex } from 'styles/mixin';

export const wrapper = css`
  ${flex('row')}
  position: relative;
  z-index: 11;
`;

export const img = css``;

export const descWrapper = css`
  ${flex('column', 'baseline')}
  position: absolute;
  left: 0;
  background: linear-gradient(to left, rgba(169, 208, 113, 0), rgba(136, 173, 215, 1));
  width: 40%;
  height: 100%;
  padding: 30px;
`;

export const subject = css`
  font-size: 30px;
  font-weight: 600;
`;
export const content = css`
  margin: 10px 0px 15px;
  font-size: 20px;
`;

export const itemImg = css`
  width: 40px;
  border-radius: ${sizes.borderRadius};
  margin-right: 3px;
`;

export const closeBtn = css`
  position: absolute;
  top: 30px;
  right: 30px;
`;

export const closeIcon = css`
  fill: ${colors.white001};
`;
