import { FC, useState, SyntheticEvent, FormEvent, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'store/user';

import { signupAPI } from 'lib/api/auth';
import {
  DAYS,
  MONTHS,
  YEARS,
  convertBDaySelectors,
  checkPasswordValidation,
  convertPasswordWarningTxt,
  convertInputList,
  PasswordWarning,
} from './_shared';
import { IInputList } from '../_shared';
import { useValidateMode } from 'hooks';

import { Selector } from 'components/common';
import { AuthModal } from '../_shared';
import { EmailIcon, PersonIcon, OpenedEyeIcon, ClosedEyeIcon } from 'public/static/svg';

import * as S from './signUpModal.styles';

interface IProps {
  closeModal: () => void;
}

const SignUpModal: FC<IProps> = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [isFocusPassword, setIsFocusPassword] = useState(false);

  const [birthYear, setBirthYear] = useState<string | undefined>();
  const [birthDay, setBirthDay] = useState<string | undefined>();
  const [birthMonth, setBirthMonth] = useState<string | undefined>();

  const dispatch = useDispatch();
  const { setValidateMode } = useValidateMode();

  useEffect(() => {
    return () => {
      setValidateMode(false);
    };
  }, []);

  const { isPasswordValid, validationDetails } = useMemo(
    () => checkPasswordValidation(password, lastname, email),
    [password, lastname, email]
  );

  const passwordWarnings = convertPasswordWarningTxt(validationDetails);

  const toggleHidePassword = () => setHidePassword(!hidePassword);

  const onChangeInputs = ({
    currentTarget: {
      dataset: { id },
      value,
    },
  }: SyntheticEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (id === 'email') return setEmail(value);
    if (id === 'lastname') return setLastname(value);
    if (id === 'firstname') return setFirstname(value);
    if (id === 'password') return setPassword(value);
    if (id === 'bDay-month') return setBirthMonth(value);
    if (id === 'bDay-day') return setBirthDay(value);
    if (id === 'bDay-year') return setBirthYear(value);
  };

  const onSubmitSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidateMode(true);

    const isInputValid = email && lastname && firstname && password;
    const isSelectorValid = birthYear && birthDay && birthMonth;

    if (!(isInputValid && isSelectorValid && isPasswordValid)) return;

    try {
      const sigupBody = {
        email,
        lastname,
        firstname,
        password,
        birthday: new Date(`${birthYear}-${birthMonth!.replace('월', '')}-${birthDay}`).toISOString(),
      };
      const { data } = await signupAPI(sigupBody);
      dispatch(userActions.setLoggedUser(data));
      closeModal();
    } catch (e) {
      console.log(e);
    }
  };

  const onFocusPassword = () => setIsFocusPassword(true);

  const inputList: IInputList[] = convertInputList(
    email,
    lastname,
    firstname,
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
    <AuthModal
      textToCheckSwitchModal='이미 계정이 있나요?'
      switchModalText='로그인'
      submitBtnText='가입하기'
      onChangeInputs={onChangeInputs}
      onSubmitForm={onSubmitSignup}
      closeModal={closeModal}
      inputList={inputList}
    >
      {isFocusPassword &&
        passwordWarnings.map((warning) => <PasswordWarning isValid={warning.isValid} text={warning.text} />)}
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
    </AuthModal>
  );
};

export default SignUpModal;
