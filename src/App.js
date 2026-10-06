import './App.css'
import GamePage from './pages/GamePage'
import LoginPage from './pages/LoginPage'
import { useAuth } from './services/AuthProvider'

function App() {
    const {
        initialized,
        authenticated,
        user,
        logout,
    } = useAuth()

    if (!initialized) {
        return <div>Loading...</div>
    }

    if (!authenticated) {
        return <LoginPage />
    }

    return (
        <div>
            <header
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px",
                    borderBottom: "1px solid #ddd",
                }}
            >
                <div>
                    Welcome,{" "}
                    <strong>
                        {user?.preferred_username}
                    </strong>
                </div>

                <button onClick={logout}>
                    Logout
                </button>
            </header>

            <GamePage />
        </div>
    )
}

export default App
