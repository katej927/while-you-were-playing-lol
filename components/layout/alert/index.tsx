import { useDispatch } from 'react-redux';
import { useSelector } from 'store';

import { commonActions } from 'store/common';

import { CloseIcon, CheckCircleIcon } from 'public/static/svg';
import * as S from './alert.styles';

const Alert = () => {
  const { text, status } = useSelector((state) => state.common.popupMsg);
  const dispatch = useDispatch();

  const Icon = {
    Success: <CheckCircleIcon />,
  }[status!];

  const onClickCloseBtn = () => dispatch(commonActions.setPopupMsg({ isShow: false }));

  return (
    <S.Container status={status!}>
      <S.LeftContainer status={status!}>
        {Icon}
        <div css={S.textContainer}>
          <span>{status}</span>
          <span>{text}</span>
        </div>
      </S.LeftContainer>
      <button type='button' onClick={onClickCloseBtn}>
        <CloseIcon />
      </button>
    </S.Container>
  );
};

export default Alert;
