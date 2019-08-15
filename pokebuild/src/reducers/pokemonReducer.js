import {
    FETCH_POKEMON_DATA_START,
    FETCH_POKEMON_DATA_SUCCESS,
    FETCH_POKEMON_DATA_FAILURE
} from '../actions';

const initialState = {
    pokemon: [],
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_POKEMON_DATA_SUCCESS:
            console.log('This should be an array', action.payload)
            return {
                ...state,
                isLoading: false,
                pokemon: action.payload,
                error: ''
            };
        default:
            return state;
    }
};
