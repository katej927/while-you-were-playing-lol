import { FC, useState, SyntheticEvent, FormEvent, useMemo } from 'react';
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
} from './_shared';
import { useValidateMode } from 'hooks';

import { Input, Selector, Button } from 'components/common';
import { CloseIcon, EmailIcon, PersonIcon, OpenedEyeIcon, ClosedEyeIcon } from 'public/static/svg';

import * as S from './signUpModal.styles';
import PasswordWarning from '../passwordWarning';

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
    } catch (e) {
      console.log(e);
    }
  };

  const onFocusPassword = () => setIsFocusPassword(true);

  const inputList = convertInputList(email, lastname, firstname, hidePassword, password, {
    emailIcon: <EmailIcon css={S.inputIcon} />,
    personIcon: <PersonIcon css={S.inputIcon} />,
    passwordIcon: hidePassword ? (
      <ClosedEyeIcon onClick={toggleHidePassword} css={S.eyeIcons} />
    ) : (
      <OpenedEyeIcon onClick={toggleHidePassword} css={S.eyeIcons} />
    ),
  });

  const bDaySelectors = convertBDaySelectors({
    options: [MONTHS, DAYS, YEARS],
    value: [birthMonth, birthDay, birthYear],
  });

  return (
    <form css={S.wrapper} onSubmit={onSubmitSignup}>
      <CloseIcon css={S.closeIcon} onClick={closeModal} />
      {inputList.map((input) => {
        const { placeholder, type, icon, name, value, dataset, errorMsg } = input;
        return (
          <div css={S.inputWrapper} key={dataset}>
            <Input
              placeholder={placeholder}
              type={type}
              icon={icon}
              name={name}
              value={value}
              dataset={dataset}
              onChange={onChangeInputs}
              useValidation
              isvalid={dataset === 'password' ? isPasswordValid : !!value}
              errorMsg={errorMsg}
              onFocus={dataset === 'password' ? onFocusPassword : undefined}
            />
          </div>
        );
      })}
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
      <Button type='submit'>가입하기</Button>
    </form>
  );
};

export default SignUpModal;
