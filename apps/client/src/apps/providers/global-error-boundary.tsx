import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from '@sentry/react';

interface GlobalErrorBoundaryProps {
  children: ReactNode;
}
export function GlobalErrorBoundary({ children }: GlobalErrorBoundaryProps) {
  return (
    <ErrorBoundary fallback={<p>error-page</p>}>
      <Suspense fallback={<p>loading...</p>}>{children}</Suspense>
    </ErrorBoundary>
  );
}
