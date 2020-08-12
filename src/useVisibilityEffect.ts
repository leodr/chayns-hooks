import { useEffect } from 'react'

type VisibilityEffect = (isShown: boolean) => void

export function useVisibilityEffect(effect: VisibilityEffect): void {
	useEffect(() => {
		const listener: chayns.ActivationListener = (update) => {
			const isShown = update.data.tappEvent === 0

			effect(isShown)
		}

		chayns.addOnActivateListener(listener)

		return () => chayns.removeOnActivateListener(listener)
	}, [effect])
}
