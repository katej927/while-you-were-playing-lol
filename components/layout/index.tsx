import Head from 'next/head';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { commonActions } from 'store/common';
import Header from './header';
import { OG_IMAGE_URL } from './_shared';

import * as S from './layout.styles';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const { t } = useTranslation('');
  const {
    query: { name },
  } = useRouter();
  const dispatch = useDispatch();

  const onScroll = () => dispatch(commonActions.setScrollPosition(window.scrollY));

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const titleSet = name ? `${t('common:abbreviationTitleOfApp')} | ${name}` : `${t('common:abbreviationTitleOfApp')}`;
  const ogTitleSet = name ? `${t('common:titleOfApp')} | ${name}` : `${t('common:titleOfApp')}`;

  return (
    <>
      <Head>
        <title>{titleSet}</title>
        <meta property='og:type' content='website' />
        <meta property='og:title' content={ogTitleSet} />
        <meta property='og:site_name' content={`${t('common:titleOfApp')}`} />
        <meta property='og:description' content={'최근 게임 내역을 검색하여 어떤 기회비용이 있었는지 알려주는 웹앱'} />
        <meta property='og:image' content={OG_IMAGE_URL} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:alt' content={`${t('common:titleOfApp')} image`} />
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
