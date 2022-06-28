import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';

import { useSelector } from 'store';
import { useModal } from 'hooks';

import { SearchIcon, ArrowDownIcon } from 'public/static/svg';
import * as S from './home.styles';

const DynamicRegionModal = dynamic(() => import('./regionModal'), { ssr: false });

const Home = () => {
  const [name, setName] = useState<string>('');
  const [position, setPosition] = useState(0);

  const region = useSelector((state) => state.common.region.abbreviation);
  const { push, locale } = useRouter();
  let { t } = useTranslation('home');
  const { openModal, closeModal, ModalPortal } = useModal();

  const onScroll = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    const { value } = currentTarget;
    setName(value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!name) return;
      push({ pathname: `/summoners/${name}`, query: { region } });
    } catch (e) {
      console.log(e);
    }
  };

  const onClickRegionBtn = () => openModal();

  console.log('position', position);

  return (
    <main css={S.homeWrapper}>
      <h1 css={S.header}>
        <span>{t('title1')}</span>
        <span>{t('title2')}</span>
        <span>{t('title3')}</span>
        {locale === 'en' && <span>LoL</span>}
      </h1>
      <div css={S.divisionText}>EXPLORE THE WPL WAY</div>
      <h2 css={S.searchDescHighlight}>
        <span>소환사명을</span>
        <strong>검색하세요</strong>
      </h2>
      <p>
        최근 15회의 게임의 총 시간을 계산하고, 어떤 다른 기회 비용들이 있었을지 알려줍니다. <br />
        날짜별 게임 시간, 각 게임 정보 그리고 당신이 했을 이성과의 데이트 횟수까지.
      </p>
      <form css={S.homeForm} onSubmit={onSubmit}>
        <button type='button' css={S.regionBtnContainer} onClick={onClickRegionBtn}>
          <small>Region</small>
          <span>{region}</span>
          <ArrowDownIcon css={S.arrowDownIcon} />
        </button>
        <div css={S.searchWrapper}>
          <label css={S.searchLabel} htmlFor='searchSummoner'>
            Search
          </label>
          <input
            id='searchSummoner'
            css={S.searchInput}
            placeholder={t('placeholder')}
            value={name}
            onChange={onChange}
          />
          <button type='submit'>
            <SearchIcon css={S.searchIcon} />
          </button>
        </div>
      </form>
      <ModalPortal>
        <DynamicRegionModal closeModal={closeModal} />
      </ModalPortal>
    </main>
  );
};

export default Home;
