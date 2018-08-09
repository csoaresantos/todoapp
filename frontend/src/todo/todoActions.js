import axios from 'axios'

export const changeDescription = event => ({
        type: 'DESCRIPTION_CHANGED',
        payload: event.target.value
    }
)

const URL = 'http://localhost:3000/api/todos'
export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}