import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { wrapper } from 'store';
import { Layout, Loading } from 'components';

import { Global } from '@emotion/react';
import GlobalStyle from 'styles/base';

const app = ({ Component, pageProps }: AppProps) => {
  const [isPageLoading, setIsPageLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setIsPageLoading(true);

    const handleComplete = () => setIsPageLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <SessionProvider>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
				`}
      </Script>
      <Global styles={GlobalStyle} />
      <Layout>
        {isPageLoading ? <Loading /> : <Component {...pageProps} />}
        <div id='root-modal' />
      </Layout>
    </SessionProvider>
  );
};

export default wrapper.withRedux(app);
