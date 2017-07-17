const INITIAL_STATE = { movies: {} }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NETFLIX_MOVIES_FETCHED':
            return { ...state, movies: action.payload.data }
        default:
            return state
    }
}