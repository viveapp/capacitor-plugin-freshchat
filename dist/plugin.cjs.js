'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

function isFreshchatNotification(notification) {
    if (notification.data &&
        notification.data.source &&
        notification.data.source === 'freshchat_user') {
        return true;
    }
    return false;
}

const FreshchatCapacitor = core.registerPlugin('FreshchatCapacitor', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.FreshchatCapacitorWeb()),
});

class FreshchatCapacitorWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FreshchatCapacitorWeb: FreshchatCapacitorWeb
});

exports.FreshchatCapacitor = FreshchatCapacitor;
exports.isFreshchatNotification = isFreshchatNotification;
//# sourceMappingURL=plugin.cjs.js.map
