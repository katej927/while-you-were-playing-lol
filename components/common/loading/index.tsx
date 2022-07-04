import { RingLoader } from 'react-spinners';

import * as S from './loading.styles';

const Loading = () => {
  return (
    <div css={S.wrapper}>
      <RingLoader color='white' size={100} />
    </div>
  );
};

export default Loading;
