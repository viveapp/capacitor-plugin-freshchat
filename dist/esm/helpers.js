export function isFreshchatNotification(notification) {
    if (notification.data &&
        notification.data.source &&
        notification.data.source === 'freshchat_user') {
        return true;
    }
    return false;
}
//# sourceMappingURL=helpers.js.map