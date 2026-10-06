import { createContext, useContext, useEffect, useState } from "react"

import keycloak from "./keycloak"

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [initialized, setInitialized] = useState(false)
    const [authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        keycloak
            .init({
                onLoad: "check-sso",
                pkceMethod: "S256",
                checkLoginIframe: false,
            })
            .then((auth) => {
                setAuthenticated(auth)

                if (auth) {
                    setUser(keycloak.tokenParsed)
                }

                setInitialized(true)
            })
            .catch((error) => {
                console.error("Keycloak initialization failed:", error)
                setInitialized(true)
            })
    }, [])

    const login = () => {
        keycloak.login()
    }

    const logout = () => {
        keycloak.logout({
            redirectUri: window.location.origin,
        })
    }

    return (
        <AuthContext.Provider
            value={{
                initialized,
                authenticated,
                user,
                token: keycloak.token,
                login,
                logout,
                keycloak,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

