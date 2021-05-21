import {
    SET_POSTS,
    SET_POSTS_IS_LOADING,
    RESET_POSTS_IS_LOADING,
    SET_POSTS_ERROR
} from '../actionTypes'

const initialState = {
    posts: [],
    isLoading: false,
    error: null
};
// https://jsonplaceholder.typicode.com/posts

// set_posts       брать массив,который я откуда-то получаю и ставить его в [] in initialState
// set_is_loading    менять с false на true
// reset_is_loading  менять с true на false

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: action.payload,
                isLoading: false
            }
        }
        case SET_POSTS_IS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case RESET_POSTS_IS_LOADING: {
            return {
                ...state,
                isLoading: false
            }
        }
        case SET_POSTS_ERROR: {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        }
        default:
            return state
    }
}