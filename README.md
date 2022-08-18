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
npm install freshchat-capacitor
npx cap sync
```

## Initialise

- [Setup Freshchat in your Android project](https://support.freshchat.com/en/support/solutions/articles/50000000207#2.1-Initialization-Config-Options:~:text=iii%29%20When%20app%20targets%20Android%207.0%2B%20and%20Image%20attachment%20is%20enabled%2C%20FileProvider%20needs%20to%20be%20configured.)

- iOS doesn't require any additional steps

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
updateUserProperties(options: Object) => Promise<void>
```

| Param         | Type                                      |
| ------------- | ----------------------------------------- |
| **`options`** | <code><a href="#object">Object</a></code> |

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


#### Object

Provides functionality common to all JavaScript objects.

| Prop              | Type                                          | Description                                                                                                                                |
| ----------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **`constructor`** | <code><a href="#function">Function</a></code> | The initial value of <a href="#object">Object</a>.prototype.constructor is the standard built-in <a href="#object">Object</a> constructor. |

| Method                   | Signature                                                 | Description                                                              |
| ------------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| **toString**             | () =&gt; string                                           | Returns a string representation of an object.                            |
| **toLocaleString**       | () =&gt; string                                           | Returns a date converted to a string using the current locale.           |
| **valueOf**              | () =&gt; <a href="#object">Object</a>                     | Returns the primitive value of the specified object.                     |
| **hasOwnProperty**       | (v: <a href="#propertykey">PropertyKey</a>) =&gt; boolean | Determines whether an object has a property with the specified name.     |
| **isPrototypeOf**        | (v: <a href="#object">Object</a>) =&gt; boolean           | Determines whether an object exists in another object's prototype chain. |
| **propertyIsEnumerable** | (v: <a href="#propertykey">PropertyKey</a>) =&gt; boolean | Determines whether a specified property is enumerable.                   |


#### Function

Creates a new function.

| Prop            | Type                                          |
| --------------- | --------------------------------------------- |
| **`prototype`** | <code>any</code>                              |
| **`length`**    | <code>number</code>                           |
| **`arguments`** | <code>any</code>                              |
| **`caller`**    | <code><a href="#function">Function</a></code> |

| Method       | Signature                                                                            | Description                                                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **apply**    | (this: <a href="#function">Function</a>, thisArg: any, argArray?: any) =&gt; any     | Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.                                                                     |
| **call**     | (this: <a href="#function">Function</a>, thisArg: any, ...argArray: any[]) =&gt; any | Calls a method of an object, substituting another object for the current object.                                                                                                                                         |
| **bind**     | (this: <a href="#function">Function</a>, thisArg: any, ...argArray: any[]) =&gt; any | For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters. |
| **toString** | () =&gt; string                                                                      | Returns a string representation of a function.                                                                                                                                                                           |


### Type Aliases


#### PropertyKey

<code>string | number | symbol</code>

</docgen-api>
