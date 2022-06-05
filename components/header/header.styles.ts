import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '../../styles/constants';

export const wrapper = css`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  flex: 0 1 1080px;
  padding: 16px;
  height: initial;
  background-color: ${colors.gray100};
`;

export const mainIcon = css`
  path {
    fill: ${colors.theme};
  }
  cursor: pointer;
`;

type Props = {
  isSelected: boolean;
};

export const LocalBtn = styled.button`
  border: 1px solid ${(props: Props) => (props.isSelected ? colors.theme : colors.gray101)};
  border-right: none;
  padding: 5px 10px;
  color: ${(props: Props) => (props.isSelected ? colors.white001 : colors.lightPurple)};
  background-color: ${(props: Props) => (props.isSelected ? colors.theme : colors.gray104)};
`;
