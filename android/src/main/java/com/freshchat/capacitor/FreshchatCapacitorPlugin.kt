package com.freshchat.capacitor

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import androidx.localbroadcastmanager.content.LocalBroadcastManager
import com.freshchat.consumer.sdk.Freshchat
import com.freshchat.consumer.sdk.FreshchatConfig
import com.getcapacitor.*
import com.getcapacitor.annotation.CapacitorPlugin


@CapacitorPlugin(name = "FreshchatCapacitor")
class FreshchatCapacitorPlugin : Plugin() {
    var restoreIdNotificationCall: PluginCall? = null

    private val broadcastReceiver: BroadcastReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context, intent: Intent) {
            val restoreId = Freshchat.getInstance(context).user.restoreId
            val externalId = Freshchat.getInstance(context).user.externalId

            val res = JSObject()
            res.put("restoreId", restoreId)
            res.put("externalId", externalId)

            restoreIdNotificationCall?.resolve(res)
        }
    }

    @PluginMethod
    fun initialize(call: PluginCall) {
        if (call.data.length() == 0) {
            call.reject("No arguments provided")
            return
        }

        val appId = call.getString("appId")
        val appKey = call.getString("appKey")

        if (appId.isNullOrBlank() || appKey.isNullOrBlank()) {
            return call.reject("appId or appKey can not be blank")
        }

        val config = FreshchatConfig(appId, appKey)

        Freshchat.getInstance(context).init(config)
        call.resolve()
    }

    @PluginMethod
    fun updateUser(call: PluginCall) {
        if (call.data.length() == 0) {
            call.reject("No arguments provided")
        }

        val firstName = call.getString("firstName")
        val lastName = call.getString("lastName")
        val email = call.getString("email")
        val phoneCountryCode = call.getObject("phone")?.getString("countryCode")
        val phoneNumber = call.getObject("phone")?.getString("number")

        val freshchatUser = Freshchat.getInstance(context).user
        if (firstName != null)
            freshchatUser.firstName = firstName
        if (lastName != null)
            freshchatUser.lastName = lastName
        if (email != null)
            freshchatUser.email = email
        if (phoneCountryCode != null && phoneNumber != null)
            freshchatUser.setPhone(phoneCountryCode, phoneNumber)

        Freshchat.getInstance(context).user = freshchatUser

        call.resolve()
    }

    @PluginMethod
    fun updateUserProperties(call: PluginCall) {
        if (call.data.length() == 0) {
            call.reject("No arguments provided")
        }

        val keys = call.data.keys()
        val userMetaData = HashMap<String, String>()

        while (keys.hasNext()) {
            val key = keys.next()
            userMetaData[key] = call.getString(key).orEmpty()
        }
        Freshchat.getInstance(context).setUserProperties(userMetaData)

        call.resolve()
    }

    @PluginMethod
    fun resetUser(call: PluginCall) {
        Freshchat.resetUser(context)
        call.resolve()
    }

    @PluginMethod
    fun identifyUser(call: PluginCall) {
        if (call.data.length() == 0) {
            call.reject("No arguments provided")
        }

        val externalId = call.getString("externalId")
        val restoreId = call.getString("restoreId")

        if (externalId.isNullOrEmpty()) {
            call.reject("externalId cannot be empty")
            return
        }

        try {
            Freshchat.getInstance(context).identifyUser(externalId, restoreId)

            call.resolve()
        } catch (e: Exception) {
            call.reject("Exception occurred", e)
        }
    }

    @PluginMethod
    fun getRestoreId(call: PluginCall) {
        if (call.data.length() == 0) {
            call.reject("No arguments provided")
        }

        val restoreId = Freshchat.getInstance(context).user.restoreId

        val res = JSObject()
        res.put("restoreId", restoreId)

        call.resolve(res)
    }

    @PluginMethod
    fun registerRestoreIdNotification(call: PluginCall) {
        val intentFilter = IntentFilter(Freshchat.FRESHCHAT_USER_RESTORE_ID_GENERATED)
        LocalBroadcastManager.getInstance(context).registerReceiver(broadcastReceiver, intentFilter)
        restoreIdNotificationCall = call
    }

    @PluginMethod
    fun unregisterRestoreIdNotification(call: PluginCall) {
        if (restoreIdNotificationCall != null) {
            LocalBroadcastManager.getInstance(context).unregisterReceiver(broadcastReceiver)
            restoreIdNotificationCall = null
        }
    }

    @PluginMethod
    fun showConversations(call: PluginCall) {
        Freshchat.showConversations(context)
        call.resolve()
    }

    @PluginMethod
    fun showFAQs(call: PluginCall) {
        Freshchat.showFAQs(context)
        call.resolve()
    }


}