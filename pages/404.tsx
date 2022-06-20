import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Loading } from 'components/common';

const DynamicNotFound = dynamic(() => import('../components/errors/notFound'), { suspense: true });

const NotFoundPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <DynamicNotFound />
    </Suspense>
  );
};

export default NotFoundPage;
