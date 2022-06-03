import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import * as S from './home.styles';

const Home = () => {
  const [name, setName] = useState('');
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

  return (
    <main>
      <h1>당신이 롤을 하는 동안에</h1>
      <form className={S.homeForm} onSubmit={handleSubmit}>
        <input placeholder='소환사명 검색' value={name} onChange={handleChange} />
        <button type='submit'>검색</button>
      </form>
    </main>
  );
};
export default Home;
