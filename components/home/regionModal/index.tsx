import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { useDispatch } from 'react-redux';

import { commonActions } from 'store/common';
import { REGION_OPTIONS, IRegion, ILocation } from './_shared';

import { CloseIcon } from 'public/static/svg';
import * as S from './regionModal.styles';

interface IProps {
  closeModal: () => void;
}

const RegionModal = ({ closeModal }: IProps) => {
  const [location, setLocation] = useState<ILocation>({
    abbreviation: REGION_OPTIONS[0].abbreviation,
    lat: REGION_OPTIONS[0].lat,
    lng: REGION_OPTIONS[0].lng,
  });

  const dispatch = useDispatch();

  const onClickCloseBtn = () => closeModal();

  const onClickOption = ({ abbreviation, lat, lng }: IRegion) => setLocation({ abbreviation, lat, lng });

  const onClickSaveBtn = () => {
    dispatch(commonActions.setRegion(location.abbreviation));
    closeModal();
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
      <button css={S.saveBtn} type='button' onClick={onClickSaveBtn}>
        저장하기
      </button>
    </section>
  );
};

export default RegionModal;
