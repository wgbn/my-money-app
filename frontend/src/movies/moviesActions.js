import axios from 'axios'

const BASE_URL = 'http://localhost:3003'

export function getMovies() {
    const request = axios.get(`${BASE_URL}/movies`)
    return {
        type: 'NETFLIX_MOVIES_FETCHED',
        payload: request
    }
}