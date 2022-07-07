import dynamic from 'next/dynamic';
import { useState, SyntheticEvent, FormEvent, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useTranslation from 'next-translate/useTranslation';

import { useValidateMode } from 'hooks';
import { createUser } from 'lib/api';
import { authActions, commonActions } from 'store';

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

const SignUpModal = ({ closeModal }: IProps) => {
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

  const { t } = useTranslation('common');
  const translateBdayPath = 'authentication.signUp.birthday';
  const convertBdayUnit = (unit: string) => t(`${translateBdayPath}.${unit}`);

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
        birthday: new Date(`${birthYear}-${birthMonth!}-${birthDay}`).toISOString(),
      };
      await createUser(sigupBody);
      dispatch(authActions.setAuthMode('login'));
      dispatch(
        commonActions.setPopupMsg({
          text: 'completedSignup',
          status: 'success',
          isShow: true,
        })
      );
      setTimeout(() => {
        dispatch(commonActions.setPopupMsg({ isShow: false }));
      }, 5000);
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
    convertBdayUnit,
    value: [birthMonth, birthDay, birthYear],
  });

  return (
    <CommonAuthModal
      onChangeInputs={onChangeInputs}
      onSubmitForm={onSubmitSignup}
      closeModal={closeModal}
      inputList={inputList}
    >
      {isFocusPassword &&
        passwordWarnings.map((warning) => {
          return <DynamicPasswordWarning key={warning.text} isValid={warning.isValid} text={warning.text} />;
        })}
      <p css={S.title}>{t(`${translateBdayPath}.title`, { returnObjects: true })}</p>
      <p css={S.titleInfo}>{t(`${translateBdayPath}.desc`, { returnObjects: true })}</p>
      <div css={S.bDaySelectorWrapper}>
        {bDaySelectors.map(({ options, defaultValue, dataset, value }) => {
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
