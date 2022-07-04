import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, modal, font, sizes, font_weight } from 'styles/constants';
import { flex, responsive } from 'styles/mixin';

import { IMarkerProps } from './_shared';

export const container = css`
  position: relative;
  width: ${sizes.maxWidth};
  height: 'fit-content';
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
  ${responsive.onlyScreen({
    height: ['200px', , '400px'],
  })}
`;

export const Marker = styled.button<IMarkerProps>`
  background-color: ${({ isSelected }) => (isSelected ? colors.theme : colors.white001)};
  height: fit-content;
  width: max-content;
  padding: 5px 8px;
  font-weight: ${font_weight.bold};
  font-size: ${font.regular};
  color: ${({ isSelected }) => (isSelected ? colors.white001 : colors.gray103)};
  box-shadow: rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px;
  border-radius: ${sizes.borderRadius};
`;

export const optionContainer = css`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const ContinentBtn = styled.button<{ isSelected: boolean }>`
  ${flex('row', 'center', 'start')}
  ${responsive.onlyScreen({
    fontSize: ['13px', , font.medium],
    width: ['145px', , '160px'],
  })}
  padding: 5px;
  color: ${({ isSelected }) => (isSelected ? colors.theme : colors.gray103)};

  div {
    margin-right: 5px;
    background-color: ${({ isSelected }) => (isSelected ? colors.theme : 'trasparent')};
    border: 2px solid ${({ isSelected }) => (isSelected ? colors.theme : colors.lightgray101)};
    height: 15px;
    width: 15px;
    box-shadow: 0 0 0 2px ${colors.white001} inset;
    border-radius: 50%;
  }
`;

export const saveBtn = css`
  ${modal.button}
  margin-top: 24px;
`;
