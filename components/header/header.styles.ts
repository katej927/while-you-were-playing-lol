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
