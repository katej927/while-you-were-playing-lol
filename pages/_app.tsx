import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Script from 'next/script';

import { wrapper } from 'store';
import { Layout } from 'components';

import { Global } from '@emotion/react';
import GlobalStyle from 'styles/base';

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
				`}
      </Script>
      <Global styles={GlobalStyle} />
      <Layout>
        <Component {...pageProps} />
        <div id='root-modal' />
      </Layout>
    </SessionProvider>
  );
};

export default wrapper.withRedux(app);
