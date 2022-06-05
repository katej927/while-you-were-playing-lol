import { MainIcon } from '../../../public/static/svg';
import * as S from './loading.styles';

const Loading = () => {
  return (
    <div css={S.wrapper}>
      <MainIcon css={S.mainIcon} />
    </div>
  );
};

export default Loading;
