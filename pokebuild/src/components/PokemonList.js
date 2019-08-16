import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner'
import PokemonCard from './PokemonCard'
import SetsCard from './SetsCard'

import { getData, getSets } from '../actions';


const PokemonList = props => {

    useEffect(() => {
        props.getSets()
        //Load in the new data for the pokemon sets here and then display them as a clickable item
    }, [])

    return (
        <>
            <h1>Pick A Pokemon TCG Set</h1>

            <div>
                <div className="flex_set">
                    {props.sets.slice(0, 4).map(set => (
                        <a href="#" onClick={props.getData}><SetsCard sets={set} /></a>
                    ))}
                </div>
                {props.isLoading ?
                    <Loader
                        type="Puff"
                        color="red"
                        height={180}
                        width={180} />
                    : <button >Load Generation One Pokemon</button>
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
        pokemon: state.pokemon,
        sets: state.sets
    }
}

export default connect(mapStateToProps, { getData, getSets })(PokemonList)