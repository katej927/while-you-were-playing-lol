import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { commonActions } from 'store/common';
import Header from './header';
import Footer from './footer';
import { OG_IMAGE_URL } from './_shared';

import * as S from './layout.styles';

const DynamicFooter = dynamic(() => import('./footer'), { ssr: false });

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
        <meta property='og:description' content={`${t('common:descOfApp')}`} />
        <meta property='og:image' content={OG_IMAGE_URL} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:alt' content={`${t('common:titleOfApp')} image`} />
        <meta property='og:url' content='https://while-you-were-playing-lol.vercel.app' />
      </Head>
      <div css={S.wrapper}>
        <Header />
        {children}
        <DynamicFooter />
      </div>
    </>
  );
};

export default Layout;
