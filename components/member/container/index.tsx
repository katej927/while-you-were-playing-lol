import { memo } from 'react';
import * as S from './container.styles';

interface IProps {
  children: React.ReactNode;
  title: string;
}

const Containter = ({ children, title }: IProps) => {
  return (
    <section css={S.wrapper}>
      <div css={S.title}>{title}</div>
      <div css={S.children}>{children}</div>
    </section>
  );
};

export default memo(Containter);
