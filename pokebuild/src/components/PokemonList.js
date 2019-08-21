import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner'
import PokemonCard from './PokemonCard'
import SetsCard from './SetsCard'

import { getData, getSets, getInfo } from '../actions';


const PokemonList = props => {

    useEffect(() => {
        props.getSets()
        //Load in the new data for the pokemon sets here and then display them as a clickable item
    }, [])

    return (
        <div>
            <h1>Pick A Pokemon TCG Set</h1>

            <div>
                <div className="flex_set">
                    {props.sets.slice(0, 1).map(set => (
                        <SetsCard sets={set} getData={props.getData} />
                    ))}
                </div>
                {props.isLoading ?
                    <Loader
                        type="Puff"
                        color="red"
                        height={180}
                        width={180} />
                    : null
                }
            </div>


            <div className="flex">
                {props.pokemon.map(poke => (
                    <div>
                        <PokemonCard pokemon={poke} getInfo={props.getInfo} />
                    </div>
                ))}
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        pokemon: state.pokemon,
        sets: state.sets,

    }
}

export default connect(mapStateToProps, { getData, getSets, getInfo })(PokemonList)