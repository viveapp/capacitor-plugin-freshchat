import { registerPlugin } from '@capacitor/core';

import type { FreshchatCapacitorPlugin } from './definitions';

const FreshchatCapacitor = registerPlugin<FreshchatCapacitorPlugin>(
  'FreshchatCapacitor',
);

export * from './definitions';
export { FreshchatCapacitor };
