import { NextSeo } from 'next-seo';
import * as S from './layout.styles';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

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
      <div css={S.wrapper}>{children}</div>
    </>
  );
};

export default Layout;
