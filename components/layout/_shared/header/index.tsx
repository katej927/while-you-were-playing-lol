import { useRouter } from 'next/router';
import Link from 'next/link';
import { SyntheticEvent, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useClickAway } from 'react-use';

import { useSelector } from 'store';
import { authActions } from 'store/auth';
import { userActions } from 'store/user';
import { logoutAPI } from 'lib/api';
import { useModal } from 'hooks';

import { SignUpModal, LoginModal } from 'components';

import { BUTTONS_BEFORE_LOGIN } from './_shared';

import { MainIcon, MenuIcon } from 'public/static/svg';
import * as S from './header.styles';

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOPen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    if (isUserMenuOpen) setIsUserMenuOPen(false);
  });

  const {
    user: { isLogged, profileImage },
    auth: { authMode },
  } = useSelector((state) => state);
  const { openModal, closeModal, ModalPortal } = useModal();
  const dispatch = useDispatch();

  const router = useRouter();
  const { pathname, asPath, query, locales, locale: curlocale } = router;

  const onClickIcon = () => router.push('/');

  const onLanguageClick = ({
    currentTarget: {
      dataset: { type },
    },
  }: SyntheticEvent<HTMLButtonElement>) => router.push({ pathname, query }, asPath, { locale: type });

  const onClickUserProfileBtn = () => setIsUserMenuOPen(!isUserMenuOpen);

  const onClickLogout = async () => {
    try {
      await logoutAPI();
      dispatch(userActions.initUser());
    } catch (e) {
      console.log(e);
    }
  };

  const onClickAuthBtn = ({
    currentTarget: {
      dataset: { id },
    },
  }: SyntheticEvent<HTMLButtonElement>) => {
    dispatch(authActions.setAuthMode(id === '회원가입' ? 'signup' : 'login'));
    openModal();
  };

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
            {isLogged ? (
              <div ref={ref} css={S.userProfileContainer}>
                <button type='button' css={S.userProfile} onClick={onClickUserProfileBtn}>
                  <MenuIcon />
                  <img src={profileImage} alt='profileImage' />
                </button>
                {isUserMenuOpen && (
                  <ul css={S.userMenuBtnContainer}>
                    <Link href={`/summoners/${'사탕새'}`}>
                      <a role='presentation' onClick={onClickUserProfileBtn}>
                        <li>내 기록 보기</li>
                      </a>
                    </Link>
                    <li role='presentation' onClick={onClickLogout}>
                      로그아웃
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              BUTTONS_BEFORE_LOGIN.map((btnName) => (
                <button key={btnName} css={S.authBtns} type='button' onClick={onClickAuthBtn} data-id={btnName}>
                  {btnName}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
      <ModalPortal>
        {authMode === 'signup' ? <SignUpModal closeModal={closeModal} /> : <LoginModal closeModal={closeModal} />}
      </ModalPortal>
    </nav>
  );
};

export default Header;
