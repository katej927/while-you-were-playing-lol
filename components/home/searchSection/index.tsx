import { useState, FormEvent } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { useSelector } from 'store';
import { useModal } from 'hooks';

import { SearchIcon, ArrowDownIcon } from 'public/static/svg';
import * as S from './searchSection.styles';

const DynamicRegionModal = dynamic(() => import('../regionModal'), { ssr: false });

const SearchSection = () => {
  const [name, setName] = useState<string>('');

  const {
    region: { abbreviation: region },
    scrollPosition,
  } = useSelector((state) => state.common);
  const { push } = useRouter();
  let { t } = useTranslation('home');
  const { openModal, closeModal, ModalPortal } = useModal();

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
  return (
    <section>
      <div css={S.divisionText}>
        <small>EXPLORE THE WPL WAY</small>
      </div>
      <div css={S.divisionLine} />
      <div css={S.divisionCircle}>
        <ArrowDownIcon />
      </div>
      <h3 css={S.searchTitle}>탐험하기</h3>
      <h2 css={S.searchDescHighlight}>
        <span>소환사명을</span>
        <strong>검색하세요</strong>
      </h2>
      <p css={S.desc}>
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
    </section>
  );
};

export default SearchSection;
