import { css } from '@emotion/css';
import { sizes, colors, font } from '../../../styles/constants';

export const wrapper = css`
  margin-top: ${sizes.margin};
  background-color: ${colors.gray101};
  border-radius: ${sizes.borderRadius};
`;

export const title = css`
  padding: 12px 16px;
  border-bottom: 1px solid ${colors.gray100};
  color: ${colors.lightgray100};
  font-size: ${font.medium};
`;

export const children = css`
  padding: ${sizes.padding};
`;
