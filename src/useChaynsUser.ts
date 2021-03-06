import { useEffect, useState } from "react";

/**
 * Returns the current user object and will update the user on access
 * token change.
 *
 * @returns The user object for the currently logged in user.
 */
export function useChaynsUser(): ChaynsUser {
  const [user, setUser] = useState<ChaynsUser>(chayns.env.user);

  useEffect(function registerAccessTokenListener() {
    const listener = (): void => setUser(chayns.env.user);

    chayns.addAccessTokenChangeListener(listener);

    return () => {
      chayns.removeAccessTokenChangeListener(listener);
    };
  }, []);

  return user;
}

type PossiblyEmptyString = string;

interface ChaynsUser {
  /**
   * The access token for the currently logged in user. Careful: If no user is
   * logged in, the value will be an empty string.
   */
  tobitAccessToken: PossiblyEmptyString;

  /**
   * The user-id.for the currently logged in user. Careful: If no user is logged
   * in, this will be `0` (not `null` or `undefined`)
   */
  id: number;

  /**
   * The name for the currently logged in user. Careful: If no user is logged
   * in, this value will be an empty string.
   */
  name: PossiblyEmptyString;
  firstName?: string;
  lastName?: string;

  /**
   * The person-id for the currently logged in user. Careful: If no user is logged
   * in, this value will be an empty string.
   */
  personId: PossiblyEmptyString;
  isAuthenticated: boolean;

  /**
   * Wether the admin mode is currently active or not. Be careful with this, as
   * it might be stale. Use the `useAdminMode` hook when you need access to this
   * information.
   */
  adminMode: boolean;
  isAdmin: boolean;

  /**
   * This contains the groups for a user. Will be an empty array if the user is
   * not logged in.
   */
  groups: UACGroup[];
}

interface UACGroup {
  id: number;
  isActive: boolean;
  isSystemGroup?: boolean;
  name?: string;
}
