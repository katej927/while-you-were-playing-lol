import { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from 'store';
import { authActions } from 'store';

import { useModal } from 'hooks';
import { SignUpModal, LoginModal } from 'components';

import * as S from './headerAuth.styles';

const BUTTONS_BEFORE_LOGIN = ['로그인', '회원가입'];

const HeaderAuth = () => {
  const authMode = useSelector((state) => state.auth.authMode);
  const { openModal, closeModal, ModalPortal } = useModal();
  const dispatch = useDispatch();

  const onClickAuthBtn = ({
    currentTarget: {
      dataset: { id },
    },
  }: SyntheticEvent<HTMLButtonElement>) => {
    dispatch(authActions.setAuthMode(id === '회원가입' ? 'signup' : 'login'));
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
