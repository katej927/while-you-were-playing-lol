import { useRouter } from 'next/router';
import { useEffect, useState, useRef, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import store from 'storejs';
import { uniqBy } from 'lodash';
import { getTime, endOfDay } from 'date-fns';
import Slider from 'react-slick';

import Container from '../container';
import { filterExpired, IRecentSearches, SETTINGS, findRegionLocation } from './_shared';

import { ArrowUpIcon, ArrowDownIcon } from 'public/static/svg';
import * as S from './qnb.styles';
import { commonActions } from 'store/common';

interface IProps {
  profileImg: string;
}

const Qnb = ({ profileImg }: IProps) => {
  const [recentSearches, setRecentSearches] = useState<IRecentSearches[]>([]);
  const customSlider = useRef<Slider>(null);
  const {
    query: { name: searchedName, region },
    push,
  } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const newSearchedList = [
      { searchedName, region, profileImg, expiredAt: getTime(endOfDay(new Date())) },
      ...(store.get('recent searches') ?? ''),
    ];
    const result = uniqBy(filterExpired(newSearchedList), 'searchedName');
    store.set('recent searches', result);
    setRecentSearches(result);
  }, []);

  const onClickPrevBtn = () => {
    if (customSlider.current) return customSlider.current.slickPrev();
  };

  const onClickNextBtn = () => {
    if (customSlider.current) return customSlider.current.slickNext();
  };

  const onClickSlide = ({
    currentTarget: {
      dataset: { name, region },
    },
  }: SyntheticEvent<HTMLLIElement>) => {
    const { abbreviation, lat, lng } = findRegionLocation(region!)[0];
    dispatch(commonActions.setRegion({ abbreviation, lat, lng }));
    push({ pathname: `/summoners/${name}`, query: { region } });
  };

  return (
    <div css={S.container}>
      <aside css={S.contentContainer}>
        <Container title='최근 검색한 소환사'>
          <ul css={S.slideContainer}>
            <button css={S.arrowBtn} onClick={onClickPrevBtn}>
              <ArrowUpIcon css={S.arrows} />
            </button>
            <Slider {...SETTINGS} ref={customSlider}>
              {recentSearches.map((search) => {
                const { searchedName, region, profileImg } = search;
                return (
                  <li
                    key={searchedName}
                    css={S.eachSlide}
                    onClick={onClickSlide}
                    data-name={searchedName}
                    data-region={region}
                  >
                    <div css={S.txtContainer}>
                      <span>{searchedName}</span>
                      <span css={S.region}>{region}</span>
                    </div>
                    <img src={profileImg} />
                  </li>
                );
              })}
            </Slider>
            <button css={S.arrowBtn} onClick={onClickNextBtn}>
              <ArrowDownIcon css={S.arrows} />
            </button>
          </ul>
        </Container>
      </aside>
    </div>
  );
};

export default Qnb;
