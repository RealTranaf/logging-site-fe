import { useAuth } from '../services/AuthProvider'

function LoginPage() {

    const { login } = useAuth()

    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    width: "350px",
                    padding: "30px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                }}
            >
                <h2>Logging Site</h2>

                <p>Please login to continue.</p>

                <button
                    onClick={login}
                    style={{
                        width: "100%",
                        padding: "10px",
                        cursor: "pointer",
                    }}
                >
                    Login with Keycloak
                </button>
            </div>
        </div>
    )
}

export default LoginPage
