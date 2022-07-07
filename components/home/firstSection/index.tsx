import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import * as S from './firstSection.styles';

const FirstSection = () => {
  const [coloringTitleIdx, setColoringTitleIdx] = useState(1);

  let { t } = useTranslation('home');
  const titleList = Array.apply(null, Array(3)).map((el, idx) => {
    return t(`firstSection.title${idx + 1}`, { returnObjects: true });
  });

  useEffect(() => {
    const coloringTimer = setInterval(() => {
      setColoringTitleIdx((prev) => (prev === 3 ? 1 : prev + 1));
    }, 2500);
    coloringTimer;

    return () => {
      clearInterval(coloringTimer);
    };
  }, []);

  return (
    <section css={S.container}>
      <h1 css={S.header}>
        {titleList.map((title, idx) => (
          <S.Titles key={title} coloringTitleIdx={coloringTitleIdx} isSelected={idx + 1 === coloringTitleIdx}>
            {title}
          </S.Titles>
        ))}
      </h1>
      <h2 css={S.titleDesc}>
        <span>{t('firstSection.desc.1')}</span>
        <br />
        <span>{t('firstSection.desc.2')}</span>
      </h2>
    </section>
  );
};

export default FirstSection;
