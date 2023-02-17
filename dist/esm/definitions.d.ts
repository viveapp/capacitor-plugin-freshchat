export interface FreshchatCapacitorPlugin {
    /**
     * Initialize the Freshchat SDK
     */
    initialize(options: InitOptions): Promise<void>;
    updateUser(options: UpdateUserOptions): Promise<void>;
    updateUserProperties(options: Record<string, unknown>): Promise<void>;
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
