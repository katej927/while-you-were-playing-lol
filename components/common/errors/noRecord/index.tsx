import useTranslation from 'next-translate/useTranslation';
import * as S from './noRecord.styles';

const NoRecord = () => {
  const { t } = useTranslation('common');

  return (
    <div css={S.wrapper}>
      <h2>{t('noRecord')}</h2>
    </div>
  );
};

export default NoRecord;
