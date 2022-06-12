import { GetServerSideProps } from 'next';
import App, { AppContext, AppProps } from 'next/app';
import { wrapper } from '../store';

import axios, { meAPI } from 'lib/api';

import { cookieStringToObject } from 'lib/utils';
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

app.getInitialProps = wrapper.getInitialAppProps((store) => async (context: AppContext) => {
  const appInitialProps = await App.getInitialProps(context);
  const cookieObject = cookieStringToObject(context.ctx.req?.headers.cookie);
  const { isLogged } = store.getState().user;
  console.log('cookieObject.access_token', cookieObject.access_token);
  try {
    if (!isLogged && cookieObject.access_token) {
      axios.defaults.headers.common.cookie = cookieObject.access_token;
      const { data } = await meAPI();
      console.log('data', data);
    }
  } catch (e) {
    console.log(e);
  }
  return { ...appInitialProps };
});

export default wrapper.withRedux(app);
