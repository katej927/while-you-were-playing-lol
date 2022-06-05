import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';

import { MainIcon } from '../../public/static/svg';
import * as S from './header.styles';

const Header = () => {
  const router = useRouter();
  const { pathname, asPath, query, locales, locale: curlocale } = router;

  const handleClickIcon = () => {
    router.push('/');
  };

  const handleLanguageClick = (e: SyntheticEvent<EventTarget>) => {
    if (!(e.currentTarget instanceof HTMLButtonElement)) {
      return;
    }
    const { type } = e.currentTarget.dataset;
    router.push({ pathname, query }, asPath, { locale: type });
  };

  return (
    <nav css={S.wrapper}>
      <div css={S.contentWrapper}>
        <MainIcon onClick={handleClickIcon} css={S.mainIcon} />
        <div>
          {locales?.map((locale) => (
            <S.LocalBtn key={locale} isSelected={locale === curlocale} onClick={handleLanguageClick} data-type={locale}>
              {locale.toUpperCase()}
            </S.LocalBtn>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
