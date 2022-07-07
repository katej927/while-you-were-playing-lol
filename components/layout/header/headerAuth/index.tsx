import { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import useTranslation from 'next-translate/useTranslation';

import { useSelector, authActions } from 'store';

import { useModal } from 'hooks';
import { SignUpModal, LoginModal } from 'components';

import * as S from './headerAuth.styles';

const HeaderAuth = () => {
  const authMode = useSelector((state) => state.auth.authMode);
  const { t } = useTranslation('common');
  const { openModal, closeModal, ModalPortal } = useModal();
  const dispatch = useDispatch();

  const BUTTONS_BEFORE_LOGIN = [
    t('header.login', { returnObjects: true }),
    t('header.signUp', { returnObjects: true }),
  ];

  const onClickAuthBtn = ({
    currentTarget: {
      dataset: { id },
    },
  }: SyntheticEvent<HTMLButtonElement>) => {
    dispatch(authActions.setAuthMode(id === '회원가입' || id === 'Sign Up' ? 'signup' : 'login'));
    openModal();
  };

  return (
    <div>
      {BUTTONS_BEFORE_LOGIN.map((btnName) => (
        <S.AuthBtns key={btnName} btnName={btnName} type='button' onClick={onClickAuthBtn} data-id={btnName}>
          {btnName}
        </S.AuthBtns>
      ))}
      <ModalPortal>
        {authMode === 'signup' ? <SignUpModal closeModal={closeModal} /> : <LoginModal closeModal={closeModal} />}
      </ModalPortal>
    </div>
  );
};
export default HeaderAuth;
