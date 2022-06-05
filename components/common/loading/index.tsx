import useTranslation from 'next-translate/useTranslation';

import { MainIcon } from '../../../public/static/svg';
import * as S from './loading.styles';

const Loading = () => {
  const { t } = useTranslation('common');

  return (
    <div css={S.wrapper}>
      <MainIcon css={S.mainIcon} />
      <h2>{t('loading')}</h2>
    </div>
  );
};

export default Loading;
