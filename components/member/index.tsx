import { useRouter } from 'next/router';
import { cx } from '@emotion/css';
import { useSelector } from '../../store';
import { convertTime } from './utils';
import { Wrapper } from '../common';

import * as S from './member.styles';

const Member = () => {
  const { revisionDate: time, name } = useSelector((state) => state.riot.riot);
  const result = convertTime(time ?? 1);

  return (
    <main>
      <header className={S.header}>
        <h2 className={S.summonerName}>{name}</h2>
      </header>
      <article className={S.contentsWrapper}>
        <Wrapper title='내가 롤을 이렇게 했다니 이럴리 없다'>
          <>
            {Object.keys(result[0]).map((key, idx) => {
              return (
                <div key={key} className={cx(S.timebox, idx)}>
                  <span>{result[0][key]}</span>
                  <span>{key}</span>
                </div>
              );
            })}
          </>
        </Wrapper>
      </article>
    </main>
  );
};

export default Member;
