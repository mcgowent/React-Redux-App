import axios from 'axios';

export const FETCH_SETS_DATA_START = 'FETCH_SETS_DATA_START';
export const FETCH_SETS_DATA_SUCCESS = 'FETCH_SETS_DATA_SUCCESS';
export const FETCH_SETS_DATA_FAILURE = 'FETCH_SETS_DATA_FAILURE';

export const getSets = () => {
    return dispatch => {
        dispatch({ type: FETCH_SETS_DATA_START });
        axios
            .get('https://api.pokemontcg.io/v1/sets')
            .then(res => {
                // res.data.data
                console.log(res);
                dispatch({ type: FETCH_SETS_DATA_SUCCESS, payload: res.data.sets });
            })
            .catch(err => {
                dispatch({ type: FETCH_SETS_DATA_FAILURE, payload: err.response });
            });
    };
};
