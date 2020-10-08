import axios from 'axios';
import {
    POST_TWEET_REQUEST,
    POST_TWEET_SUCCESS,
    POST_TWEET_FAIL
} from '../types';

export const postTweetThunkCreator = async (payload, dispatch) => {
    
    console.log(payload);
    await axios.post('https://cors-anywhere.herokuapp.com/http://domer.tech:9999/tweets/', { ...payload })
    // .then(
    //                 response => dispatch({
    //                     type: POST_TWEET_SUCCESS,
    //                     payload: response,
    //                 }),
    //                 error => dispatch({
    //                     type: POST_TWEET_FAIL,
    //                     payload: error.message,
    //                 })
    //             )
}

// export const postTweetThunkCreator = (payload) => {
//     console.log(payload);
//     return async (dispatch, payload) => {
//         dispatch({type: POST_TWEET_REQUEST})
//         console.log('current state: ', payload);

//         await axios.post('http://domer.tech:9999/tweets/', { ...payload })
//         .then(
//             response => dispatch({
//                 type: POST_TWEET_SUCCESS,
//                 payload: response,
//             }),
//             error => dispatch({
//                 type: POST_TWEET_FAIL,
//                 payload: error.message,
//             })
//         )
//     }
// }
