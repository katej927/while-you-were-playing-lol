import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { SearchIcon, MainIcon } from '../../public/static/svg';
import * as S from './home.styles';

const Home = () => {
  const [name, setName] = useState<string>('');
  const router = useRouter();
  let { t } = useTranslation('home');

  const handleChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    const { value } = currentTarget;
    setName(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!name) return;
      router.push(`/summoners/${name}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main className={S.homeWrapper}>
      <header className={S.header}>
        <h1>{t('title1')}</h1>
        <MainIcon className={S.mainIcon} />
        <h1>{t('title2')}</h1>
      </header>
      <form className={S.homeForm} onSubmit={handleSubmit}>
        <div className={S.region}>{t('region')}</div>
        <div className={S.searchWrapper}>
          <input className={S.searchInput} placeholder={t('placeholder')} value={name} onChange={handleChange} />
          <button type='submit'>
            <SearchIcon className={S.searchIcon} />
          </button>
        </div>
      </form>
    </main>
  );
};
export default Home;
