import { useEffect, useState } from 'react'
import { ChaynsUser } from './types'

/**
 * Returns the current user object and will update the user on access
 * token change.
 *
 * @returns The user object for the currently logged in user.
 */
export function useChaynsUser(): ChaynsUser {
	const [user, setUser] = useState<ChaynsUser>(chayns.env.user)

	useEffect(function registerAccessTokenListener() {
		const listener = (): void => setUser(chayns.env.user)

		chayns.addAccessTokenChangeListener(listener)

		return () => {
			chayns.removeAccessTokenChangeListener(listener)
		}
	}, [])

	return user
}
