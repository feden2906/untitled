const initialState = {
    posts: [],
    isLoading: false
};
// https://jsonplaceholder.typicode.com/posts

// set_posts       брать массив,который я откуда-то получаю и ставить его в [] in initialState
// set_is_loading    менять с false на true
// reset_is_loading  менять с true на false

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSTS': {
            return {
                ...state,
                // posts ?
            }
        }
        case 'SET_IS_LOADING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'RESET_IS_LOADING': {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state
    }
}