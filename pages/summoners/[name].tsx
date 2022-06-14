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

const todo: NextPage<IProps> = ({ data }) => {
  const dispatch = useDispatch();
  dispatch(riotActions.setRiot(data));
  return (
    <Suspense fallback={<Loading />}>
      <DynamicMemberPage />
    </Suspense>
  );
};
export default todo;

export const getServerSideProps: GetServerSideProps = async ({ query: { name } }) => {
  try {
    const { data } = await getSummonerDataAPI(`${name}`);
    return { props: { data: data } };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};
