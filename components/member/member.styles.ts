import { css } from '@emotion/css';
import { colors, sizes, font } from '../../styles/constants';

export const header = css`
  background-color: ${colors.gray101};
  padding: 24px;
`;

export const headerContentWrapper = css`
  display: flex;
  align-items: center;
`;

export const profileIcon = css`
  width: 100px;
  margin-right: 20px;
  border-radius: 15%;
`;

export const summonerName = css`
  font-size: ${font.large};
  line-height: 36px;
  color: ${colors.white001};
  font-weight: bold;
`;

export const contentsWrapper = css`
  padding: ${sizes.padding};
`;

export const timeBlockWrapper = css`
  display: flex;
  flex-wrap: wrap;
`;

export const timeBlock = css`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  border-radius: ${sizes.borderRadius};
  background-color: ${colors.gray102};
  width: calc(100% / 3);
  min-width: fit-content;
  margin-left: 8px;
  margin-top: 8px;
  color: ${colors.white001};
  flex: 1 0 222px;
`;

export const day = css`
  background-color: ${colors.theme};
`;

export const time = css`
  font-size: ${font.large};
  line-height: 36px;
`;

export const timeUnit = css`
  font-size: ${font.small};
`;

export const opportunityCostWrapper = css`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
`;

export const opportunityCostBox = css`
  margin: 8px 0px 0px 8px;
  display: flex;
  flex-direction: column;
  padding: ${sizes.padding};
  border-radius: ${sizes.borderRadius};
  background-color: ${colors.gray102};
  flex: 1 0 222px;
`;

export const opportunityKind = css`
  font-size: ${font.medium};
  color: ${colors.lightgray100};
`;

export const opportunity = css`
  font-size: ${font.large};
  line-height: 36px;

  &.order0 {
    color: ${colors.theme};
  }
  &.order1 {
    color: ${colors.blue};
  }
  &.order2 {
    color: ${colors.turquoise};
  }
  &.order3 {
    color: ${colors.lightGreen};
  }
  &.order4 {
    color: ${colors.yellow};
  }
  &.order5 {
    color: ${colors.red};
  }
`;
