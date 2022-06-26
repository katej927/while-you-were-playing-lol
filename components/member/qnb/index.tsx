import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import store from 'storejs';
import { uniqBy } from 'lodash';
import { format } from 'date-fns';
import Slider from 'react-slick';

import Container from '../container';
import { filterExpired, IRecentSearches } from './_shared';

import * as S from './qnb.styles';

interface IProps {
  profileImg: string;
}

const Qnb = ({ profileImg }: IProps) => {
  const [recentSearches, setRecentSearches] = useState<IRecentSearches[]>([]);

  const {
    query: { name: searchedName, region },
  } = useRouter();

  useEffect(() => {
    const newSearchedList = [
      { searchedName, region, profileImg, expiredAt: format(new Date(), 'yyyy-MM-dd') },
      ...(store.get('recent searches') ?? ''),
    ];

    const result = uniqBy(filterExpired(newSearchedList), 'searchedName');

    store.set('recent searches', result);

    setRecentSearches(result);
  }, []);

  console.log('recentSearches', recentSearches);

  const settings = {
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1.5,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <aside css={S.container}>
      <div css={S.contentContainer}>
        <Container title='최근 검색한 소환사'>
          <div css={S.slideContainer}>
            <Slider {...settings}>
              {recentSearches.map((search) => {
                console.log('search', search);
                return (
                  <div css={S.eachSlide}>
                    <span>{search.searchedName}</span>
                    <img src={search.profileImg} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </Container>
      </div>
    </aside>
  );
};

export default Qnb;
