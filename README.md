<a name="readmemd"></a>

# chayns-hooks

<h1 align="center">Welcome to chayns-hooks 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/leodr/chayns-hooks/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/leodr/chayns-hooks/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/leodr/chayns-hooks" />
  </a>
  <a href="https://twitter.com/leodriesch" target="_blank">
    <img alt="Twitter: leodriesch" src="https://img.shields.io/twitter/follow/leodriesch.svg?style=social" />
  </a>
</p>

> Makes the chayns-js API easier to consume in your react components.

## Install

```sh
yarn add chayns-hooks
```

or

```sh
npm install chayns-hooks
```

Please note that this needs the [chayns-js API](https://github.com/TobitSoftware/chayns-js) to be available on the window object and `chayns.ready` should be finished.

The instructions for how to get started with the `chayns-js` API can be found [here](https://github.com/TobitSoftware/chayns-js#getting-started).

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/leodr/chayns-hooks/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Leo Driesch](https://github.com/leodr).<br />
This project is [MIT](https://github.com/leodr/chayns-hooks/blob/master/LICENSE) licensed.

<a name="globalsmd"></a>

# chayns-hooks

## Index

### Interfaces

- [AdminModeHookReturnValue](#interfacesadminmodehookreturnvaluemd)
- [ChaynsUser](#interfaceschaynsusermd)
- [UACGroup](#interfacesuacgroupmd)

### Type aliases

- [PossiblyEmptyString](#possiblyemptystring)
- [VisibilityEffect](#visibilityeffect)

### Functions

- [useAdminMode](#useadminmode)
- [useChaynsUser](#usechaynsuser)
- [useVisibilityEffect](#usevisibilityeffect)

## Type aliases

### PossiblyEmptyString

Ƭ **PossiblyEmptyString**: _string_

---

### VisibilityEffect

Ƭ **VisibilityEffect**: _function_

A function that can respond to the change of the visibility status of your page.

**`param`** This parameter expresses wether the last visibility status update
indicates that the page is now shown or not.

#### Type declaration:

▸ (`isShown`: boolean): _void_

**Parameters:**

| Name      | Type    |
| --------- | ------- |
| `isShown` | boolean |

## Functions

### useAdminMode

▸ **useAdminMode**(): _[AdminModeHookReturnValue](#interfacesadminmodehookreturnvaluemd)_

Using this hook will subscribe your component to the current state of the admin
mode.

**Returns:** _[AdminModeHookReturnValue](#interfacesadminmodehookreturnvaluemd)_

An object that can be destructed to get access to the current status
of the admin mode and functions to manually activate or deactivate the admin mode.

---

### useChaynsUser

▸ **useChaynsUser**(): _[ChaynsUser](#interfaceschaynsusermd)_

Returns the current user object and will update the user on access
token change.

**Returns:** _[ChaynsUser](#interfaceschaynsusermd)_

The user object for the currently logged in user.

---

### useVisibilityEffect

▸ **useVisibilityEffect**(`effect`: [VisibilityEffect](#visibilityeffect)): _void_

This hook can execute side effects when the visibility status of your page changes.

**Parameters:**

| Name     | Type                                  | Description                                                                                                                                                                                                                              |
| -------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `effect` | [VisibilityEffect](#visibilityeffect) | This function will be called when the visibility changes and can respond to the change by executing side effects. Consider using `useCallback` with this function, otherwise the listener will be attached and detached on every render. |

**Returns:** _void_

Nothing. Use it similarly to `useEffect`.

<a name="interfacesadminmodehookreturnvaluemd"></a>

# Interface: AdminModeHookReturnValue

## Hierarchy

- **AdminModeHookReturnValue**

## Index

### Properties

- [activateAdminMode](#activateadminmode)
- [deactivateAdminMode](#deactivateadminmode)
- [isAdminMode](#isadminmode)

## Properties

### activateAdminMode

• **activateAdminMode**: _function_

Calling this function will activate the admin mode, if it is currently
inactive. Otherwise it will do nothing.

#### Type declaration:

▸ (): _void_

---

### deactivateAdminMode

• **deactivateAdminMode**: _function_

Calling this function will deactivate the admin mode, if it is active.
Otherwise it will do nothing.

#### Type declaration:

▸ (): _void_

---

### isAdminMode

• **isAdminMode**: _boolean_

Indicates if the user is currently in admin mode or not.

<a name="interfaceschaynsusermd"></a>

# Interface: ChaynsUser

## Hierarchy

- **ChaynsUser**

## Index

### Properties

- [adminMode](#adminmode)
- [firstName](#optional-firstname)
- [groups](#groups)
- [id](#id)
- [isAdmin](#isadmin)
- [isAuthenticated](#isauthenticated)
- [lastName](#optional-lastname)
- [name](#name)
- [personId](#personid)
- [tobitAccessToken](#tobitaccesstoken)

## Properties

### adminMode

• **adminMode**: _boolean_

Wether the admin mode is currently active or not. Be careful with this, as
it might be stale. Use the `useAdminMode` hook when you need access to this
information.

---

### `Optional` firstName

• **firstName**? : _undefined | string_

---

### groups

• **groups**: _[UACGroup](#interfacesuacgroupmd)[]_

This contains the groups for a user. Will be an empty array if the user is
not logged in.

---

### id

• **id**: _number_

The user-id.for the currently logged in user. Careful: If no user is logged
in, this will be `0` (not `null` or `undefined`)

---

### isAdmin

• **isAdmin**: _boolean_

---

### isAuthenticated

• **isAuthenticated**: _boolean_

---

### `Optional` lastName

• **lastName**? : _undefined | string_

---

### name

• **name**: _[PossiblyEmptyString](#possiblyemptystring)_

The name for the currently logged in user. Careful: If no user is logged
in, this value will be an empty string.

---

### personId

• **personId**: _[PossiblyEmptyString](#possiblyemptystring)_

The person-id for the currently logged in user. Careful: If no user is logged
in, this value will be an empty string.

---

### tobitAccessToken

• **tobitAccessToken**: _[PossiblyEmptyString](#possiblyemptystring)_

The access token for the currently logged in user. Careful: If no user is
logged in, the value will be an empty string.

<a name="interfacesuacgroupmd"></a>

# Interface: UACGroup

## Hierarchy

- **UACGroup**

## Index

### Properties

- [id](#id)
- [isActive](#isactive)
- [isSystemGroup](#optional-issystemgroup)
- [name](#optional-name)

## Properties

### id

• **id**: _number_

---

### isActive

• **isActive**: _boolean_

---

### `Optional` isSystemGroup

• **isSystemGroup**? : _undefined | false | true_

---

### `Optional` name

• **name**? : _undefined | string_
