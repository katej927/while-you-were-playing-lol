import useTranslation from 'next-translate/useTranslation';

import { ITEM_IMG_URL, convertData, IResult } from './_shared';
import { BACKGROUND_IMG_URL } from 'components/member/_shared';
import { IEachMatchInfo } from 'types';

import { CloseIcon } from 'public/static/svg';
import * as S from './carouselModal.styles';

interface IProps {
  modalData: IEachMatchInfo;
  closeModal: () => void;
}

const carouselModal = ({ modalData, closeModal }: IProps) => {
  let { t } = useTranslation('common');
  const convertedData: IResult = convertData(modalData, t('graphTimeUnit'));

  return (
    <section css={S.wrapper}>
      <picture>
        <source
          media='(orientation: portrait)'
          srcSet={BACKGROUND_IMG_URL('loading', `${convertedData['championName']}`)}
        />
        <img
          css={S.bgImg}
          src={BACKGROUND_IMG_URL('splash', `${convertedData['championName']}`)}
          alt={`champion(${modalData.matchData.championName})'s image`}
        />
      </picture>
      <dl css={S.descWrapper}>
        {Object.keys(convertedData).map((key) => (
          <div key={key} css={S.categoriesContainer}>
            <dt css={S.subject}>{t(key)}</dt>
            <dd css={S.content}>
              {key === 'itemList'
                ? convertedData[key].map((item) =>
                    item ? <img key={item} css={S.itemImg} src={ITEM_IMG_URL(item)} /> : null
                  )
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
