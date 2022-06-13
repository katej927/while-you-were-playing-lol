import { signIn } from 'next-auth/react';
import { FC, FormEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'store/user';

import { useValidateMode } from 'hooks';
import { loginAPI } from 'lib/api';
import { convertInputList } from './_shared';
import CommonAuthModal from '../commonAuthModal';

import { EmailIcon, ClosedEyeIcon, OpenedEyeIcon } from 'public/static/svg';
import * as S from './loginModal.styles';

interface IProps {
  closeModal: () => void;
}

const LoginModal: FC<IProps> = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const { setValidateMode } = useValidateMode();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      setValidateMode(false);
    };
  }, []);

  const toggleHidePassword = () => setHidePassword(!hidePassword);

  const inputList = convertInputList(email, password, hidePassword, {
    emailIcon: <EmailIcon css={S.inputIcon} />,
    eyeIcon: hidePassword ? (
      <ClosedEyeIcon css={S.eyeIcons} onClick={toggleHidePassword} />
    ) : (
      <OpenedEyeIcon css={S.eyeIcons} onClick={toggleHidePassword} />
    ),
  });

  const onChangeInputs = ({
    currentTarget: {
      dataset: { id },
      value,
    },
  }: SyntheticEvent<HTMLInputElement>) => {
    if (id === 'email') return setEmail(value);
    if (id === 'password') return setPassword(value);
  };

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidateMode(true);

    if (!email || !password) return;

    try {
      // const { data } = await loginAPI({ email, password });
      // dispatch(userActions.setLoggedUser(data));
      await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      closeModal();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CommonAuthModal
      onSubmitForm={onSubmitForm}
      closeModal={closeModal}
      inputList={inputList}
      onChangeInputs={onChangeInputs}
      submitBtnText='로그인'
      switchModalText='회원가입'
      textToCheckSwitchModal='아직 계정이 없으신가요?'
    />
  );
};

export default LoginModal;
