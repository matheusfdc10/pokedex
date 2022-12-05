import { useEffect, useState } from 'react'
import { StyleContainer } from './style'
import axios from 'axios'

export default function Container({ search }) {
    const [ pokemons, setPokemons ] = useState([])
    const [ prox, setProx ] = useState(0)

    useEffect(() => {
        getPokemons(prox)
    }, [])

    function proximo(set) {
        set += 24
        setProx(set)
        getPokemons(set)
    } 

    function voltar(set) {
        if (set == 0) return
        set -= 24
        setProx(set)
        getPokemons(set)
    } 
    
    function getPokemons(set) {
        var urlPokemons = [];
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=24&offset=${set}`)
            .then(res => res.data.results)
            .then(res => res.map(pokemon => {
                urlPokemons.push(pokemon.url)
            })) 
            .then(() =>
                axios.all(urlPokemons.map(pokemon => axios.get(pokemon)))
                    .then(res => setPokemons(res))
                    .catch(err => console.log(err))
            )
            .catch(err => console.log(err))
    }
 
    return ( 
        <StyleContainer> 
            <section>
                {pokemons.filter(pokemon => {
                    const nameNormalized = pokemon.data.name.toLowerCase()
                    const searchValueNormalized = search.toLowerCase()        
                    return nameNormalized.includes(searchValueNormalized)
                }).map((pokemon)=> {
                    return( 
                    <div key={pokemon.data.id}>
                        <a> 
                            <img src={pokemon.data.sprites.front_default} width="150px" height="150px"></img>
                            <span>{pokemon.data.name}</span>
                        </a>
                    </div>)
                })}
            </section>
            
            <div>
                <button onClick={() => voltar(prox)}>Voltar</button>
                <button onClick={() => proximo(prox)}>Próximo</button>
            </div>
        </StyleContainer>
    )
}