import { InputHTMLAttributes, FC, memo } from 'react';
import { useSelector } from 'store';

import * as S from './input.styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  dataset: string;
  isvalid?: boolean;
  useValidation?: boolean;
  errorMsg?: string;
}

const Input: FC<IProps> = ({ dataset, icon, isvalid = false, useValidation = true, errorMsg, ...props }) => {
  const validateMode = useSelector((state) => state.common.validateMode);
  console.log('Input', 'isvalid', isvalid, 'useValidation', useValidation, 'validateMode', validateMode);

  return (
    <S.Container iconExist={!!icon} isvalid={isvalid} useValidation={useValidation && validateMode}>
      <input data-id={dataset} {...props} />
      <div css={S.iconWrapper}>{icon}</div>
      {useValidation && !isvalid && validateMode && errorMsg && <p css={S.errorMsg}>{errorMsg}</p>}
    </S.Container>
  );
};

export default memo(Input);
