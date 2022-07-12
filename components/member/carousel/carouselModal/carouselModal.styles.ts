import { css } from '@emotion/react';
import { colors, sizes, font_weight } from 'styles/constants';
import { flex, responsive } from 'styles/mixin';

export const wrapper = css`
  ${flex('row')}
  position: relative;
  z-index: 11;
`;

export const bgImg = css`
  ${responsive.isPortraitOrLandscape({
    height: ['80vh', 'auto'],
  })}
  width: 100%;
`;

export const descWrapper = css`
  ${flex('column', 'baseline')}
  ${responsive.isPortraitOrLandscape({
    width: ['100%', '40%'],
    color: [colors.lightgray100, colors.black001],
    background: [
      'linear-gradient(to bottom, rgba(169, 208, 113, 0), 25%, rgba(0, 0, 0, 1))',
      'linear-gradient(to left, rgba(169, 208, 113, 0), rgba(136, 173, 215, 1))',
    ],
    height: ['fit-content', '100%'],
    padding: ['20px', '2%'],
    flexDirection: ['row', 'column'],
    flex: ['1 1 auto'],
    flexWrap: ['wrap'],
    bottom: ['0'],
  })}

  position: absolute;
  left: 0;
`;

export const categoriesContainer = css`
  ${responsive.isPortraitOrLandscape({
    width: ['50%', 'fit-content'],
    marginBottom: ['14px', '0px'],
  })}

  @media only screen and (orientation: portrait) and (min-width: 768px) {
    margin-bottom: 20px;
  }
  height: fit-content;
`;

export const subject = css`
  ${responsive.isPortraitOrLandscape({
    fontSize: ['15px', 'calc(8px + 1vw)'],
  })}

  @media only screen and (orientation: portrait) and (min-width: 768px) {
    font-size: calc(1px + 2vw);
  }

  font-weight: ${font_weight.bold};
`;

export const content = css`
  ${responsive.isPortraitOrLandscape({
    fontSize: ['13px', 'calc(9px + 1vw)'],
    margin: ['5px 0px 0px 0px', '10px 0px 15px'],
  })}

  @media only screen and (orientation: portrait) and (min-width: 768px) {
    font-size: calc(3px + 1.5vw);
    margin-top: 10px;
  }
`;

export const itemImg = css`
  ${responsive.isPortraitOrLandscape({
    width: ['16%', '10%'],
  })}
  border-radius: ${sizes.borderRadius};
  margin-right: 3px;
  height: auto;
`;

export const closeBtn = css`
  position: absolute;
  top: 30px;
  right: 30px;
`;

export const closeIcon = css`
  fill: ${colors.white001};
`;
