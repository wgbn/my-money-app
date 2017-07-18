import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import constants from '../constants'

function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(r => {
                dispatch([
                    { type: 'USER_FETCHED', payload: r.data }
                ])
            })
            .catch(e => {
                console.log(e)
                toastr.error('Erro', 'erro saporra')
            })
    }
}


export function login(values) {
    return submit(values, `${constants.API_URL}/login`)
}

export function signup(values) {
    return submit(values, `${constants.API_URL}/signup`)
}

export function logout() {
    return {
        type: 'TOKEN_VALIDATED',
        payload: false
    }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(`${constants.API_URL}/validatetoken`, { token })
                .then(resp => dispatch({
                    type: 'TOKEN_VALIDATED',
                    payload: resp.data.valid
                }) )
                .catch(e => dispatch({
                    type: 'TOKEN_VALIDATED',
                    payload: false
                }))
        } else {
            dispatch({
                type: 'TOKEN_VALIDATED',
                payload: false
            })
        }
    }
}