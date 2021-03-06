import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [state, setState] = useState(0);
    const [click, setClick] = useState({
        clicked: false
    })

    const fetchPokemon = () => {
        if(click.clicked === false){
            setClick({clicked: true})
        }
    }
    
    useEffect(() => {
        console.log("Hello")
        if(click.clicked === true){
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=808&offset=0')
                    .then(response => {
                        // console.log(response)
                        setState({
                            pokemon: response.data.results
                        })
                    })
        }
    }, [click.clicked]);
    return (
        <div>
            <button onClick={ () => fetchPokemon()}>Fetch Pokemon</button>
            <div>
                {state.pokemon ? state.pokemon.map((item, index) => {
                    return(<div key={index}>-{item.name}</div>)
                }):null}
            </div>
        </div>
    );
}

export default Pokemon
