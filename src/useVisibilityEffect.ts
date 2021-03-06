import { useEffect } from "react";

/**
 * A function that can respond to the change of the visibility status of your page.
 *
 * @param isShown This parameter expresses wether the last visibility status update
 *      indicates that the page is now shown or not.
 */
type VisibilityEffect = (isShown: boolean) => void;

/**
 * This hook can execute side effects when the visibility status of your page changes.
 *
 * @returns Nothing. Use it similarly to `useEffect`.
 *
 * @param effect This function will be called when the visibility changes and can
 *      respond to the change by executing side effects. Consider using `useCallback`
 *      with this function, otherwise the listener will be attached and detached on
 *      every render.
 */
export function useVisibilityEffect(effect: VisibilityEffect): void {
  useEffect(() => {
    const listener: chayns.ActivationListener = (update) => {
      const tappEvent = update.tappEvent ?? update.data?.tappEvent;

      const isShown = tappEvent === 0;

      effect(isShown);
    };

    chayns.addOnActivateListener(listener);

    return () => chayns.removeOnActivateListener(listener);
  }, [effect]);
}
