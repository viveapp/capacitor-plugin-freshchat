import { WebPlugin } from '@capacitor/core';

import type {
  FreshchatCapacitorPlugin,
  IdentifyUserOptions,
  InitOptions,
  SetPushRegistrationTokenOptions,
  UpdateUserOptions,
} from './definitions';

export class FreshchatCapacitorWeb
  extends WebPlugin
  implements FreshchatCapacitorPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async initialize(options: InitOptions): Promise<void> {
    console.log(options);
  }

  async updateUser(options: UpdateUserOptions): Promise<void> {
    console.log(options);
  }

  async updateUserProperties(options: Object): Promise<void> {
    console.log(options);
  }

  async resetUser(): Promise<void> {

  }

  async identifyUser(options: IdentifyUserOptions): Promise<void> {
    console.log(options);
  }

  async setPushRegistrationToken(options: SetPushRegistrationTokenOptions): Promise<void> {
    console.log(options);
  }

  async showConversations(): Promise<void> {

  }

  async showFAQs(): Promise<void> {

  }
}
