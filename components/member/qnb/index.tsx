import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import store from 'storejs';
import { uniqBy } from 'lodash';
import { getTime, endOfDay } from 'date-fns';
import Slider from 'react-slick';

import Container from '../container';
import { filterExpired, IRecentSearches } from './_shared';

import { ArrowUpIcon, ArrowDownIcon } from 'public/static/svg';
import * as S from './qnb.styles';

interface IProps {
  profileImg: string;
}

const Qnb = ({ profileImg }: IProps) => {
  const [recentSearches, setRecentSearches] = useState<IRecentSearches[]>([]);
  const customSlider = useRef<Slider>(null);
  const {
    query: { name: searchedName, region },
  } = useRouter();

  useEffect(() => {
    const newSearchedList = [
      { searchedName, region, profileImg, expiredAt: getTime(endOfDay(new Date())) },
      ...(store.get('recent searches') ?? ''),
    ];

    const result = uniqBy(filterExpired(newSearchedList), 'searchedName');

    store.set('recent searches', result);

    setRecentSearches(result);
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };

  const onClickPrevBtn = () => {
    if (customSlider.current) return customSlider.current.slickPrev();
  };

  const onClickNextBtn = () => {
    if (customSlider.current) return customSlider.current.slickNext();
  };

  return (
    <div css={S.container}>
      <aside css={S.contentContainer}>
        <Container title='최근 검색한 소환사'>
          <div css={S.slideContainer}>
            <button onClick={onClickPrevBtn}>
              <ArrowUpIcon css={S.arrows} />
            </button>
            <Slider {...settings} ref={customSlider}>
              {recentSearches.map((search, idx) => {
                console.log('search,idx', search, idx);
                return (
                  <div css={S.eachSlide}>
                    <div css={S.txtContainer}>
                      <span>{search.searchedName}</span>
                      <span css={S.region}>{search.region}</span>
                    </div>
                    <img src={search.profileImg} />
                  </div>
                );
              })}
            </Slider>
            <button onClick={onClickNextBtn}>
              <ArrowDownIcon css={S.arrows} />
            </button>
          </div>
        </Container>
      </aside>
    </div>
  );
};

export default Qnb;
