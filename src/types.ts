export type PossiblyEmptyString = string

export interface ChaynsUser {
	tobitAccessToken: PossiblyEmptyString
	facebookAccessToken?: string
	facebookId?: string
	id: number
	name: PossiblyEmptyString
	firstName?: string
	lastName?: string
	personId: PossiblyEmptyString
	isAuthenticated: boolean
	adminMode: boolean
	isAdmin: boolean
	groups: UACGroup[]
}

export interface UACGroup {
	id: number
	isActive: boolean
	isSystemGroup?: boolean
	name?: string
}
