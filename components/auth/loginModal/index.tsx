import { FC, FormEvent, SyntheticEvent, useState } from 'react';

import { convertInputList } from './_shared';
import { AuthModal } from '../_shared';

import { EmailIcon, ClosedEyeIcon, OpenedEyeIcon } from 'public/static/svg';
import * as S from './loginModal.styles';

interface IProps {
  closeModal: () => void;
}

const LoginModal: FC<IProps> = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

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

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {};

  return (
    <AuthModal
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
