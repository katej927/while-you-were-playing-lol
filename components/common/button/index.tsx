import { FC, ButtonHTMLAttributes } from 'react';
import * as S from './button.styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const Button: FC<IProps> = ({ children, ...props }) => {
  return (
    <button css={S.container} {...props}>
      {children}
    </button>
  );
};

export default Button;
