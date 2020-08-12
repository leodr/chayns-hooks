[chayns-hooks - v1.0.0](README.md) › [Globals](globals.md)

# chayns-hooks - v1.0.0

## Index

### Interfaces

* [AdminModeHookReturnValue](interfaces/adminmodehookreturnvalue.md)
* [ChaynsUser](interfaces/chaynsuser.md)
* [UACGroup](interfaces/uacgroup.md)

### Type aliases

* [PossiblyEmptyString](globals.md#possiblyemptystring)
* [VisibilityEffect](globals.md#visibilityeffect)

### Functions

* [useAdminMode](globals.md#useadminmode)
* [useChaynsUser](globals.md#usechaynsuser)
* [useVisibilityEffect](globals.md#usevisibilityeffect)

## Type aliases

###  PossiblyEmptyString

Ƭ **PossiblyEmptyString**: *string*

___

###  VisibilityEffect

Ƭ **VisibilityEffect**: *function*

#### Type declaration:

▸ (`isShown`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`isShown` | boolean |

## Functions

###  useAdminMode

▸ **useAdminMode**(): *[AdminModeHookReturnValue](interfaces/adminmodehookreturnvalue.md)*

Returns the current status of the admin-switch which will update on change.
Also exposes methods to manually activate or deactivate the admin mode.

**Returns:** *[AdminModeHookReturnValue](interfaces/adminmodehookreturnvalue.md)*

___

###  useChaynsUser

▸ **useChaynsUser**(): *[ChaynsUser](interfaces/chaynsuser.md)*

Returns the current user object and will update the user on access
token change.

**Returns:** *[ChaynsUser](interfaces/chaynsuser.md)*

The user object for the currently logged in user.

___

###  useVisibilityEffect

▸ **useVisibilityEffect**(`effect`: [VisibilityEffect](globals.md#visibilityeffect)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`effect` | [VisibilityEffect](globals.md#visibilityeffect) |

**Returns:** *void*
