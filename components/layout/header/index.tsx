import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { SyntheticEvent, useState } from 'react';

import { useSelector } from 'store';
import { convertLanguages } from './_shared';

import { EarthIcon } from 'public/static/svg';
import * as S from './header.styles';

const DynamicHeaderAuth = dynamic(() => import('./headerAuth'));
const DynamicHeaderUserProfile = dynamic(() => import('./headerUserProfile'));

const Header = () => {
  const [isLocaleDropDownOpen, setIsLocaleDropDownOpen] = useState(false);

  const scrollPosition = useSelector((state) => state.common.scrollPosition);
  const { status } = useSession();
  const { pathname, asPath, query, locales, locale: curlocale, push } = useRouter();

  const translatedLanguages = convertLanguages(locales);

  const onClickLocaleBtn = () => setIsLocaleDropDownOpen(!isLocaleDropDownOpen);

  const onLanguageClick = ({
    currentTarget: {
      dataset: { type },
    },
  }: SyntheticEvent<HTMLButtonElement>) => {
    push({ pathname, query }, asPath, { locale: type });
    setIsLocaleDropDownOpen(false);
  };

  return (
    <S.Container isMinHeight={scrollPosition > 60}>
      <div css={S.contentWrapper}>
        <Link href={'/'} passHref>
          <a css={S.logoBtn}>WPL</a>
        </Link>
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
    </S.Container>
  );
};

export default Header;
