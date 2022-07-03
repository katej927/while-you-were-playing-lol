import { useDispatch } from 'react-redux';
import { useSelector } from 'store';
import useTranslation from 'next-translate/useTranslation';

import { commonActions } from 'store';

import { CloseIcon, CheckCircleIcon } from 'public/static/svg';
import * as S from './alert.styles';

const Alert = () => {
  const { text, status } = useSelector((state) => state.common.popupMsg);
  const dispatch = useDispatch();
  const { t } = useTranslation('common');

  const Icon = {
    success: <CheckCircleIcon />,
  }[status!];

  const onClickCloseBtn = () => dispatch(commonActions.setPopupMsg({ isShow: false }));

  return (
    <S.Container status={status!}>
      <S.LeftContainer status={status!}>
        {Icon}
        <div css={S.textContainer}>
          <span>{t(`popup.status.${status}`, { returnObjects: true })}</span>
          <span>{t(`popup.text.${text}`, { returnObjects: true })}</span>
        </div>
      </S.LeftContainer>
      <button type='button' onClick={onClickCloseBtn}>
        <CloseIcon />
      </button>
    </S.Container>
  );
};

export default Alert;
