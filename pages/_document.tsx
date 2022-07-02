import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html>
      <Head>
        <meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests'></meta>
        <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MY_GOOGLE_MAP_API}`} />
        <script src='https://developers.kakao.com/sdk/js/kakao.js'></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
