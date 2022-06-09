import { InputHTMLAttributes, FC } from 'react';

import * as S from './input.styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  dataset: string;
}

const Input: FC<IProps> = ({ dataset, icon, ...props }) => {
  return (
    <S.Container iconExist={!!icon}>
      <input data-id={dataset} {...props} />
      <div css={S.iconWrapper}>{icon}</div>
    </S.Container>
  );
};

export default Input;
