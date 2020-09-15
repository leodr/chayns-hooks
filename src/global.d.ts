declare namespace chayns {
	const env: { user: ChaynsUser }

	function addAccessTokenChangeListener(listener: () => void): void
	function removeAccessTokenChangeListener(listener: () => void): void

	function addAdminSwitchListener(listener: () => void): void
	function removeAdminSwitchListener(listener: () => void): void

	function activateAdminMode(): void
	function deactivateAdminMode(): void

	type ActivationListener = (update: ActivationStatusUpdate) => void

	function addOnActivateListener(listener: ActivationListener): void
	function removeOnActivateListener(listener: ActivationListener): void
}

type PossiblyEmptyString = string

interface ChaynsUser {
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

interface UACGroup {
	id: number
	isActive: boolean
	isSystemGroup?: boolean
	name?: string
}

interface ActivationStatusUpdate {
	date?: string
	data?: { tappEvent: number }
	tappEvent?: number
}
