import { registerPlugin } from '@capacitor/core';

import type { FreshchatCapacitorPlugin } from './definitions';

const FreshchatCapacitor = registerPlugin<FreshchatCapacitorPlugin>(
  'FreshchatCapacitor',
  {
    web: () => import('./web').then(m => new m.FreshchatCapacitorWeb()),
  },
);

export * from './definitions';
export * from './helpers';
export { FreshchatCapacitor };
