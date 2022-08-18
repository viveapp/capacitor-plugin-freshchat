#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>
#import <FreshchatSDK/FreshchatSDK.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(FreshchatCapacitorPlugin, "FreshchatCapacitor",
           CAP_PLUGIN_METHOD(initialize, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(updateUser, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(updateUserProperties, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(showConversations, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(showFAQs, CAPPluginReturnPromise);
)
