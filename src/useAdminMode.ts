import { useEffect, useState } from 'react'

interface AdminModeHookReturnValue {
	/**
	 * Indicates if the user is currently in admin mode or not.
	 */
	isAdminMode: boolean

	/**
	 * Calling this function will activate the admin mode, if it is currently
	 * inactive. Otherwise it will do nothing.
	 */
	activateAdminMode: () => void

	/**
	 * Calling this function will deactivate the admin mode, if it is active.
	 * Otherwise it will do nothing.
	 */
	deactivateAdminMode: () => void
}

/**
 * Using this hook will subscribe your component to the current state of the admin
 * mode.
 *
 * @returns An object that can be destructed to get access to the current status
 * of the admin mode and functions to manually activate or deactivate the admin mode.
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
