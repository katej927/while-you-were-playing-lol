import { InputHTMLAttributes, FC } from 'react';

import * as S from './input.styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  dataset: string;
  isvalid?: boolean;
  validateMode?: boolean;
  useValidation?: boolean;
  errorMsg?: string;
}

const Input: FC<IProps> = ({
  dataset,
  icon,
  isvalid = false,
  useValidation = true,
  validateMode,
  errorMsg,
  ...props
}) => {
  return (
    <S.Container iconExist={!!icon} isvalid={isvalid} useValidation={useValidation && validateMode}>
      <input data-id={dataset} {...props} />
      <div css={S.iconWrapper}>{icon}</div>
      {useValidation && !isvalid && validateMode && errorMsg && <p css={S.errorMsg}>{errorMsg}</p>}
    </S.Container>
  );
};

export default Input;
