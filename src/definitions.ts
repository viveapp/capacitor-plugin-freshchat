export interface FreshchatCapacitorPlugin {
  initialize(options: InitOptions): Promise<void>;

  updateUser(options: UpdateUserOptions): Promise<void>;

  updateUserProperties(options: Object): Promise<void>;

  resetUser(): Promise<void>;

  identifyUser(options: IdentifyUserOptions): Promise<void>;

  setPushRegistrationToken(
    options: SetPushRegistrationTokenOptions,
  ): Promise<void>;

  showConversations(): Promise<void>;

  showFAQs(): Promise<void>;
}

export interface InitOptions {
  appId: string;
  appKey: string;
}

export interface UpdateUserOptions {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: {
    countryCode: string;
    number: string;
  };
}

export interface IdentifyUserOptions {
  externalId?: string;
  restoreId?: string;
}

export interface SetPushRegistrationTokenOptions {
  deviceToken: string;
}
