import dynamic from 'next/dynamic';

import * as S from './home.styles';

const DynamicSearchFirstSection = dynamic(() => import('./firstSection'));
const DynamicSearchSection = dynamic(() => import('./searchSection'));

const Home = () => {
  return (
    <main css={S.homeWrapper}>
      <DynamicSearchFirstSection />
      <DynamicSearchSection />
    </main>
  );
};

export default Home;
