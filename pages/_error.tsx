import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const DynamicError500 = dynamic(() => import('../components/errors/error500'));

const Error: NextPage = () => {
  return <DynamicError500 />;
};

export default Error;
