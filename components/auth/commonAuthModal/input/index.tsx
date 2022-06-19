import { InputHTMLAttributes, FC, memo } from 'react';
import { useSelector } from 'store';

import * as S from './input.styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  dataset: string;
  isvalid?: boolean;
  isCheckValidation?: boolean;
  errorMsg?: string;
}

const Input: FC<IProps> = ({ dataset, icon, isvalid = false, isCheckValidation = true, errorMsg, ...props }) => {
  const validateMode = useSelector((state) => state.common.validateMode);

  return (
    <S.Container iconExist={!!icon} isvalid={isvalid} isValidateMode={isCheckValidation && validateMode}>
      <input data-id={dataset} {...props} />
      <div css={S.iconWrapper}>{icon}</div>
      {isCheckValidation && !isvalid && validateMode && errorMsg && <p css={S.errorMsg}>{errorMsg}</p>}
    </S.Container>
  );
};

export default memo(Input);
