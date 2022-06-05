import { useMemo } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { useSelector } from '../../store';
import { convertAllMatch, convertTime } from './utils';
import { CONVERT_ICON_URL } from './constants';

import { NoRecord } from '../errors';
import { Container } from '../common';

import { cx } from '@emotion/css';
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
      <header className={S.header}>
        <div className={S.headerContentWrapper}>
          {profileIconId && <img src={CONVERT_ICON_URL(profileIconId)} className={S.profileIcon} />}
          <h2 className={S.summonerName}>{name}</h2>
        </div>
      </header>
      <article className={S.contentsWrapper}>
        <Container title={t('boxheader1')}>
          <div className={S.timeBlockWrapper}>
            {Object.keys(timeBlock).map((key, idx) => {
              return (
                <div key={key} className={cx(S.timeBlock, { [S.day]: idx === 0 })}>
                  <span className={S.time}>{timeBlock[key]}</span>
                  <span className={S.timeUnit}>{t(key)}</span>
                </div>
              );
            })}
          </div>
        </Container>
        <Container title={t('boxheader2')}>
          <div className={S.opportunityCostWrapper}>
            {Object.keys(opportunityCost).map((kind, idx) => {
              return (
                <div key={kind} className={S.opportunityCostBox}>
                  <span className={S.opportunityKind}>{t(kind)}</span>
                  <span className={cx(S.opportunity, `order${idx}`)}>
                    {opportunityCost[kind][0]}&nbsp;
                    {t(opportunityCost[kind][1])}
                  </span>
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
