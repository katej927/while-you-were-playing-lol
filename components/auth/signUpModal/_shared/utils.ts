import { PASSWORD_MIN_LENGTH, SPECIAL_CHARACTER_REGEX, NUMBER_REGEX } from '.';

interface IInputListIconProps {
  [key: string]: JSX.Element;
}

export const convertInputList = (
  email: string,
  name: string,
  summonerName: string,
  hidePassword: boolean,
  password: string,
  isPasswordValid: boolean,
  onFocusPassword: () => void,
  { emailIcon, personIcon, passwordIcon }: IInputListIconProps
) => {
  return [
    {
      placeholder: '이메일 주소',
      type: 'email',
      icon: emailIcon,
      name: 'email',
      value: email,
      dataset: 'email',
      errorMsg: '이메일이 필요합니다.',
      isValid: !!email,
      onFocus: undefined,
    },
    {
      placeholder: '이름(예: 홍길동)',
      type: undefined,
      icon: personIcon,
      name: undefined,
      value: name,
      dataset: 'name',
      errorMsg: '이름을 입력하세요.',
      isValid: !!name,
      onFocus: undefined,
    },
    {
      placeholder: '롤 소환사명',
      type: undefined,
      icon: personIcon,
      name: undefined,
      value: summonerName,
      dataset: 'summonerName',
      errorMsg: '소환사명을 입력하세요.',
      isValid: !!summonerName,
      onFocus: undefined,
    },
    {
      placeholder: '비밀번호 설정하기',
      type: hidePassword ? 'password' : 'text',
      icon: passwordIcon,
      name: undefined,
      value: password,
      dataset: 'password',
      errorMsg: '비밀번호를 입력하세요.',
      isvalid: isPasswordValid,
      onFocus: onFocusPassword,
    },
  ];
};

interface IBDaySelectorsProps {
  options: string[][];
  value: (string | undefined)[];
}

export const convertBDaySelectors = (data: IBDaySelectorsProps) => {
  const { options, value } = data;
  return [
    { options: options[0], defaultValue: '월', dataset: 'bDay-month', value: value[0] },
    { options: options[1], defaultValue: '일', dataset: 'bDay-day', value: value[1] },
    { options: options[2], defaultValue: '년', dataset: 'bDay-year', value: value[2] },
  ];
};

export const checkPasswordValidation = (password: string, name: string, email: string) => {
  const isPasswordHasNameOrEmail =
    !password || !name || password.includes(name) || password.includes(email.split('@')[0]);
  const isPasswordOverMinLength = password.length >= PASSWORD_MIN_LENGTH;
  const isPasswordHasNumOrSymbol = !(SPECIAL_CHARACTER_REGEX.test(password) || NUMBER_REGEX.test(password));

  const validationDetails = { isPasswordHasNameOrEmail, isPasswordOverMinLength, isPasswordHasNumOrSymbol };
  const isPasswordValid = !isPasswordHasNameOrEmail && isPasswordOverMinLength && !isPasswordHasNumOrSymbol;

  return { isPasswordValid, validationDetails };
};

interface IWarningTxtProps {
  isPasswordHasNameOrEmail: boolean;
  isPasswordOverMinLength: boolean;
  isPasswordHasNumOrSymbol: boolean;
}

export const convertPasswordWarningTxt = ({
  isPasswordHasNameOrEmail,
  isPasswordOverMinLength,
  isPasswordHasNumOrSymbol,
}: IWarningTxtProps) => {
  return [
    { isValid: isPasswordHasNameOrEmail, text: '비밀번호에 본인 이름이나 이메일 주소를 포함할 수 없습니다.' },
    { isValid: !isPasswordOverMinLength, text: '최소 8자' },
    { isValid: isPasswordHasNumOrSymbol, text: '숫자나 기호를 포함하세요.' },
  ];
};
