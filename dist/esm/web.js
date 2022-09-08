import { WebPlugin } from '@capacitor/core';
export class FreshchatCapacitorWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async initialize(options) {
        console.log(options);
    }
    async updateUser(options) {
        console.log(options);
    }
    async updateUserProperties(options) {
        console.log(options);
    }
    async resetUser() {
    }
    async identifyUser(options) {
        console.log(options);
    }
    async setPushRegistrationToken(options) {
        console.log(options);
    }
    async showConversations() {
    }
    async showFAQs() {
    }
}
//# sourceMappingURL=web.js.map