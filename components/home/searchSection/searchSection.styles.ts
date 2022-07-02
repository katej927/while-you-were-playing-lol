import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { sizes, colors, font, font_weight } from 'styles/constants';
import { flex, textLinearGradient, slowlyAppear } from 'styles/mixin';

interface IIsOpacityOn {
  isOpacityOn: boolean;
}

export const divisionTextContainer = css`
  margin-bottom: 48px;
  text-align: center;

  small {
    letter-spacing: 0.2rem;
  }
`;

export const DivisionText = styled.small<IIsOpacityOn>`
  ${({ isOpacityOn }) => slowlyAppear(isOpacityOn, 0.2)}
`;

export const DivisionFigure = styled.div<IIsOpacityOn>`
  ${({ isOpacityOn }) => slowlyAppear(isOpacityOn, 0.2)}
`;

export const divisionLine = css`
  margin: auto;
  height: 100px;
  width: 1px;
  background: linear-gradient(#111, #019ae9);
`;

export const divisionCircle = css`
  width: 40px;
  height: 40px;
  background: linear-gradient(90deg, ${colors.deepBlue}, ${colors.neonBlue});
  margin: auto;
  margin-bottom: 24px;
  border-radius: 50%;

  svg {
    fill: ${colors.white001};
  }
`;

export const SectionTitle = styled.h3<IIsOpacityOn>`
  margin-bottom: 35px;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  ${textLinearGradient('90deg', colors.deepBlue, colors.neonBlue)}
  ${({ isOpacityOn }) => slowlyAppear(isOpacityOn, 0.2)}
`;

export const Title = styled.h2<IIsOpacityOn>`
  ${flex('column')}
  margin-bottom: 25px;
  ${({ isOpacityOn }) => slowlyAppear(isOpacityOn, 0.2)}

  span {
    font-size: ${font.large};
    line-height: 2;
  }

  strong {
    font-size: 64px;
    font-weight: ${font_weight.bold};
    line-height: 1.1;
  }
`;

export const Desc = styled.p<IIsOpacityOn>`
  margin-bottom: 64px;
  letter-spacing: 1px;
  line-height: 1.6;
  text-align: center;
  ${({ isOpacityOn }) => slowlyAppear(isOpacityOn, 0.2)}
  color: ${colors.lightgray100};
`;

export const Form = styled.form<IIsOpacityOn>`
  display: flex;
  margin: auto;
  margin-top: 16px;
  margin-bottom: 250px;
  max-width: ${sizes.maxWidth};
  background-color: ${colors.gray101};
  border-radius: 35px;
  font-size: ${font.regular};
  ${({ isOpacityOn }) => slowlyAppear(isOpacityOn, 0.2)}
`;

export const regionBtnContainer = css`
  ${flex('column', 'start', 'flex-start')}
  position: relative;
  padding: 10px 8px 10px 32px;
  width: 194px;

  small {
    margin-bottom: 10px;
    color: ${colors.white001};
    font-size: ${font.small};
    font-weight: ${font_weight.bold};
  }

  span {
    font-size: ${font.regular};
    color: ${colors.lightgray100};
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -7px;
    width: 1px;
    height: 14px;
    background: ${colors.black001};
  }
`;

export const arrowDownIcon = css`
  position: absolute;
  width: 20px;
  right: 8px;
  bottom: 11px;
  fill: ${colors.lightgray100};
`;

export const searchWrapper = css`
  position: relative;
  ${flex('center', 'center', 'space-between')}
  padding: 7px 24px;
  width: 100%;
`;
export const searchLabel = css`
  position: absolute;
  top: 12px;
  font-size: ${font.small};
  font-weight: ${font_weight.bold};
`;

export const searchInput = css`
  width: inherit;
  padding-top: 25px;
  line-height: 1.6;
  color: ${colors.lightgray100};
`;

export const searchIcon = css`
  path {
    fill: ${colors.lightgray100};
  }
`;
