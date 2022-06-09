interface IConvertInputList {
  email: (string | JSX.Element)[];
  lastname: (string | JSX.Element)[];
  firstname: (string | JSX.Element)[];
  password: (string | JSX.Element)[];
  hidePassword: (boolean | (() => void))[];
}

export const convertInputList = ({ email, lastname, firstname, password, hidePassword }: IConvertInputList) => {
  return [
    {
      placeholder: '이메일 주소',
      type: 'email',
      icon: email[1],
      name: 'email',
      value: email[0],
      dataset: 'email',
    },
    {
      placeholder: '이름(예: 길동)',
      type: undefined,
      icon: lastname[1],
      name: undefined,
      value: lastname[0],
      dataset: 'lastname',
    },
    {
      placeholder: '성(예: 홍)',
      type: undefined,
      icon: firstname[1],
      name: undefined,
      value: firstname[0],
      dataset: 'firstname',
    },
    {
      placeholder: '비밀번호 설정하기',
      type: password[0] ? 'password' : 'text',
      icon: password[1],
      name: undefined,
      value: password,
      dataset: 'password',
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
