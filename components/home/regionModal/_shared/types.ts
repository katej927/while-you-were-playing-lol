import { IRegionState } from 'types';

export interface ICommon {
  lat: number;
  lng: number;
}

export interface IMarkerProps extends ICommon {
  isSelected: boolean;
}

export interface IRegion extends IRegionState {
  continent: string;
}
