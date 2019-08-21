import React from 'react'
import { Link } from 'react-router-dom';



class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome To the Pokemon Deck Builder</h1>
                <h3>LOOK AT ME IM UPDATED</h3>
                <h3>Coming Soon!</h3>
                <p>Soon you will be able to pick from a few different Trading Card Games and view your decks for each all in one place!</p>

                <button><Link to="/cardList">Click Here to Begin</Link></button>

            </div>
        )
    }
}

export default Home