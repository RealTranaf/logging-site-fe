import axios from 'axios'
import axiosClient from './AxiosClient'

// const API_URL = 'http://localhost:8080/games'

const API_URL = 'http://localhost:8081/games'

// const API_URL = 'http://117.103.203.180:8081/games'

// const API_URL = 'http://117.103.203.180:30081/games'

// const API_URL = '/api/games'

// const API_URL = 'http://118.107.77.204:8081/games'

export async function getAllGames(platform, status) {
    let url = `${API_URL}?platform=${platform}&status=${status}`
    // return await axios.get(url)
    return axiosClient.get(url)
}

export async function getGameById(id) {
    let url = `${API_URL}/${id}`
    // return await axios.get(url)
    return axiosClient.get(url)
}

export async function addGame(name, description, platform, status) {
    // return await axios.post(`${API_URL}`, {name, description, platform, status})
    return axiosClient.post(`${API_URL}`, {name, description, platform, status})
}

export async function updateGame(id, name, description, platform, status) {
    let url = `${API_URL}/${id}`
    // return await axios.put(url, {name, description, platform, status})
    return axiosClient.put(url, {name, description, platform, status})
}

export async function deleteGame(id) {
    let url = `${API_URL}/${id}`
    // return await axios.delete(url)
    return axiosClient.delete(url)
}




