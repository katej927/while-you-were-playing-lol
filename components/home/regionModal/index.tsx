import { useState, Dispatch, SetStateAction, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

import { REGION_OPTIONS, IRegion, ILocation } from './_shared';

import { CloseIcon } from 'public/static/svg';
import * as S from './regionModal.styles';

interface IProps {
  closeModal: () => void;
  setRegion: Dispatch<SetStateAction<string>>;
}

const RegionModal = ({ closeModal, setRegion }: IProps) => {
  const [location, setLocation] = useState<ILocation>({
    abbreviation: REGION_OPTIONS[0].abbreviation,
    lat: REGION_OPTIONS[0].lat,
    lng: REGION_OPTIONS[0].lng,
  });

  const onClickCloseBtn = () => closeModal();

  const onClickOption = (region: IRegion) => {
    const { abbreviation, lat, lng } = region;

    setLocation({ abbreviation, lat, lng });
    setRegion(abbreviation);
  };

  return (
    <section css={S.container}>
      <button css={S.closeIcon} onClick={onClickCloseBtn}>
        <CloseIcon />
      </button>
      <h5 css={S.title}>지역 선택</h5>
      <section css={S.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MY_GOOGLE_MAP_API! }}
          defaultCenter={{ lat: REGION_OPTIONS[0].lat, lng: REGION_OPTIONS[0].lng }}
          defaultZoom={0}
          center={{ lat: location.lat, lng: location.lng }}
        >
          {REGION_OPTIONS.map((region) => {
            const { abbreviation, continent, lat, lng } = region;
            return (
              <S.Marker
                key={abbreviation}
                lat={lat}
                lng={lng}
                isSelected={abbreviation === location.abbreviation}
                onClick={() => onClickOption(region)}
              >
                {continent}
              </S.Marker>
            );
          })}
        </GoogleMapReact>
      </section>
      <ul css={S.optionContainer}>
        {REGION_OPTIONS.map((region) => {
          const { abbreviation, continent } = region;
          return (
            <li key={abbreviation}>
              <S.ContinentBtn onClick={() => onClickOption(region)} isSelected={abbreviation === location.abbreviation}>
                <div />
                {continent}
              </S.ContinentBtn>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RegionModal;
