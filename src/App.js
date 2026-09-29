import './App.css'
import GamePage from './pages/GamePage'
import LoginForm from './pages/LoginForm'
import ProtectedRoute from './pages/ProtectedRoute'
import { Routes, Route } from 'react-router-dom'

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginForm />}/>
                    <Route element={<ProtectedRoute />}>
                        <Route path="/games" element={<GamePage />}/>
                    </Route>
            </Routes>
        </div>
    )
}

export default App
