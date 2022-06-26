import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import Header from './header';

import { ogImg } from 'public/static/image';
import * as S from './layout.styles';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const { t } = useTranslation('');
  const {
    query: { name },
  } = useRouter();

  const titleSet = name ? `${t('common:abbreviationTitleOfApp')} | ${name}` : `${t('common:abbreviationTitleOfApp')}`;
  const ogTitleSet = name ? `${t('common:titleOfApp')} | ${name}` : `${t('common:titleOfApp')}`;

  return (
    <>
      {/* <NextSeo title={titleSet} /> */}
      <Head>
        <title>{titleSet}</title>
        <meta property='og:type' content='website' />
        <meta property='og:title' content={ogTitleSet} />
        <meta property='og:site_name' content={`${t('common:titleOfApp')}`} />
        <meta property='og:description' content={'최근 게임 내역을 검색하여 어떤 기회비용이 있었는지 알려주는 웹앱'} />
        <meta property='og:image' content='/static/image' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:url' content='https://while-you-were-playing-lol.vercel.app' />
      </Head>
      <div css={S.wrapper}>
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
