import * as S from './notFound.styles';

const NotFound = () => {
  return (
    <div css={S.wrapper}>
      <h2>등록되지 않은 소환사입니다.</h2>
      <h2>오타를 확인 후 다시 검색해주세요.</h2>
    </div>
  );
};

export default NotFound;
