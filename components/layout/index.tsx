import * as S from './layout.styles';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return <div className={S.wrapper}>{children}</div>;
};

export default Layout;
