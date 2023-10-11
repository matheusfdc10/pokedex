import { useEffect, useState } from 'react'
import { StyleContainer } from './style'
import InformationPokemon from '../informationPokemon'
import axios from 'axios'

export default function Container({ search, getSearch }) {
    const [ visible, setVisible ] = useState(false)
    const [ pokemons, setPokemons ] = useState(null)
    const [ pokemon, setPokemon ] = useState({})
    const [ pagina, setPagina ] = useState(0)
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        getPokemons(pagina)
    }, [])

    function proximo(set) {
        set += 24
        setPagina(set)
        getPokemons(set)
    } 

    function voltar(set) {
        if (set == 0) return
        set -= 24
        setPagina(set)
        getPokemons(set)
    } 
    
    function getPokemons(set) {
        setIsLoading(true)
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
            .finally(() => setIsLoading(false))
    }

    function infoPokemon(dadosPokemon) {
        setVisible(true)
        setPokemon(dadosPokemon)
    }

    const getPokemon = !!getSearch[0]?.data.name ? getSearch : pokemons
    
    return (
        <>
        <StyleContainer>
            <section>
                {pokemons && !isLoading ? (
                    <>
                    {getPokemon.filter(pokemon => {
                        const name = pokemon.data.name.toLowerCase()
                        const id = pokemon.data.id
                        return name.includes(search) || id == search
                    }).map((pokemon)=> {
                        return( 
                        <div key={pokemon.data.id} 
                            onClick={() => infoPokemon(pokemon.data)}>
    
                            
                                <span className="id">#{pokemon.data.id}</span>
                                <img src={pokemon.data.sprites.other.home.front_default}></img>
                                <span className="name">{pokemon.data.name}</span>
                            
                        </div>)
                    })}
                    </>
                ) : (
                    <span>
                        Carregando...
                    </span>
                )}
            </section>

            <div className="buttons">
                <button onClick={() => voltar(pagina)} disabled={isLoading}>Voltar</button>
                <button onClick={() => proximo(pagina)} disabled={isLoading} >Próximo</button>
            </div>
        </StyleContainer>
        
        {visible &&
            <InformationPokemon pokemon={pokemon} setVisible={setVisible}/> 
        }
        </>
    )
}