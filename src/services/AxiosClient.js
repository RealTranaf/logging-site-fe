import axios from "axios"
import keycloak from "./keycloak"

const axiosClient = axios.create({
    baseURL: "http://localhost:8081",
})

axiosClient.interceptors.request.use(
    async (config) => {

        if (keycloak.authenticated) {

            try {
                await keycloak.updateToken(30);

                config.headers.Authorization =
                    `Bearer ${keycloak.token}`

            } catch (error) {
                console.error(
                    "Failed to refresh token",
                    error
                );

                keycloak.logout()
            }
        }

        return config
    },
    (error) => Promise.reject(error)
)

export default axiosClient