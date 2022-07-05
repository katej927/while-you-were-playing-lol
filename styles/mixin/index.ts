import { css } from '@emotion/react';
import facepaint from 'facepaint';

export const flex = (direction = 'row', align = 'center', justify = 'center') => css`
  display: flex !important;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`;

const breakpoints = [376, 600, 768, 1000, 1200, 1300, 1800, 2400];
const screenMode = ['landscape', 'portrait'];
export const responsive = {
  onlyScreen: facepaint(breakpoints.map((bp) => `@media only screen and (min-width: ${bp}px)`)),
  isPortraitOrLandscape: facepaint(
    screenMode.map((screenMode) => `@media only screen and (orientation: ${screenMode})`)
  ),
};

export const textLinearGradient = (direction: string, firstColor: string, secondColor: string) => css`
  background-image: linear-gradient(${direction}, ${firstColor}, ${secondColor});
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const slowlyAppear = (isOpacityOn: boolean, delay = 0.2) => css`
  opacity: ${isOpacityOn ? 1 : 0};
  transition: opacity 1s ${delay}s ease;
`;
