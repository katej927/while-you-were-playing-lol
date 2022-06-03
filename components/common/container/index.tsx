import * as S from './container.styles';

interface IProps {
  children: React.ReactNode;
  title: string;
}

const Containter = ({ children, title }: IProps) => {
  return (
    <section className={S.wrapper}>
      <div className={S.title}>{title}</div>
      <div className={S.children}>{children}</div>
    </section>
  );
};

export default Containter;
