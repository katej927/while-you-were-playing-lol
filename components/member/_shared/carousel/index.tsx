import { useSelector } from 'store';
import format from 'date-fns/format';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useModal } from 'hooks';
import { settings, CarouselModal } from './_shared';

import * as S from './carousel.styles';

const Carousel = () => {
  const { allMatchData } = useSelector((state) => state.riot.riot);
  const { openModal, ModalPortal } = useModal();

  return (
    <div>
      <ModalPortal>
        <CarouselModal />
      </ModalPortal>
      <Slider {...settings}>
        {allMatchData.map((match) => (
          <div key={match.time.gameCreation} css={S.eachWrapper} onClick={openModal}>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/${match.matchData.championName}.png`}
            />
            <time css={S.time} dateTime={format(new Date(match.time.gameCreation), 'yyyy-MM-dd')}>
              {format(new Date(match.time.gameCreation), 'yy / MM / dd')}
            </time>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
