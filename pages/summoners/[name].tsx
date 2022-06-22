import { NextPage, GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { getSummonerDataAPI } from 'lib/api';
import { riotActions } from 'store/riot';

import { Loading } from 'components/common';
import { IEachMatch } from 'types';

const DynamicMemberPage = dynamic(() => import('components/member'), { suspense: true });

interface IProps {
  data: IEachMatch;
}

const summonersName: NextPage<IProps> = ({ data }) => {
  const dispatch = useDispatch();
  dispatch(riotActions.setRiot(data));

  return (
    <Suspense fallback={<Loading />}>
      <DynamicMemberPage />
    </Suspense>
  );
};
export default summonersName;

export const getServerSideProps: GetServerSideProps = async ({ query: { name, region } }) => {
  try {
    const { data } = await getSummonerDataAPI({ summonerName: `${name}`, region: `${region}` });
    return { props: { data: data } };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};
