import { useRouter } from 'next/router';
import { MainIcon } from '../../public/static/svg';
import * as S from './header.styles';

const Header = () => {
  const router = useRouter();

  const handleClickIcon = () => {
    router.push('/');
  };
  return (
    <nav className={S.wrapper}>
      <div>
        <MainIcon onClick={handleClickIcon} className={S.mainIcon} />
      </div>
    </nav>
  );
};

export default Header;
