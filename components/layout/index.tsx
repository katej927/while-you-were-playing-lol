import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import Header from './header';

import * as S from './layout.styles';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const { t } = useTranslation('');
  const {
    query: { name },
  } = useRouter();

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
