import { SelectHTMLAttributes, FC } from 'react';

import { ArrowDownIcon } from 'public/static/svg';

import * as S from './selector.styles';

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  value?: string;
  disabledOptions?: string[];
  dataset: string;
}

const Selector: FC<IProps> = ({ dataset, options = [], disabledOptions = [], ...props }) => {
  return (
    <div css={S.container}>
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
    </div>
  );
};

export default Selector;
