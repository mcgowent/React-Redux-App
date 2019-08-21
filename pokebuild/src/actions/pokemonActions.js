import axios from 'axios';

export const FETCH_POKEMON_DATA_START = 'FETCH_POKEMON_DATA_START';
export const FETCH_POKEMON_DATA_SUCCESS = 'FETCH_POKEMON_DATA_SUCCESS';
export const FETCH_POKEMON_DATA_FAILURE = 'FETCH_POKEMON_DATA_FAILURE';

export const FETCH_POKEMON_INFO_DATA_START = 'FETCH_POKEMON_INFO_DATA_START';
export const FETCH_POKEMON_INFO_DATA_SUCCESS = 'FETCH_POKEMON_INFO_DATA_SUCCESS';
export const FETCH_POKEMON_INFO_DATA_FAILURE = 'FETCH_POKEMON_INFO_DATA_FAILURE';

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_POKEMON_DATA_START });
        axios
            .get('https://api.pokemontcg.io/v1/cards?setCode=base1')
            .then(res => {
                dispatch({ type: FETCH_POKEMON_DATA_SUCCESS, payload: res.data.cards });
            })
            .catch(err => {
                dispatch({ type: FETCH_POKEMON_DATA_FAILURE, payload: err.response });
            });
    };
};

export const getInfo = (props) => {
    return dispatch => {
        console.log('Did the ID get passed?', props);
        dispatch({ type: FETCH_POKEMON_INFO_DATA_START });
        axios
            .get(`https://api.pokemontcg.io/v1/cards/${props}`)
            .then(res => {
                console.log('This should be Info', res);
                dispatch({ type: FETCH_POKEMON_INFO_DATA_SUCCESS, payload: res.data.card });
            })
            .catch(err => {
                dispatch({ type: FETCH_POKEMON_INFO_DATA_FAILURE, payload: err.response });
            });
    };
};