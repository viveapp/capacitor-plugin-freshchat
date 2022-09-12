// Depending on the library you notification can be formatted a bit differently but they should have at least
// in common the "data.source" structure
export interface PartialPushNotificationSchema {
  data: any;
}

export function isFreshchatNotification(
  notification: PartialPushNotificationSchema,
): boolean {
  if (
    notification.data &&
    notification.data.source &&
    notification.data.source === 'freshchat_user'
  ) {
    return true;
  }

  return false;
}
