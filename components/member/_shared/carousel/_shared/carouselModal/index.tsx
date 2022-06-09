import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';

import { CloseIcon } from 'public/static/svg';
import { BACKGROUND_IMG_URL, ITEM_IMG_URL, convertData } from './_shared';

import { IEachMatchInfo } from 'types';

import * as S from './carouselModal.styles';

interface IProps {
  modalData: IEachMatchInfo;
  closeModal: () => void;
}

const carouselModal: FC<IProps> = ({ modalData, closeModal }) => {
  let { t } = useTranslation('common');
  const convertedData = convertData(modalData);

  return (
    <section css={S.wrapper}>
      <img css={S.img} src={BACKGROUND_IMG_URL(`${convertedData['championName']}`)} />
      <dl css={S.descWrapper}>
        {Object.keys(convertedData).map((key, idx) => (
          <div key={`casouselModal-desc-${idx + 1}`}>
            <dt css={S.subject}>{t(key)}</dt>
            <dd css={S.content}>
              {key === 'itemList'
                ? convertedData[key].map((item) => (item ? <img css={S.itemImg} src={ITEM_IMG_URL(item)} /> : null))
                : convertedData[key]}
            </dd>
          </div>
        ))}
      </dl>
      <button css={S.closeBtn} onClick={closeModal}>
        <CloseIcon css={S.closeIcon} />
      </button>
    </section>
  );
};

export default carouselModal;
