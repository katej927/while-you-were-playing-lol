import { NextPage, GetServerSideProps } from 'next';
import Member from '../../components/member';

import { wrapper } from '../../store';
import { getSummonerDataAPI } from '../../lib/api';
import { riotActions } from '../../store/riot';

const todo: NextPage = () => {
  return <Member />;
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
        return { props: {} };
      }
    }
);
