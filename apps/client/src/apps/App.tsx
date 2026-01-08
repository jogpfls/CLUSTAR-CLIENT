import { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router';

import { createQueryClient } from '@shared/libs/query-client';
import { router } from '@shared/router/router';

import { GlobalErrorBoundary } from './providers/global-error-boundary';

function App() {
  const [client] = useState(() => createQueryClient());

  return (
    <GlobalErrorBoundary>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
        <div>
          <button
            onClick={() => {
              throw new Error('This is your first error!');
            }}
          >
            Break the world
          </button>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </GlobalErrorBoundary>
  );
}

export default App;
