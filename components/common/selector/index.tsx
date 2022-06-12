import { SelectHTMLAttributes, FC, memo } from 'react';
import { useSelector } from 'store';

import { ArrowDownIcon } from 'public/static/svg';

import * as S from './selector.styles';

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  value?: string;
  disabledOptions?: string[];
  dataset: string;
  isValid: boolean;
}

const Selector: FC<IProps> = ({ isValid, dataset, options = [], disabledOptions = [], ...props }) => {
  const validateMode = useSelector((state) => state.common.validateMode);
  console.log('validateMode', validateMode);

  return (
    <S.Container isValid={isValid} validateMode={validateMode}>
      <select {...props} data-id={dataset}>
        {disabledOptions.map((option) => (
          <option key={option} value={option} disabled>
            {option}
          </option>
        ))}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ArrowDownIcon css={S.icon} />
    </S.Container>
  );
};

export default memo(Selector);
