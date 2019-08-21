import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const PokemonInfo = (props) => {
    return (
        <div>
            <Link to='/cardList' ><button>{console.log('This Should be pokemon Info', props.pokemonInfo)}Go Back To Cards</button></Link>
            <p>ID: {props.pokemonInfo.id}</p>
            <p>Name: {props.pokemonInfo.name}</p>
            <p>NationDex#: {props.pokemonInfo.nationalPokedexNumber}</p>
            <img className="cards" src={props.pokemonInfo.imageUrl} alt={props.pokemonInfo.name} />
            <p>Type: {props.pokemonInfo.types}</p>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        pokemonInfo: state.pokemonInfo,

    }
}

export default connect(mapStateToProps)(PokemonInfo)