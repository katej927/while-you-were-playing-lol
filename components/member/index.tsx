import { useMemo } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { useSelector } from '../../store';
import { convertAllMatch, convertTime } from './utils';
import { CONVERT_ICON_URL } from './constants';

import { NoRecord } from '../errors';
import { Container } from '../common';

import * as S from './member.styles';

const Member = () => {
  const allMatchData = useSelector((state) => state.riot.riot);
  const router = useRouter();
  const {
    query: { name },
  } = router;

  if (!allMatchData.length) return <NoRecord />;

  const { profileIconId } = allMatchData[0] ?? 0;
  let { t } = useTranslation('common');

  const { gameMillisecTime: time, playinDate } = convertAllMatch(allMatchData);

  const { timeBlock, opportunityCost } = useMemo(() => convertTime(time), [time]);

  return (
    <main>
      <header css={S.header}>
        <div css={S.headerContentWrapper}>
          {profileIconId && <img src={CONVERT_ICON_URL(profileIconId)} css={S.profileIcon} />}
          <h2 css={S.summonerName}>{name}</h2>
        </div>
      </header>
      <article css={S.contentsWrapper}>
        <Container title={t('boxheader1')}>
          <div css={S.timeBlockWrapper}>
            {Object.keys(timeBlock).map((key, idx) => {
              return (
                <S.TimeBlock key={key} is1st={idx === 0}>
                  <span css={S.time}>{timeBlock[key]}</span>
                  <span css={S.timeUnit}>{t(key)}</span>
                </S.TimeBlock>
              );
            })}
          </div>
        </Container>
        <Container title={t('boxheader2')}>
          <div css={S.opportunityCostWrapper}>
            {Object.keys(opportunityCost).map((kind, idx) => {
              return (
                <div key={kind} css={S.opportunityCostBox}>
                  <span css={S.opportunityKind}>{t(kind)}</span>
                  <S.Opportunity idx={idx}>
                    {opportunityCost[kind][0]}&nbsp;
                    {t(opportunityCost[kind][1])}
                  </S.Opportunity>
                </div>
              );
            })}
          </div>
        </Container>
      </article>
    </main>
  );
};

export default Member;
