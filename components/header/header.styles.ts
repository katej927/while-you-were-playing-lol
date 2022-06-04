import { css } from '@emotion/css';
import { colors } from '../../styles/constants';

export const wrapper = css`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  flex: 0 1 1080px;
  padding: 16px;
  height: 64px;
  background-color: ${colors.gray100};

  @media (max-width: 600px) {
    height: initial;
  }
`;

export const mainIcon = css`
  path {
    fill: ${colors.theme};
  }
  cursor: pointer;
`;

export const localeBtn = css`
  border: 1px solid ${colors.gray101};
  border-right: none;
  padding: 5px 10px;
  color: ${colors.lightPurple};
  background-color: ${colors.gray104};
`;

export const selected = css`
  border: 1px solid ${colors.theme};
  color: ${colors.white001};
  background: ${colors.theme};
`;
