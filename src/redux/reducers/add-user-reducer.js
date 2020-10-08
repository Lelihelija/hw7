// import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL
} from '../types';

export const initialState = {
  loading: false,
  users: [],
  error: '',
};

const getUsersReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state.users,
          loading: true,
       };
      case FETCH_USERS_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: '',
       };
      case FETCH_USERS_FAIL:
        return {
          loading: false,
          users: [],
          error: action.payload,
       };
      default: return state;
    };
};



export { getUsersReducer };
