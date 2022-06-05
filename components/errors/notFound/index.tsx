import useTranslation from 'next-translate/useTranslation';
import * as S from './notFound.styles';

const NotFound = () => {
  const { t } = useTranslation('common');

  return (
    <div css={S.wrapper}>
      <h2>{t('notFound1')}</h2>
      <h2>{t('notFound2')}</h2>
    </div>
  );
};

export default NotFound;
