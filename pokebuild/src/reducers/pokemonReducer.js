import {
    FETCH_POKEMON_DATA_START,
    FETCH_POKEMON_DATA_SUCCESS,
    FETCH_POKEMON_DATA_FAILURE,
    FETCH_SETS_DATA_START,
    FETCH_SETS_DATA_SUCCESS,
    FETCH_SETS_DATA_FAILURE,
} from '../actions';

const initialState = {
    sets: [],
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
        case FETCH_POKEMON_DATA_FAILURE:
            console.log('This should be an array', action.payload)
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FETCH_SETS_DATA_START:
            console.log('This should be an array', action.payload)
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_SETS_DATA_SUCCESS:
            console.log('This should be an array', action.payload)
            return {
                ...state,
                isLoading: false,
                sets: action.payload,
                error: ''
            };
        case FETCH_SETS_DATA_FAILURE:
            console.log('This should be an array', action.payload)
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
