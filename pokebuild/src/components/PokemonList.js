import React from 'react'
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner'
import PokemonCard from './PokemonCard'

import { getData } from '../actions';


const PokemonList = props => {
    return (
        <>
            <h1>Press this button</h1>
            <button onClick={props.getData}>Load Generation One Pokemon</button>
            <div>
                {props.isLoading ?
                    <Loader
                        type="Puff"
                        color="red"
                        height={180}
                        width={180} />
                    : "Not Loading"
                }
            </div>
            <div className="flex">
                {props.pokemon.map(poke => (
                    <PokemonCard pokemon={poke} />
                ))}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, { getData })(PokemonList)