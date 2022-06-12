import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, sizes } from 'styles/constants';

export const AuthBtns = styled.button<{ btnName: string }>`
  padding: 8px 16px;
  margin-left: 12px;
  border-radius: ${sizes.borderRadius};
  color: ${colors.white001};
  background-color: ${({ btnName }) => (btnName === '로그인' ? colors.gray104 : colors.theme)};
`;
