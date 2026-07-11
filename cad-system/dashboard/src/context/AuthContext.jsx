import { useCallback, useEffect, useMemo, useState } from "react";

import { getCurrentUser, logout as logoutRequest } from "../services/auth";
import { AuthContext } from "./auth-context";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const refreshUser = useCallback(async () => {
        try {
            const response = await getCurrentUser();
            setUser(response.user);
        } catch {
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        let isMounted = true;

        getCurrentUser()
            .then((response) => {
                if (isMounted) {
                    setUser(response.user);
                }
            })
            .catch(() => {
                if (isMounted) {
                    setUser(null);
                }
            })
            .finally(() => {
                if (isMounted) {
                    setIsLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const logout = useCallback(async () => {
        await logoutRequest();
        setUser(null);
    }, []);

    const value = useMemo(() => ({
        user,
        isLoading,
        isAuthenticated: Boolean(user),
        refreshUser,
        logout,
    }), [user, isLoading, refreshUser, logout]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
