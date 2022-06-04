import { NextSeo } from 'next-seo';
import * as S from './layout.styles';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const router = useRouter();
  const { t } = useTranslation('');
  const {
    query: { name },
  } = router;

  const titleSet = name ? `${t('common:titleOfApp')} | ${name}` : `${t('common:titleOfApp')}`;
  return (
    <>
      <NextSeo title={titleSet} />
      <div className={S.wrapper}>{children}</div>
    </>
  );
};

export default Layout;
