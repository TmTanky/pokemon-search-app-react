import React, {Component} from 'react'

// CSS
import './pokemon.styles.css'

// Component
import Stat from '../stats/stats'

class Pokemons extends Component {

    constructor() {
        super()

        this.state = {
            queryPokemon: "",
            pokemonName: null,
            pokemonImg: null,
            pokemonStats: []
        }
    }

    getPokemon = async () => {

        // const defaultPokemon = "pikachu" ?? this.state.queryPokemon

        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        const newData = await data.json()
        
        this.setState({ pokemonName: newData.name.toUpperCase() })

        const imgUrl =  newData.forms[0].url
        const dataImg = await fetch(imgUrl)
        const parseImg = await dataImg.json()

        const pokemonImage = parseImg.sprites.front_default
        this.setState({ pokemonImg: pokemonImage})

        this.setState({ pokemonStats: newData.stats})
    
    }

    getQueryPokemon = async () => {

        const searchingPokemon = this.state.queryPokemon

        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchingPokemon}`)
        const newData = await data.json()
        
        this.setState({ pokemonName: newData.name.toUpperCase() })

        const imgUrl =  newData.forms[0].url
        const dataImg = await fetch(imgUrl)
        const parseImg = await dataImg.json()

        const pokemonImage = parseImg.sprites.front_default
        this.setState({ pokemonImg: pokemonImage})

        this.setState({ pokemonStats: newData.stats})

    }

    componentDidMount() {
        this.getPokemon()
    }

    handleSubmit = e => {

        if (!this.state.queryPokemon) {
            e.preventDefault()
            return console.log(`Hello`)
        }

        e.preventDefault()

        console.log(this.state.queryPokemon)
        this.getQueryPokemon()
    }

    handleInput = e => {
        // const { value, name } = e.target

        const input = e.target.value.toLowerCase()
        this.setState({ queryPokemon: input })
    }

    render() {

        return (
            <div className="pokebox">
                <form onSubmit={this.handleSubmit}>
                   <input type="text" name="pokemon" onChange={this.handleInput} value={this.state.queryPokemon} />
                   <button type="submit"> Search </button>
                </form>

                <h1> {this.state.pokemonName} </h1>
                <img src={this.state.pokemonImg} alt="pokemon"/>

                <div className="pokestats">
                    <div className="stats1">
                        {this.state.pokemonStats.slice(0,3).map((item, index) => {
                            return <Stat item={item} key={index}> </Stat>
                        })}
                    </div>

                    <div className="stats2">
                        {this.state.pokemonStats.slice(3,6).map((item, index) => {
                            return <Stat item={item} key={index}> </Stat>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pokemons