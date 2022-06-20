import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Loading } from 'components/common';

const DynamicError500 = dynamic(() => import('../components/errors/error500'), { suspense: true });

const Error: NextPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <DynamicError500 />
    </Suspense>
  );
};

export default Error;
