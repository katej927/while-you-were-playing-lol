import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

import { SearchIcon, MainIcon } from '../../public/static/svg';
import * as S from './home.styles';

const Home = () => {
  const [name, setName] = useState<string>('');
  const router = useRouter();

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

  console.log('name', name);

  return (
    <main className={S.homeWrapper}>
      <header className={S.header}>
        <h1>당신이 롤을</h1>
        <MainIcon className={S.mainIcon} />
        <h1>하는 동안에</h1>
      </header>
      <form className={S.homeForm} onSubmit={handleSubmit}>
        <div className={S.region}>KR</div>
        <div className={S.searchWrapper}>
          <input className={S.searchInput} placeholder='소환사명 검색' value={name} onChange={handleChange} />
          <button type='submit'>
            <SearchIcon />
          </button>
        </div>
      </form>
    </main>
  );
};
export default Home;
