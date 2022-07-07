interface IPlaceholder {
  [type: string]: string;
}

interface IIconProps {
  [key: string]: JSX.Element;
}

export const convertInputList = (
  email: string,
  password: string,
  hidePassword: boolean,
  placeholder: IPlaceholder,
  icons: IIconProps
) => {
  return [
    {
      placeholder: placeholder.emailPlaceholder,
      name: 'email',
      type: 'email',
      icon: icons.emailIcon,
      value: email,
      dataset: 'email',
      isValid: email,
      errorMsg: '이메일을 입력해주세요.',
    },
    {
      placeholder: placeholder.passwordPlaceholder,
      type: hidePassword ? 'password' : 'text',
      icon: icons.eyeIcon,
      value: password,
      dataset: 'password',
      isValid: password,
      errorMsg: '비밀번호를 입력해주세요.',
    },
  ];
};
