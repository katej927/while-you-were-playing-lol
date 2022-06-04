import { NextPage, GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { Loading } from '../../components/common';

import { wrapper } from '../../store';
import { getSummonerDataAPI } from '../../lib/api';
import { riotActions } from '../../store/riot';
import { Suspense } from 'react';

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
        console.log('data 들어옴', data);
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
