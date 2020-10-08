import axios from 'axios';
import {
    FETCH_TWEETS_REQUEST,
    FETCH_TWEETS_SUCCESS,
    FETCH_TWEETS_FAIL
} from '../types';

export const fetchTweetsRequest = () => {
    return {
        type: FETCH_TWEETS_REQUEST,
    }
}

export const fetchTweetsSuccess = (tweets) => {
    return {
        type: FETCH_TWEETS_SUCCESS,
        payload: tweets,
    }
}

export const fetchTweetsFail = (error) => {
    return {
        type: FETCH_TWEETS_FAIL,
        payload: error,
    }
}

export const fetchTweetsAction = () => {
    return async (dispatch) => {
        dispatch(fetchTweetsRequest)
        await axios.get('https://cors-anywhere.herokuapp.com/http://domer.tech:9999/tweets/')
        
        .then((response) => {
            const tweets = response.data.data;
            dispatch(fetchTweetsSuccess(tweets));
        })
        .catch((error) => {
            const errorMsg = error.message;
            dispatch(fetchTweetsFail(errorMsg));
        })
    }
}