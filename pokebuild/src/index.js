import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


import { reducer } from './reducers';

import PokemonList from './components/PokemonList';
import PokemonInfo from './components/PokemonInfo';
import Home from './components/Home';

import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
    return (
        <Router>
            <Switch>
                <div className="App">


                    {/* Setting up Routes */}
                    <Route path="/cardList" component={PokemonList} />
                    <Route exact path="/" component={Home} />
                    <Route path='/pokemonInfo' component={PokemonInfo} />
                </div>
            </Switch>
        </Router>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
