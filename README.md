<a name="readmemd"></a>

# chayns-hooks

<h1 align="center">Welcome to chayns-hooks 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/leodr/chayns-hooks/tree/master/docs/globals.md" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
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

### 🏠 [Homepage](https://github.com/leodr/chayns-hooks#readme)

## Install

```sh
yarn add chayns-hooks
```

or

```sh
npm install chayns-hooks
```

## Author

👤 **Leo Driesch**

- Website: leodriesch.com
- Twitter: [@leodriesch](https://twitter.com/leodriesch)
- Github: [@leodr](https://github.com/leodr)

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

#### Type declaration:

▸ (`isShown`: boolean): _void_

**Parameters:**

| Name      | Type    |
| --------- | ------- |
| `isShown` | boolean |

## Functions

### useAdminMode

▸ **useAdminMode**(): _[AdminModeHookReturnValue](#interfacesadminmodehookreturnvaluemd)_

Returns the current status of the admin-switch which will update on change.
Also exposes methods to manually activate or deactivate the admin mode.

**Returns:** _[AdminModeHookReturnValue](#interfacesadminmodehookreturnvaluemd)_

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

**Parameters:**

| Name     | Type                                  |
| -------- | ------------------------------------- |
| `effect` | [VisibilityEffect](#visibilityeffect) |

**Returns:** _void_

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

#### Type declaration:

▸ (): _void_

---

### deactivateAdminMode

• **deactivateAdminMode**: _function_

#### Type declaration:

▸ (): _void_

---

### isAdminMode

• **isAdminMode**: _boolean_

<a name="interfaceschaynsusermd"></a>

# Interface: ChaynsUser

## Hierarchy

- **ChaynsUser**

## Index

### Properties

- [adminMode](#adminmode)
- [facebookAccessToken](#optional-facebookaccesstoken)
- [facebookId](#optional-facebookid)
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

---

### `Optional` facebookAccessToken

• **facebookAccessToken**? : _undefined | string_

---

### `Optional` facebookId

• **facebookId**? : _undefined | string_

---

### `Optional` firstName

• **firstName**? : _undefined | string_

---

### groups

• **groups**: _[UACGroup](#interfacesuacgroupmd)[]_

---

### id

• **id**: _number_

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

---

### personId

• **personId**: _[PossiblyEmptyString](#possiblyemptystring)_

---

### tobitAccessToken

• **tobitAccessToken**: _[PossiblyEmptyString](#possiblyemptystring)_

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
