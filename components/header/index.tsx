import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';

import { MainIcon } from '../../public/static/svg';
import * as S from './header.styles';

const Header = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale, locales, defaultLocale } = router;

  const now_locale = locale || defaultLocale;

  const handleClickIcon = () => {
    router.push('/');
  };
  console.log('locales', locales);
  const handleLanguageClick = (e: SyntheticEvent<EventTarget>) => {
    if (!(e.currentTarget instanceof HTMLButtonElement)) {
      return;
    }
    const { type } = e.currentTarget.dataset;
    console.log('handleLanguageClick', `{ ${pathname}, ${query} }, ${asPath}, { locale: ${type} }`);
    router.push({ pathname, query }, asPath, { locale: type });
  };

  return (
    <nav className={S.wrapper}>
      <div>
        <MainIcon onClick={handleClickIcon} className={S.mainIcon} />
        {locales?.map((locale) => (
          <button key={locale} onClick={handleLanguageClick} data-type={locale}>
            {locale.toUpperCase()}
          </button>
        ))}
        {/* <button onClick={handleLanguageClick} data-type='en'>
          EN
        </button>
        <button onClick={handleLanguageClick} data-type='ko'>
          KR
        </button> */}
      </div>
    </nav>
  );
};

export default Header;
