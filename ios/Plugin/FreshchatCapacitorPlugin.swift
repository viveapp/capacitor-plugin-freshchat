import Foundation
import Capacitor
import FreshchatSDK

@objc(FreshchatCapacitorPlugin)
public class FreshchatCapacitorPlugin: CAPPlugin {

    @objc func initialize(_ call: CAPPluginCall) {
        guard !call.options.isEmpty else {
            call.reject("No arguments provided")
            return
        }

        guard let appId = call.options["appId"] as? String else {
            call.reject("appId must be provided")
            return
        }

        guard let appKey = call.options["appKey"] as? String else {
            call.reject("appKey must be provided")
            return
        }

        let config: FreshchatConfig = FreshchatConfig.init(appID: appId, andAppKey: appKey)

        Freshchat.sharedInstance().initWith(config)
        call.resolve()
    }

    @objc func updateUser(_ call: CAPPluginCall) {
        guard !call.options.isEmpty else {
            call.reject("No arguments provided")
            return
        }

        let user = FreshchatUser.sharedInstance()

        if let firstName = call.getString("firstName") {
            user.firstName = firstName
        }

        if let lastName = call.getString("lastName") {
            user.lastName = lastName
        }

        if let email = call.getString("email") {
            user.email = email
        }

        let phoneCountryCode = call.getObject("phone")?["countryCode"] as? String
        let phoneNumber = call.getObject("phone")?["number"] as? String

        if phoneCountryCode != nil, phoneNumber != nil {
            user.phoneCountryCode = phoneCountryCode
            user.phoneNumber = phoneNumber
        }

        Freshchat.sharedInstance().setUser(user)
    }

    @objc func updateUserProperties(_ call: CAPPluginCall) {
        for key in call.options.keys {
            guard let keyAsString = key as? String, let value = call.options[keyAsString] as? String else {
                call.reject("Invalid property '\(key)' or value '\(call.options[key] ?? "no value found")'")
                return
            }
            Freshchat.sharedInstance().setUserPropertyforKey(keyAsString, withValue: value)
        }
        call.resolve()
    }

    @objc func showConversations(_ call: CAPPluginCall) {
        guard let viewController = self.bridge?.viewController else {
            call.reject("UIViewController is null")
            return
        }

        DispatchQueue.main.async {
            Freshchat.sharedInstance().showConversations(viewController)
            call.resolve()
        }
    }

    @objc func showFAQs(_ call: CAPPluginCall) {
        guard let viewController = self.bridge?.viewController else {
            call.reject("UIViewController is null")
            return
        }

        DispatchQueue.main.async {
            Freshchat.sharedInstance().showFAQs(viewController)
            call.resolve()
        }
    }
}
