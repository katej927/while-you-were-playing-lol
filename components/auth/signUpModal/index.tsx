import dynamic from 'next/dynamic';
import { FC, useState, SyntheticEvent, FormEvent, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useValidateMode } from 'hooks';
import { createUser } from 'lib/api';
import { authActions } from 'store/auth';

import { DAYS, MONTHS, YEARS, convertBDaySelectors, checkPasswordValidation, convertInputList } from './_shared';
import { IInputList } from '../_shared';

import { Selector } from 'components/common';
import CommonAuthModal from '../commonAuthModal';
import { EmailIcon, PersonIcon, OpenedEyeIcon, ClosedEyeIcon } from 'public/static/svg';

import * as S from './signUpModal.styles';

const DynamicPasswordWarning = dynamic(() => import('./passwordWarning'));

interface IProps {
  closeModal: () => void;
}

const SignUpModal: FC<IProps> = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [isFocusPassword, setIsFocusPassword] = useState(false);

  const [birthYear, setBirthYear] = useState<string | undefined>();
  const [birthDay, setBirthDay] = useState<string | undefined>();
  const [birthMonth, setBirthMonth] = useState<string | undefined>();

  const { setValidateMode } = useValidateMode();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      setValidateMode(false);
    };
  }, []);

  const { isPasswordValid, passwordWarnings } = useMemo(
    () => checkPasswordValidation(password, name, email),
    [password, name, email]
  );

  const onChangeInputs = ({
    currentTarget: {
      dataset: { id },
      value,
    },
  }: SyntheticEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (id === 'email') return setEmail(value);
    if (id === 'name') return setName(value);
    if (id === 'password') return setPassword(value);
    if (id === 'bDay-month') return setBirthMonth(value);
    if (id === 'bDay-day') return setBirthDay(value);
    if (id === 'bDay-year') return setBirthYear(value);
  };

  const onSubmitSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidateMode(true);

    const isInputValid = email && name && password;
    const isSelectorValid = birthYear && birthDay && birthMonth;

    if (!(isInputValid && isSelectorValid && isPasswordValid)) return;

    try {
      const sigupBody = {
        email,
        name,
        password,
        birthday: new Date(`${birthYear}-${birthMonth!.replace('월', '')}-${birthDay}`).toISOString(),
      };
      await createUser(sigupBody);
      dispatch(authActions.setAuthMode('login'));
    } catch (e) {
      console.log(e);
    }
  };

  const onFocusPassword = () => setIsFocusPassword(true);

  const toggleHidePassword = () => setHidePassword(!hidePassword);

  const inputList: IInputList[] = convertInputList(
    email,
    name,
    hidePassword,
    password,
    isPasswordValid,
    onFocusPassword,
    {
      emailIcon: <EmailIcon css={S.inputIcon} />,
      personIcon: <PersonIcon css={S.inputIcon} />,
      passwordIcon: hidePassword ? (
        <ClosedEyeIcon onClick={toggleHidePassword} css={S.eyeIcons} />
      ) : (
        <OpenedEyeIcon onClick={toggleHidePassword} css={S.eyeIcons} />
      ),
    }
  );

  const bDaySelectors = convertBDaySelectors({
    options: [MONTHS, DAYS, YEARS],
    value: [birthMonth, birthDay, birthYear],
  });

  return (
    <CommonAuthModal
      textToCheckSwitchModal='이미 계정이 있나요?'
      switchModalText='로그인'
      submitBtnText='가입하기'
      onChangeInputs={onChangeInputs}
      onSubmitForm={onSubmitSignup}
      closeModal={closeModal}
      inputList={inputList}
    >
      {isFocusPassword &&
        passwordWarnings.map((warning) => {
          return <DynamicPasswordWarning key={warning.text} isValid={warning.isValid} text={warning.text} />;
        })}
      <p css={S.title}>생일</p>
      <p css={S.titleInfo}>생일은 다른 이용자에게 공개되지 않습니다.</p>
      <div css={S.bDaySelectorWrapper}>
        {bDaySelectors.map((selector) => {
          const { options, defaultValue, dataset, value } = selector;
          return (
            <div css={S.bDaySelector} key={dataset}>
              <Selector
                options={options}
                disabledOptions={[defaultValue]}
                defaultValue={defaultValue}
                onChange={onChangeInputs}
                dataset={dataset}
                value={value}
                isValid={!!value}
              />
            </div>
          );
        })}
      </div>
    </CommonAuthModal>
  );
};

export default SignUpModal;
