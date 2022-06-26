import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, sizes, font } from 'styles/constants';

export const header = css`
  background-color: ${colors.gray101};
  padding: 24px;
`;

export const headerContentWrapper = css`
  display: flex;
  align-items: center;
  max-width: ${sizes.maxWidth};
  margin: auto;
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

export const region = css`
  font-size: ${font.small};
  color: ${colors.lightgray100};
  line-height: 18px;
`;

export const contentsWrapper = css`
  padding: ${sizes.padding};
`;

export const timeBlockWrapper = css`
  display: flex;
  flex-wrap: wrap;
`;

export const TimeBlock = styled.div<{ is1st: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  border-radius: ${sizes.borderRadius};
  background-color: ${({ is1st }) => (is1st ? colors.theme : colors.gray102)};
  width: calc(100% / 3);
  min-width: fit-content;
  margin-left: 8px;
  margin-top: 8px;
  color: ${colors.white001};
  flex: 1 0 222px;
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

export const Opportunity = styled.span<{ idx: number }>`
  font-size: ${font.large};
  line-height: 36px;

  color: ${({ idx }) =>
    [colors.theme, colors.blue, colors.turquoise, colors.lightGreen, colors.yellow, colors.red][idx]};
`;
