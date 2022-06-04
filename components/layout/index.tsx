import { NextSeo } from 'next-seo';
import * as S from './layout.styles';
import { useRouter } from 'next/router';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const router = useRouter();
  const {
    query: { name },
    locales,
    defaultLocale,
  } = router;

  console.log('lan', locales, defaultLocale);

  const titleSet = name ? `당롤동 | ${name}` : `당롤동`;
  return (
    <>
      <NextSeo title={titleSet} />
      <div className={S.wrapper}>{children}</div>
    </>
  );
};

export default Layout;
