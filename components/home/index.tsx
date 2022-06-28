import FirstSection from './firstSection';
import SearchSection from './searchSection';

import * as S from './home.styles';

const Home = () => {
  return (
    <main css={S.homeWrapper}>
      <FirstSection />
      <SearchSection />
    </main>
  );
};

export default Home;
