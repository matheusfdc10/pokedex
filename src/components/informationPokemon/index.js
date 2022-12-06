import { StyledInformationPokemon } from './style'

export default function InformationPokemon({pokemon, setVisible}) {
    return (
        <StyledInformationPokemon>
            <div>
                <button onClick={() => setVisible(false)}>X</button>
                <div>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} width="200px" height="200px"></img>
                </div>
                <h3>Type</h3>
                <ul>
                    {pokemon.types.map((tipo, key) => {
                            return(<li key={key}>{tipo.type.name}</li>)
                        })}
                </ul>
            </div>
        </StyledInformationPokemon>
    )
}