import { WebPlugin } from '@capacitor/core';
import type { FreshchatCapacitorPlugin, IdentifyUserOptions, InitOptions, SetPushRegistrationTokenOptions, UpdateUserOptions } from './definitions';
export declare class FreshchatCapacitorWeb extends WebPlugin implements FreshchatCapacitorPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    initialize(options: InitOptions): Promise<void>;
    updateUser(options: UpdateUserOptions): Promise<void>;
    updateUserProperties(options: Object): Promise<void>;
    resetUser(): Promise<void>;
    identifyUser(options: IdentifyUserOptions): Promise<void>;
    setPushRegistrationToken(options: SetPushRegistrationTokenOptions): Promise<void>;
    showConversations(): Promise<void>;
    showFAQs(): Promise<void>;
}
