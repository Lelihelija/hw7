import {
    FETCH_TWEETS_REQUEST,
    FETCH_TWEETS_SUCCESS,
    FETCH_TWEETS_FAIL
} from '../types';

export const initialState = {
    loading: false,
    tweets: [],
    error: '',
};

export const getTweetReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TWEETS_REQUEST:
        return {
            ...state.tweets,
            loading: true,
            error: '',
        };
        case FETCH_TWEETS_SUCCESS:
        return {
            tweets: action.payload,
            loading: false,
            error: '',
        };
        case FETCH_TWEETS_FAIL:
        return {
            users: [],
            loading: false,
            error: action.payload,
        };
        default: return state;
    };
};

