interface IIconProps {
  [key: string]: JSX.Element;
}

export const convertInputList = (email: string, password: string, hidePassword: boolean, icons: IIconProps) => {
  return [
    {
      placeholder: '이메일 주소',
      name: 'email',
      type: 'email',
      icon: icons.emailIcon,
      value: email,
      dataset: 'email',
      isValid: email,
      errorMsg: '이메일을 입력해주세요.',
    },
    {
      placeholder: '비밀번호 설정하기',
      type: hidePassword ? 'password' : 'text',
      icon: icons.eyeIcon,
      value: password,
      dataset: 'password',
      isValid: password,
      errorMsg: '비밀번호를 입력해주세요.',
    },
  ];
};
