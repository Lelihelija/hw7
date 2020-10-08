import axios from 'axios';
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAIL
} from '../types';

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAIL,
        payload: error,
    }
}

export const fetchUsersAction = () => {
    return async (dispatch) => {
        dispatch(fetchUsersRequest)
        await axios.get(`https://cors-anywhere.herokuapp.com/http://domer.tech:9999/users`)
        // await axios.get(`http://domer.tech:9999/users`)
        .then((response) => {
            const users = response.data.data;
            dispatch(fetchUsersSuccess(users));
        })
        .catch((error) => {
            const errorMsg = error.message;
            dispatch(fetchUsersFailure(errorMsg));
        })
    }
}
