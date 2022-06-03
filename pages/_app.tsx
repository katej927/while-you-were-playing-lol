import { AppProps } from 'next/app';
import { wrapper } from '../store';

import { Layout, Header } from '../components';

import { Global } from '@emotion/react';
import GlobalStyle from '../styles/base';

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default wrapper.withRedux(app);
