import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';

import { useSelector } from 'store';
import { useModal } from 'hooks';

import { SearchIcon, MainIcon, ArrowDownIcon } from 'public/static/svg';
import * as S from './home.styles';

const DynamicRegionModal = dynamic(() => import('./regionModal'), { ssr: false });

const Home = () => {
  const [name, setName] = useState<string>('');

  const region = useSelector((state) => state.common.region.abbreviation);
  const router = useRouter();
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
      router.push({ pathname: `/summoners/${name}`, query: { region } });
    } catch (e) {
      console.log(e);
    }
  };

  const onClickRegionBtn = () => {
    openModal();
  };

  return (
    <main css={S.homeWrapper}>
      <div css={S.header}>
        <h1>{t('title1')}</h1>
        <MainIcon css={S.mainIcon} />
        <h1>{t('title2')}</h1>
      </div>
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
