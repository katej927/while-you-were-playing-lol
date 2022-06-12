import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';

import { useSelector } from 'store';

import { MainIcon } from 'public/static/svg';
import * as S from './header.styles';

const DynamicHeaderAuth = dynamic(() => import('./headerAuth'));
const DynamicHeaderUserProfile = dynamic(() => import('./headerUserProfile'));

const Header = () => {
  const isLogged = useSelector((state) => state.user.isLogged);

  const router = useRouter();
  const { pathname, asPath, query, locales, locale: curlocale } = router;

  const onClickIcon = () => router.push('/');

  const onLanguageClick = ({
    currentTarget: {
      dataset: { type },
    },
  }: SyntheticEvent<HTMLButtonElement>) => router.push({ pathname, query }, asPath, { locale: type });

  return (
    <nav css={S.wrapper}>
      <div css={S.contentWrapper}>
        <MainIcon onClick={onClickIcon} css={S.mainIcon} />
        <div css={S.rightBtnWrapper}>
          <div>
            {locales?.map((locale) => (
              <S.LocalBtn key={locale} isSelected={locale === curlocale} onClick={onLanguageClick} data-type={locale}>
                {locale.toUpperCase()}
              </S.LocalBtn>
            ))}
          </div>
          <div>
            {isLogged && <DynamicHeaderUserProfile />}
            {!isLogged && <DynamicHeaderAuth />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
