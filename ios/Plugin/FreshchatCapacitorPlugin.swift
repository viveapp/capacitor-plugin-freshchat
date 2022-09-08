import Foundation
import Capacitor
import FreshchatSDK

func dataWithHexString(hex: String) -> Data {
  var hex = hex
  var data = Data()
  while(hex.count > 0) {
    let subIndex = hex.index(hex.startIndex, offsetBy: 2)
    let c = String(hex[..<subIndex])
    hex = String(hex[subIndex...])
    var ch: UInt32 = 0
    Scanner(string: c).scanHexInt32(&ch)
    var char = UInt8(ch)
    data.append(&char, count: 1)
  }
  return data
}

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

    let config:FreshchatConfig = FreshchatConfig.init(appID: appId, andAppKey: appKey)

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

  @objc func resetUser(_ call: CAPPluginCall) {
    Freshchat.sharedInstance().resetUser(completion: nil)
    call.resolve()
  }

  @objc func identifyUser(_ call: CAPPluginCall) {
    guard !call.options.isEmpty else {
      call.reject("No arguments provided")
      return
    }

    guard let externalId = call.options["externalId"] as? String else {
      call.reject("externalId must be provided")
      return
    }

    let restoreId = call.options["restoreId"] as? String ?? nil

    Freshchat.sharedInstance().identifyUser(withExternalID: externalId, restoreID: restoreId)
    call.resolve()
  }

  @objc func setPushRegistrationToken(_ call: CAPPluginCall) {
    guard !call.options.isEmpty else {
      call.reject("No arguments provided")
      return
    }

    guard let deviceTokenString = call.options["deviceToken"] as? String else {
      call.reject("deviceToken must be provided")
      return
    }

    // This is required to transform an hexa string to a real hexadecimal value
    let deviceToken = dataWithHexString(hex: deviceTokenString)

    Freshchat.sharedInstance().setPushRegistrationToken(deviceToken)
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
