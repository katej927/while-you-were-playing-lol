import { FC, Fragment } from 'react';

import { IEachMatchInfo } from 'types';
import { BACKGROUND_IMG_URL, ITEM_IMG_URL, convertData } from './_shared';

import * as S from './carouselModal.styles';

interface IProps {
  modalData: IEachMatchInfo;
}

const carouselModal: FC<IProps> = ({ modalData }) => {
  const convertedData = convertData(modalData);

  return (
    <section css={S.wrapper}>
      <img css={S.img} src={BACKGROUND_IMG_URL(`${convertedData['championName']}`)} />
      <div css={S.descWrapper}>
        <dl>
          {Object.keys(convertedData).map((key) => (
            <Fragment key={key}>
              <dt>{key}</dt>
              <dd>{convertedData[key]}</dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default carouselModal;
