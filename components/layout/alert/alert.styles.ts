import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, sizes, font_weight, font } from 'styles/constants';
import { flex } from 'styles/mixin';

const covertColor = {
  Success: colors.lightGreen,
};

export const Container = styled.aside<{ status: 'Success' }>`
  ${flex('row', 'center', 'space-between')}
  position: fixed;
  width: 300px;
  background-color: ${colors.white001};
  border-radius: ${sizes.borderRadius};
  border-left: 5px solid ${({ status }) => covertColor[status]};
  padding: 16px;
  right: 10px;
  top: 10px;
  z-index: 1;
`;

export const LeftContainer = styled.div<{ status: 'Success' }>`
  ${flex('row')}

  svg:first-of-type {
    margin-right: 16px;
    fill: ${({ status }) => covertColor[status]};
  }
`;

export const textContainer = css`
  ${flex('column', 'start')};
  font-size: ${font.medium};
  color: ${colors.lightgray102};

  span:nth-of-type(1) {
    margin-bottom: 8px;
    font-weight: ${font_weight.bold};
    color: ${colors.gray106};
  }
`;
