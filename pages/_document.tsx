import { Html, Head, Main, NextScript } from 'next/document';
// import Script from 'next/script';

function Document() {
  return (
    <Html>
      <Head>
        <meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests'></meta>
        <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MY_GOOGLE_MAP_API}`}></script>
        {/* <Script
          strategy='lazyOnload'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script strategy='lazyOnload'>
          {`
				      window.dataLayer = window.dataLayer || [];
      				function gtag(){dataLayer.push(arguments);}
      				gtag('js', new Date());
      				gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
      				  page_path: window.location.pathname,
      				});
				`}
        </Script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
