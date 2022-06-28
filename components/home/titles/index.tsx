import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import * as S from './titles.styles';

const Titles = () => {
  const [coloringTitleIdx, setColoringTitleIdx] = useState(1);

  let { t } = useTranslation('home');

  useEffect(() => {
    const coloringTimer = setInterval(() => {
      setColoringTitleIdx((prev) => (prev === 3 ? 1 : prev + 1));
    }, 2500);
    coloringTimer;

    return () => {
      clearInterval(coloringTimer);
    };
  }, []);

  console.log('coloringTitleIdx', coloringTitleIdx);

  return (
    <h1 css={S.header}>
      <S.Titles>{t('title1')}</S.Titles>
      <S.Titles>{t('title2')}</S.Titles>
      <S.Titles>{t('title3')}</S.Titles>
    </h1>
  );
};

export default Titles;
