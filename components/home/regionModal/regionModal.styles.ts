import { background } from './../../../hooks/useModal/useModal.styles';
import { flex } from 'styles/mixin';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, modal, font } from 'styles/constants';

import { IMarkerProps } from './_shared';

export const container = css`
  position: relative;
  width: 815px;
  padding: ${modal.padding};
  background-color: ${colors.white001};
  z-index: 11;
`;

export const closeIcon = css`
  ${modal.closeIcon}
`;

export const title = css`
  ${modal.title}
`;

export const mapContainer = css`
  width: 100%;
  height: 400px;
  background-color: green;
`;

export const Marker = styled.div<IMarkerProps>`
  background-color: ${({ isSelected }) => (isSelected ? colors.theme : colors.black001)};
  height: fit-content;
  width: fit-content;
  padding: 5px;
  color: yellow;
  opacity: 0.7;
`;

export const continentBtn = css`
  ${flex('row')}
  font-size: ${font.medium};
`;

export const Radio = styled.div`
  margin-right: 5px;
  background-color: ${colors.theme};
  border: 2px solid ${colors.theme};
  height: 15px;
  width: 15px;
  box-shadow: 0 0 0 2px ${colors.white001} inset;
  border-radius: 50%;
`;

export const regionIcon = css`
  width: 800px;
  height: 300px;
`;
