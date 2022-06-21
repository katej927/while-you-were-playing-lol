export interface ICommon {
  lat: number;
  lng: number;
}

export interface IMarkerProps extends ICommon {
  isSelected: boolean;
}

export interface ILocation extends ICommon {
  abbreviation: string;
}

export interface IRegion extends ILocation {
  continent: string;
}
