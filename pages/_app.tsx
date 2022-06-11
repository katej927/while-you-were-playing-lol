import { AppProps } from 'next/app';
import { wrapper } from '../store';

import { Layout } from '../components';

import { Global } from '@emotion/react';
import GlobalStyle from '../styles/base';

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Layout>
        <Component {...pageProps} />
        <div id='root-modal' />
      </Layout>
    </>
  );
};

export default wrapper.withRedux(app);
