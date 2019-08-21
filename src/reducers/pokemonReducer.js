import {
    FETCH_POKEMON_DATA_START,
    FETCH_POKEMON_DATA_SUCCESS,
    FETCH_POKEMON_DATA_FAILURE,
    FETCH_POKEMON_INFO_DATA_START,
    FETCH_POKEMON_INFO_DATA_SUCCESS,
    FETCH_POKEMON_INFO_DATA_FAILURE,
    FETCH_SETS_DATA_START,
    FETCH_SETS_DATA_SUCCESS,
    FETCH_SETS_DATA_FAILURE,
} from '../actions';

const initialState = {
    sets: [],
    pokemon: [],
    pokemonInfo: {},
    display: false,
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        //Grabs the list of Pokemon
        case FETCH_POKEMON_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_POKEMON_DATA_SUCCESS:
            console.log('PokemonData', action.payload)
            return {
                ...state,
                display: true,
                isLoading: false,
                pokemon: action.payload,
                error: ''
            };
        case FETCH_POKEMON_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        //Grabs the Individual Pokemon Info
        case FETCH_POKEMON_INFO_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_POKEMON_INFO_DATA_SUCCESS:
            console.log('PokemonInfo', action.payload)
            return {
                ...state,
                display: true,
                isLoading: false,
                pokemonInfo: action.payload,
                error: ''
            };
        case FETCH_POKEMON_INFO_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        //Grabs the Pokemon Set Info
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
