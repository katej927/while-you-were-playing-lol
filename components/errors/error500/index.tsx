import * as S from './error500.styles';

const Error500 = () => {
  return (
    <div css={S.wrapper}>
      <h2>에러가 났다고 ? 이게 무슨 일이야 !</h2>
      <h2>상단의 홈 버튼을 눌러주세요.</h2>
    </div>
  );
};

export default Error500;
