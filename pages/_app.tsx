import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { wrapper } from '../store';
import { Layout } from '../components';

import { Global } from '@emotion/react';
import GlobalStyle from '../styles/base';

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider>
      <Global styles={GlobalStyle} />
      <Layout>
        <Component {...pageProps} />
        <div id='root-modal' />
      </Layout>
    </SessionProvider>
  );
};

export default wrapper.withRedux(app);
