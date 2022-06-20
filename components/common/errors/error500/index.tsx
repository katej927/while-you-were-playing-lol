import useTranslation from 'next-translate/useTranslation';
import * as S from './error500.styles';

const Error500 = () => {
  const { t } = useTranslation('common');

  return (
    <div css={S.wrapper}>
      <h2>{t('500errorMsg1')}</h2>
      <h2>{t('500errorMsg2')}</h2>
    </div>
  );
};

export default Error500;
