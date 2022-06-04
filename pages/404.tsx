import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const DynamicNotFound = dynamic(() => import('../components/errors/notFound'), { suspense: true });

const NotFoundPage = () => {
  return (
    <Suspense>
      <DynamicNotFound />
    </Suspense>
  );
};

export default NotFoundPage;
