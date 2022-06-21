import { useState, Dispatch, SetStateAction } from 'react';
import GoogleMapReact from 'google-map-react';

import { REGION_OPTIONS, IRegion, ILocation } from './_shared';

import { CloseIcon, BRIcon } from 'public/static/svg';
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

  // const ICONS = (abbreviation: string) => {
  //   return {
  //     BR: <BRIcon css={S.regionIcon} />,
  //     // EUN:
  //   }[abbreviation];
  // };

  const onClickOption = (region: IRegion) => {
    const { abbreviation, lat, lng, continent } = region;
    console.log('onClickOption lat, lng', lat, lng);

    setRegion(abbreviation);
    setLocation({ lat: lat, lng: lng, abbreviation });
  };

  console.log('location', location);

  return (
    <section css={S.container}>
      <button css={S.closeIcon} onClick={onClickCloseBtn}>
        <CloseIcon />
      </button>
      <h5 css={S.title}>지역 선택</h5>
      <section css={S.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MY_GOOGLE_MAP_API! }}
          defaultCenter={location}
          defaultZoom={0}
        >
          {REGION_OPTIONS.map((region) => {
            const { abbreviation, continent, lat, lng } = region;
            return (
              <S.Marker key={abbreviation} lat={lat} lng={lng} isSelected={abbreviation === location.abbreviation}>
                {continent}
              </S.Marker>
            );
          })}
        </GoogleMapReact>
      </section>
      <section>
        <ul>
          {REGION_OPTIONS.map((region) => {
            const { abbreviation, continent } = region;
            return (
              <li key={abbreviation}>
                {/* {ICONS(abbreviation)} */}
                <button css={S.continentBtn} onClick={() => onClickOption(region)}>
                  <S.Radio />
                  {continent}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default RegionModal;
