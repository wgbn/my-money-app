const userKey = '_mymoney_user'
const INITIAL_STATE = {
    user: JSON.parse(sessionStorage.getItem(userKey)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED':
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                sessionStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        case 'USER_FETCHED':
            sessionStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, validToken: true, user: action.payload }
        default:
            return state
    }
}