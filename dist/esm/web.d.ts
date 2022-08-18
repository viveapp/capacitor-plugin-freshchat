import { WebPlugin } from '@capacitor/core';
import type { FreshchatCapacitorPlugin, InitOptions, UpdateUserOptions } from './definitions';
export declare class FreshchatCapacitorWeb extends WebPlugin implements FreshchatCapacitorPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    initialize(options: InitOptions): Promise<void>;
    updateUser(options: UpdateUserOptions): Promise<void>;
    updateUserProperties(options: Object): Promise<void>;
    showConversations(): Promise<void>;
    showFAQs(): Promise<void>;
}
