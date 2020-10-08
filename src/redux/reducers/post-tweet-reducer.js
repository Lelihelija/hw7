import {
    POST_TWEET_REQUEST,
    POST_TWEET_SUCCESS,
    POST_TWEET_FAIL
} from '../types';

export const initialState = {
    loading: false,
    tweets: [],
    error: '',
};

export const postUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_TWEET_REQUEST:
            return {
                tweets: state.tweets,
                completed: false,
            };
        case POST_TWEET_SUCCESS:
            return {
                ...state,
                completed: true,
                tweets: [...state.tweets, action.payload]
            };
        case POST_TWEET_FAIL:
            return {
                completed: false,
                error: action.payload,
            };
        default: return state;    
    };
};