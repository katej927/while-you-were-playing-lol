import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { SyntheticEvent, useState } from 'react';
import { useSession } from 'next-auth/react';

// import { useSelector } from 'store';
import { convertLanguages } from './_shared';

import { MainIcon, EarthIcon } from 'public/static/svg';
import * as S from './header.styles';

const DynamicHeaderAuth = dynamic(() => import('./headerAuth'));
const DynamicHeaderUserProfile = dynamic(() => import('./headerUserProfile'));

const Header = () => {
  const [isLocaleDropDownOpen, setIsLocaleDropDownOpen] = useState(false);
  const { data: session, status } = useSession();
  console.log('session', session, 'status', status);

  const router = useRouter();
  const { pathname, asPath, query, locales, locale: curlocale } = router;

  const translatedLanguages = convertLanguages(locales);

  const onClickIcon = () => router.push('/');

  const onClickLocaleBtn = () => setIsLocaleDropDownOpen(!isLocaleDropDownOpen);

  const onLanguageClick = ({
    currentTarget: {
      dataset: { type },
    },
  }: SyntheticEvent<HTMLButtonElement>) => {
    router.push({ pathname, query }, asPath, { locale: type });
    setIsLocaleDropDownOpen(false);
  };

  return (
    <nav css={S.wrapper}>
      <div css={S.contentWrapper}>
        <MainIcon onClick={onClickIcon} css={S.mainIcon} />
        <div css={S.rightBtnWrapper}>
          <div css={S.switchLanguageContainer}>
            <button css={S.switchLanguageBtn} type='button' onClick={onClickLocaleBtn}>
              <EarthIcon />
            </button>
            {translatedLanguages && isLocaleDropDownOpen && (
              <ul css={S.localesContainer}>
                {translatedLanguages?.map((language) => {
                  const { locale, transLang } = language!;
                  return (
                    <li key={locale}>
                      <S.LocalBtn isSelected={locale === curlocale} onClick={onLanguageClick} data-type={locale}>
                        {transLang}
                      </S.LocalBtn>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div>
            {status === 'authenticated' && <DynamicHeaderUserProfile />}
            {status === 'unauthenticated' && <DynamicHeaderAuth />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
