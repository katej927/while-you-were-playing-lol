import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { useSelector } from 'store';

import { convertAllMatch, convertTime, CONVERT_ICON_URL } from './_shared';
import { BACKGROUND_IMG_URL } from 'components/member/_shared';
import { NoRecord } from 'components/common/errors';
import Carousel from './carousel';
import Container from './container';
import Graph from './graph';

import * as S from './member.styles';

const DynamicQnb = dynamic(() => import('./qnb'), { ssr: false });

const Member = () => {
  const { allMatchData, profileIconId } = useSelector((state) => state.riot.riot);
  const {
    query: { name, region },
  } = useRouter();

  if (!allMatchData.length) return <NoRecord />;

  let { t } = useTranslation('common');

  const { gameMillisecTime: time, playinDate } = useMemo(() => convertAllMatch(allMatchData), [allMatchData]);

  const { timeBlock, opportunityCost } = useMemo(() => convertTime(time), [time]);

  return (
    <main css={S.container}>
      <header css={S.header}>
        <div css={S.headerContentWrapper}>
          {profileIconId && profileIconId <= 4530 ? (
            <img src={CONVERT_ICON_URL(profileIconId)} css={S.profileIcon} />
          ) : (
            <div />
          )}
          <div>
            <h2 css={S.summonerName}>{name}</h2>
            <div css={S.region}>{region}</div>
          </div>
        </div>
      </header>
      <DynamicQnb profileImg={BACKGROUND_IMG_URL('splash', allMatchData[0].matchData.championName)} />
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
        <Container title={t('graphTitle')}>
          <Graph playinDate={playinDate} />
        </Container>
        <Container title={t('slide')}>
          <Carousel />
        </Container>
        <Container title={t('boxheader2')}>
          <div css={S.opportunityCostWrapper}>
            {Object.keys(opportunityCost).map((kind, idx) => {
              return (
                <div key={kind} css={S.opportunityCostBox}>
                  <span css={S.opportunityKind}>{t(kind)}</span>
                  <S.Opportunity idx={idx}>
                    {`${opportunityCost[kind][0]} ${t(opportunityCost[kind][1])}`}
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
