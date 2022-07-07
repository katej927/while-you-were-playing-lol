import { PASSWORD_MIN_LENGTH, SPECIAL_CHARACTER_REGEX, NUMBER_REGEX } from '.';

interface IInputListIconProps {
  [key: string]: JSX.Element;
}

export const convertInputList = (
  email: string,
  name: string,
  hidePassword: boolean,
  password: string,
  isPasswordValid: boolean,
  onFocusPassword: () => void,
  { emailIcon, personIcon, passwordIcon }: IInputListIconProps
) => {
  return [
    {
      type: 'email',
      icon: emailIcon,
      name: 'email',
      value: email,
      dataset: 'email',
      isValid: !!email,
    },
    {
      icon: personIcon,
      value: name,
      dataset: 'name',
      isValid: !!name,
    },
    {
      type: hidePassword ? 'password' : 'text',
      icon: passwordIcon,
      value: password,
      dataset: 'password',
      isvalid: isPasswordValid,
      onFocus: onFocusPassword,
    },
  ];
};

interface IBDaySelectorsProps {
  options: string[][];
  convertBdayUnit: (unit: string) => string;
  value: (string | undefined)[];
}

export const convertBDaySelectors = ({ options, convertBdayUnit, value }: IBDaySelectorsProps) => {
  return [
    { options: options[0], defaultValue: convertBdayUnit('month'), dataset: 'bDay-month', value: value[0] },
    { options: options[1], defaultValue: convertBdayUnit('day'), dataset: 'bDay-day', value: value[1] },
    { options: options[2], defaultValue: convertBdayUnit('year'), dataset: 'bDay-year', value: value[2] },
  ];
};

export const checkPasswordValidation = (password: string, name: string, email: string) => {
  const isPasswordHasNameOrEmail = !password.includes(name) && !password.includes(email.split('@')[0]);
  const isPasswordOverMinLength = password.length >= PASSWORD_MIN_LENGTH;
  const isPasswordHasNumOrSymbol = SPECIAL_CHARACTER_REGEX.test(password) || NUMBER_REGEX.test(password);

  const passwordWarnings = [
    { isValid: isPasswordHasNameOrEmail, text: '비밀번호에 본인 이름이나 이메일 주소를 포함할 수 없습니다.' },
    { isValid: isPasswordOverMinLength, text: '최소 8자' },
    { isValid: isPasswordHasNumOrSymbol, text: '숫자나 기호를 포함하세요.' },
  ];
  const isPasswordValid = isPasswordHasNameOrEmail && isPasswordOverMinLength && isPasswordHasNumOrSymbol;

  return { isPasswordValid, passwordWarnings };
};
