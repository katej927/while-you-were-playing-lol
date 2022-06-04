import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import { cx } from '@emotion/css';

import { MainIcon } from '../../public/static/svg';
import * as S from './header.styles';

const Header = () => {
  const router = useRouter();
  const { pathname, asPath, query, locales, locale: curlocale } = router;

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
      <MainIcon onClick={handleClickIcon} className={S.mainIcon} />
      <div>
        {locales?.map((locale) => (
          <button
            key={locale}
            className={cx(S.localeBtn, { [S.selected]: locale === curlocale })}
            onClick={handleLanguageClick}
            data-type={locale}
          >
            {locale.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Header;
