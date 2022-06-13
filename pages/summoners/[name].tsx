import { NextPage, GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { wrapper } from '../../store';
import { getSummonerDataAPI } from '../../lib/api';
import { riotActions } from '../../store/riot';

import { Loading } from '../../components/common';

const DynamicMemberPage = dynamic(() => import('../../components/member'), { suspense: true });

const todo: NextPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <DynamicMemberPage />
    </Suspense>
  );
};
export default todo;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query: { name } }) => {
      try {
        const { data } = await getSummonerDataAPI(`${name}`);
        console.log('getServerSideProps data', data);
        store.dispatch(riotActions.setRiot(data));
        return { props: {} };
      } catch (e) {
        console.log(e);
        return {
          notFound: true,
        };
      }
    }
);
