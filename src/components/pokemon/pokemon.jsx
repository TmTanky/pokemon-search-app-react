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
            pokemonStats: [],
            errors: null
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

        try {
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
            this.setState({ errors: null})
        } catch (err) {
            this.setState({ errors: "Not a pokemon." })
        }

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
        this.setState({queryPokemon: ""})
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
                    
                    { this.state.errors ? <h2 className="errorheading"> Not a Pokemon. </h2> : <h1> </h1> }

                   <input type="text" name="pokemon" onChange={this.handleInput} value={this.state.queryPokemon} />
                   <button type="submit"> Search </button>
                </form>

            <div className="pokeinfo">
                <h1> {this.state.pokemonName} </h1>
                <img src={this.state.pokemonImg} alt="pokemon"/>

                <div className="statsheading">
                    <h1> Stats </h1>
                </div>

                <div className="pokestats">
                    <div className="stats1">
                        {this.state.pokemonStats.slice(0,3).map((item, index) => {
                            // console.log(item.stat.name)
                            return <Stat item={item} key={index} > {item.stat.name} </Stat>
                        })}
                    </div>

                    <div className="stats2">
                        {this.state.pokemonStats.slice(3,6).map((item, index) => {
                            return <Stat item={item} key={index}> </Stat>
                        })}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Pokemons