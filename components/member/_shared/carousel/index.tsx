import { useState } from 'react';
import { useSelector } from 'store';
import dynamic from 'next/dynamic';
import format from 'date-fns/format';
import useTranslation from 'next-translate/useTranslation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useModal } from 'hooks';
import { settings, SLIDE_IMG_URL } from './_shared';
import { IEachMatchInfo } from 'types';

import * as S from './carousel.styles';

const DynamicModalPortal = dynamic(() => import('./_shared/carouselModal'));

const Carousel = () => {
  const [modalData, setModalData] = useState<IEachMatchInfo>();
  const { allMatchData } = useSelector((state) => state.riot.riot);
  const { openModal, closeModal, ModalPortal } = useModal();
  const { t } = useTranslation('common');

  const onDetailBtnClick = (match: IEachMatchInfo) => {
    openModal();
    setModalData(match);
  };

  return (
    <div>
      {modalData && (
        <ModalPortal>
          <DynamicModalPortal modalData={modalData} closeModal={closeModal} />
        </ModalPortal>
      )}
      <Slider {...settings}>
        {allMatchData.map((match) => (
          <div key={match.time.gameCreation} css={S.eachWrapper}>
            <img src={SLIDE_IMG_URL(match.matchData.championName)} />
            <time css={S.time} dateTime={format(new Date(match.time.gameCreation), 'yyyy-MM-dd')}>
              {format(new Date(match.time.gameCreation), 'yy / MM / dd')}
            </time>
            <button css={S.detailBtn} onClick={() => onDetailBtnClick(match)}>
              {t('seeMore')}
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
