import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import * as S from './firstSection.styles';

const FirstSection = () => {
  const [coloringTitleIdx, setColoringTitleIdx] = useState(1);

  let { t } = useTranslation('home');
  const titleList = [t('title1'), t('title2'), t('title3')];

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
    <section>
      <h1 css={S.header}>
        {titleList.map((title, idx) => (
          <S.Titles key={title} coloringTitleIdx={coloringTitleIdx} isSelected={idx + 1 === coloringTitleIdx}>
            {title}
          </S.Titles>
        ))}
      </h1>
      <h2 css={S.titleDesc}>
        <span>내 시간은 어디로 와서 어디로 가는가. 내 꿈이 프로게이머 였던가.</span>
        <br />
        <span>잃어버린 나와 당신의 시간을 찾아서.</span>
      </h2>
    </section>
  );
};

export default FirstSection;
