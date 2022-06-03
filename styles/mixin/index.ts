import { css } from '@emotion/css';

export const flex = (direction = 'row', align = 'center', justify = 'center') => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`;
