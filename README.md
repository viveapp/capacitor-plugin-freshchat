# freshchat-capacitor

Integrates Freshchat with your Capacitor App

Only implemented the following methods:

- `init`
- `updateUser`
- `updateUserProperties`
- `showConversations`
- `showFAQs`

## Install

```bash
npm install https://github.com/viveapp/capacitor-plugin-freshchat.git
npx cap sync
```

## Initialise

- Android:
  - [Setup Freshchat in your Android project](https://support.freshchat.com/en/support/solutions/articles/50000000207#2.1-Initialization-Config-Options:~:text=iii%29%20When%20app%20targets%20Android%207.0%2B%20and%20Image%20attachment%20is%20enabled%2C%20FileProvider%20needs%20to%20be%20configured.)
  - Open Android project, in top-level build.gradle within buildScript section, add `ext.kotlin_version = '1.7.0'`;
  - In top-level variables.gradle, within ext section add `freshchatVersion = '5.1.0'`


- iOS:
  Open XCode, open Pods on your App level, select FreshchatCapacitor on targets list, navigate to Build Phases, find *Link Binary With Libraries* section, and add FreshchatSDK.xcfrmework there;

## API

<docgen-index>

* [`initialize(...)`](#initialize)
* [`updateUser(...)`](#updateuser)
* [`updateUserProperties(...)`](#updateuserproperties)
* [`showConversations()`](#showconversations)
* [`showFAQs()`](#showfaqs)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: InitOptions) => Promise<void>
```

Initialize the Freshchat SDK

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#initoptions">InitOptions</a></code> |

--------------------


### updateUser(...)

```typescript
updateUser(options: UpdateUserOptions) => Promise<void>
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#updateuseroptions">UpdateUserOptions</a></code> |

--------------------


### updateUserProperties(...)

```typescript
updateUserProperties(options: Record<string, unknown>) => Promise<void>
```

| Param         | Type                                                             |
| ------------- | ---------------------------------------------------------------- |
| **`options`** | <code><a href="#record">Record</a>&lt;string, unknown&gt;</code> |

--------------------


### showConversations()

```typescript
showConversations() => Promise<void>
```

--------------------


### showFAQs()

```typescript
showFAQs() => Promise<void>
```

--------------------


### Interfaces


#### InitOptions

| Prop         | Type                |
| ------------ | ------------------- |
| **`appId`**  | <code>string</code> |
| **`appKey`** | <code>string</code> |


#### UpdateUserOptions

| Prop            | Type                                                  |
| --------------- | ----------------------------------------------------- |
| **`firstName`** | <code>string</code>                                   |
| **`lastName`**  | <code>string</code>                                   |
| **`email`**     | <code>string</code>                                   |
| **`phone`**     | <code>{ countryCode: string; number: string; }</code> |


### Type Aliases


#### Record

Construct a type with a set of properties K of type T

<code>{ [P in K]: T; }</code>

</docgen-api>
