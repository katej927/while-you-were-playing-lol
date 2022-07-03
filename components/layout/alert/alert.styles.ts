import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, sizes, font_weight, font } from 'styles/constants';
import { flex } from 'styles/mixin';

const covertColor = {
  success: colors.lightGreen,
};

export const Container = styled.aside<{ status: 'success' }>`
  ${flex('row', 'center', 'space-between')}
  position: fixed;
  width: 300px;
  background-color: ${colors.white001};
  border-radius: ${sizes.borderRadius};
  border-left: 5px solid ${({ status }) => covertColor[status]};
  padding: 16px;
  right: 10px;
  top: 10px;
  z-index: 12;
`;

export const LeftContainer = styled.div<{ status: 'success' }>`
  ${flex('row')}

  svg:first-of-type {
    margin-right: 16px;
    fill: ${({ status }) => covertColor[status]};
  }
`;

export const textContainer = css`
  ${flex('column', 'start')};
  width: 200px;
  font-size: ${font.medium};
  color: ${colors.lightgray102};

  span:nth-of-type(1) {
    margin-bottom: 8px;
    font-weight: ${font_weight.bold};
    color: ${colors.gray106};
  }
`;
