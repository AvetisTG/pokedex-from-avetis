import React, { Component } from 'react';
import { connect } from "react-redux";
import PokemonTypeSelect from "./PokemonTypeSelect";
import Pokemons from "./Pokemons";
import { fetchPokemons, fetchTypes } from "../actions";
import '../index.css'

class App extends Component {    
    componentWillMount() {       
           this.props.fetchPokemons();
           this.props.fetchTypes();          
    }
            
    render() {             
        return(
            <div>                                
                <PokemonTypeSelect />                
                <Pokemons />
            </div>
        );
    }
}

export default connect(
    null,
    { fetchPokemons, fetchTypes }
)(App);