import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { initSentry } from '@shared/configs/sentry-init';

import App from './App.tsx';

initSentry();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
