import { FC, useState, SyntheticEvent } from 'react';

import { Input, Selector } from 'components/common';
import { CloseIcon, EmailIcon, PersonIcon, OpenedEyeIcon, ClosedEyeIcon } from 'public/static/svg';
import { DAYS, MONTHS, YEARS, convertBDaySelectors, convertInputList } from './_shared';

import * as S from './signUpModal.styles';

const SignUpModal: FC = () => {
  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [birthYear, setBirthYear] = useState<string | undefined>();
  const [birthDay, setBirthDay] = useState<string | undefined>();
  const [birthMonth, setBirthMonth] = useState<string | undefined>();

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

  const inputList = convertInputList({
    email: [email, <EmailIcon css={S.inputIcon} />],
    lastname: [lastname, <PersonIcon css={S.inputIcon} />],
    firstname: [firstname, <PersonIcon css={S.inputIcon} />],
    password: [
      password,
      hidePassword ? (
        <ClosedEyeIcon onClick={toggleHidePassword} css={S.eyeIcons} />
      ) : (
        <OpenedEyeIcon onClick={toggleHidePassword} css={S.eyeIcons} />
      ),
    ],
  });

  // const inputList = [
  //   {
  //     placeholder: '이메일 주소',
  //     type: 'email',
  //     icon: <EmailIcon css={S.inputIcon} />,
  //     name: 'email',
  //     value: email,
  //     dataset: 'email',
  //   },
  //   {
  //     placeholder: '이름(예: 길동)',
  //     type: undefined,
  //     icon: <PersonIcon css={S.inputIcon} />,
  //     name: undefined,
  //     value: lastname,
  //     dataset: 'lastname',
  //   },
  //   {
  //     placeholder: '성(예: 홍)',
  //     type: undefined,
  //     icon: <PersonIcon css={S.inputIcon} />,
  //     name: undefined,
  //     value: firstname,
  //     dataset: 'firstname',
  //   },
  //   {
  //     placeholder: '비밀번호 설정하기',
  //     type: hidePassword ? 'password' : 'text',
  //     icon: hidePassword ? (
  //       <ClosedEyeIcon onClick={toggleHidePassword} css={S.eyeIcons} />
  //     ) : (
  //       <OpenedEyeIcon onClick={toggleHidePassword} css={S.eyeIcons} />
  //     ),
  //     name: undefined,
  //     value: password,
  //     dataset: 'password',
  //   },
  // ];

  const bDaySelectors = convertBDaySelectors({
    options: [MONTHS, DAYS, YEARS],
    value: [birthMonth, birthDay, birthYear],
  });

  return (
    <div css={S.wrapper}>
      <CloseIcon css={S.closeIcon} />
      {inputList.map((input) => {
        const { placeholder, type, icon, name, value, dataset } = input;
        return (
          <div css={S.inputWrapper}>
            <Input
              placeholder={placeholder}
              type={type}
              icon={icon}
              name={name}
              value={value}
              dataset={dataset}
              onChange={onChangeInputs}
            />
          </div>
        );
      })}
      <p css={S.title}>생일</p>
      <p css={S.titleInfo}>생일은 다른 이용자에게 공개되지 않습니다.</p>
      <div css={S.bDaySelectorWrapper}>
        {bDaySelectors.map((selector) => {
          const { options, defaultValue, dataset, value } = selector;
          return (
            <div css={S.bDaySelector}>
              <Selector
                options={options}
                disabledOptions={[defaultValue]}
                defaultValue={defaultValue}
                onChange={onChangeInputs}
                dataset={dataset}
                value={value}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SignUpModal;
