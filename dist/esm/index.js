import { registerPlugin } from '@capacitor/core';
const FreshchatCapacitor = registerPlugin('FreshchatCapacitor', {
    web: () => import('./web').then(m => new m.FreshchatCapacitorWeb()),
});
export * from './definitions';
export { FreshchatCapacitor };
//# sourceMappingURL=index.js.map