import dynamic from 'next/dynamic';
import { FC, useState, SyntheticEvent, FormEvent, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'store/user';

import { signupAPI } from 'lib/api';
import {
  DAYS,
  MONTHS,
  YEARS,
  convertBDaySelectors,
  checkPasswordValidation,
  convertPasswordWarningTxt,
  convertInputList,
} from './_shared';
import { IInputList } from '../_shared';
import { useValidateMode } from 'hooks';
import { createUser } from 'lib/api';

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
  const [summonerName, setSummonerName] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [isFocusPassword, setIsFocusPassword] = useState(false);

  const [birthYear, setBirthYear] = useState<string | undefined>();
  const [birthDay, setBirthDay] = useState<string | undefined>();
  const [birthMonth, setBirthMonth] = useState<string | undefined>();

  // const dispatch = useDispatch();
  const { setValidateMode } = useValidateMode();

  useEffect(() => {
    return () => {
      setValidateMode(false);
    };
  }, []);

  const { isPasswordValid, validationDetails } = useMemo(
    () => checkPasswordValidation(password, name, email),
    [password, name, email]
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
    if (id === 'name') return setName(value);
    if (id === 'summonerName') return setSummonerName(value);
    if (id === 'password') return setPassword(value);
    if (id === 'bDay-month') return setBirthMonth(value);
    if (id === 'bDay-day') return setBirthDay(value);
    if (id === 'bDay-year') return setBirthYear(value);
  };

  const onSubmitSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidateMode(true);

    const isInputValid = email && name && summonerName && password;
    const isSelectorValid = birthYear && birthDay && birthMonth;

    if (!(isInputValid && isSelectorValid && isPasswordValid)) return;

    try {
      const sigupBody = {
        email,
        name,
        summonerName,
        password,
        birthday: new Date(`${birthYear}-${birthMonth!.replace('월', '')}-${birthDay}`).toISOString(),
      };
      const result = await createUser(sigupBody);
      console.log('result', result);
      // const { data } = await signupAPI(sigupBody);
      // dispatch(userActions.setLoggedUser(data));
      closeModal();
    } catch (e) {
      console.log(e);
    }
  };
  console.log('password', password);

  const onFocusPassword = () => setIsFocusPassword(true);

  const inputList: IInputList[] = convertInputList(
    email,
    name,
    summonerName,
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
        passwordWarnings.map((warning) => <DynamicPasswordWarning isValid={warning.isValid} text={warning.text} />)}
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
