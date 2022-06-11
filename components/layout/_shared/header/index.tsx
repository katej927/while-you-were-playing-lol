import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import { useSelector } from 'store';
import { useDispatch } from 'react-redux';
import { authActions } from 'store/auth';

import { useModal } from 'hooks';
import { SignUpModal, LoginModal } from 'components';

import { BUTTONS_BEFORE_LOGIN } from './_shared';

import { MainIcon, MenuIcon } from '../../../../public/static/svg';
import * as S from './header.styles';

const Header = () => {
  const {
    user: { isLogged, profileImage },
    auth: { authMode },
  } = useSelector((state) => state);
  const { openModal, closeModal, ModalPortal } = useModal();
  const dispatch = useDispatch();
  const router = useRouter();
  const { pathname, asPath, query, locales, locale: curlocale } = router;

  const onClickIcon = () => {
    router.push('/');
  };

  const onLanguageClick = ({
    currentTarget: {
      dataset: { type },
    },
  }: SyntheticEvent<HTMLButtonElement>) => {
    router.push({ pathname, query }, asPath, { locale: type });
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
              <button type='button' css={S.userProfile}>
                <MenuIcon />
                <img src={profileImage} alt='profileImage' />
              </button>
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
