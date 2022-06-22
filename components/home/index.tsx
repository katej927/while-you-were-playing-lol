import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';

import { useModal } from 'hooks';

import { SearchIcon, MainIcon } from '../../public/static/svg';
import * as S from './home.styles';

const DynamicRegionModal = dynamic(() => import('./regionModal'));

const Home = () => {
  const [name, setName] = useState<string>('');
  const [region, setRegion] = useState<string>('KR');

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

  console.log('region', region);

  return (
    <main css={S.homeWrapper}>
      <div css={S.header}>
        <h1>{t('title1')}</h1>
        <MainIcon css={S.mainIcon} />
        <h1>{t('title2')}</h1>
      </div>
      <form css={S.homeForm} onSubmit={onSubmit}>
        <button type='button' css={S.region} onClick={onClickRegionBtn}>
          {region}
        </button>
        <div css={S.searchWrapper}>
          <input css={S.searchInput} placeholder={t('placeholder')} value={name} onChange={onChange} />
          <button type='submit'>
            <SearchIcon css={S.searchIcon} />
          </button>
        </div>
      </form>
      <ModalPortal>
        <DynamicRegionModal closeModal={closeModal} setRegion={setRegion} />
      </ModalPortal>
    </main>
  );
};

export default Home;
