import axios from 'axios'

const API_URL = 'http://localhost:8081/auth'

// const API_URL = 'http://117.103.203.180:8081/auth'

// const API_URL = 'http://117.103.203.180:30081/auth'

// const API_URL = '/api/auth'

// const API_URL = 'http://118.107.77.204:8081/auth'


export async function login (username, password){
    const response = await axios.post(`${API_URL}/login`, { username, password })
    return response.data
}