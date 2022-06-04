import { useMemo } from 'react';

import { useSelector } from '../../store';
import { convertTime } from './utils';
import { Container } from '../common';

import { cx } from '@emotion/css';
import * as S from './member.styles';

const Member = () => {
  const { revisionDate: time, name } = useSelector((state) => state.riot.riot);
  const { timeBlock, opportunityCost } = useMemo(() => convertTime(time ?? 1), [time]);

  return (
    <main>
      <header className={S.header}>
        <h2 className={S.summonerName}>{name}</h2>
      </header>
      <article className={S.contentsWrapper}>
        <Container title='내가 롤을 이렇게 했다니 이럴 리 없다..'>
          <div className={S.timeBlockWrapper}>
            {Object.keys(timeBlock).map((key, idx) => {
              return (
                <div key={key} className={cx(S.timeBlock, { [S.day]: key === '일' })}>
                  <span className={S.time}>{timeBlock[key]}</span>
                  <span className={S.timeUnit}>{key}</span>
                </div>
              );
            })}
          </div>
        </Container>
        <Container title='롤을 안 했더라면..'>
          <div className={S.opportunityCostWrapper}>
            {Object.keys(opportunityCost).map((kind, idx) => {
              return (
                <div key={kind} className={S.opportunityCostBox}>
                  <span className={S.opportunityKind}>{kind}</span>
                  <span className={cx(S.opportunity, `order${idx}`)}>{opportunityCost[kind]}</span>
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
