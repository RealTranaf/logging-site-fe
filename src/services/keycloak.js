import Keycloak from "keycloak-js"

const keycloak = new Keycloak({
    url: "http://localhost:8080",
    realm: "test-realm",
    clientId: "test-client",
})

export default keycloak