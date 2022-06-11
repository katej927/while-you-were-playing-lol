import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { Header } from './_shared';

import * as S from './layout.styles';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const { t } = useTranslation('');
  const router = useRouter();
  const {
    query: { name },
  } = router;

  const titleSet = name ? `${t('common:titleOfApp')} | ${name}` : `${t('common:titleOfApp')}`;

  return (
    <>
      <NextSeo title={titleSet} />
      <div css={S.wrapper}>
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
