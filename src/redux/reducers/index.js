import { combineReducers } from 'redux';
import { getUsersReducer } from './add-user-reducer';
import { getTweetReducer } from './get-tweet-reducer';

export const rootReducer = combineReducers ({
    user: getUsersReducer,
    tweet: getTweetReducer,
})

