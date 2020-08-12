import { useEffect, useState } from 'react'

interface AdminModeHookReturnValue {
	isAdminMode: boolean
	activateAdminMode: () => void
	deactivateAdminMode: () => void
}

/**
 * Returns the current status of the admin-switch which will update on change.
 * Also exposes methods to manually activate or deactivate the admin mode.
 */
export function useAdminMode(): AdminModeHookReturnValue {
	const [isAdminMode, setIsAdminMode] = useState<boolean>(
		chayns.env.user.adminMode
	)

	useEffect(function registerAdminSwitchListener() {
		const listener = (): void => setIsAdminMode(chayns.env.user.adminMode)

		chayns.addAdminSwitchListener(listener)

		return () => {
			chayns.removeAdminSwitchListener(listener)
		}
	}, [])

	function activateAdminMode(): void {
		chayns.activateAdminMode()
	}

	function deactivateAdminMode(): void {
		chayns.deactivateAdminMode()
	}

	return { isAdminMode, activateAdminMode, deactivateAdminMode }
}
