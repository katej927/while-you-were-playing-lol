import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        {/* <link rel='shortcut icon' href='/favicon.ico' /> */}
        <meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests'></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
