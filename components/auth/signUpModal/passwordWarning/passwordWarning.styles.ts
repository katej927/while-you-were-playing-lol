import styled from '@emotion/styled';
import { colors } from 'styles/constants';

export const Container = styled.p<{ isValid: boolean }>`
  color: ${({ isValid }) => (isValid ? colors.lightGreen : colors.error)};
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
    fill: ${({ isValid }) => (isValid ? colors.lightGreen : colors.error)};
  }
`;
