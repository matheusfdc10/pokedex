import { StyledHeader } from './style'
import logo from '../../assets/logo.png'
import axios from 'axios'

export default function Header({ search, setSearch, setGetSearch }) {
    

    function buscarPokemon(value) {
        setSearch(value.target.value.toLocaleLowerCase())

        const url = `https://pokeapi.co/api/v2/pokemon/${value.target.value.toLocaleLowerCase()}`

        axios.get(url)
            .then(res => Array(res))
            .then(res => setGetSearch(res))
            .catch(() => null)
    }

    return (
        <StyledHeader>
            <div>
                <img src={logo} />
            </div>

            <input type="text" placeholder="Buscar" maxLength="40"
                onChange={e => buscarPokemon(e)}
                value={search}
            />

        </StyledHeader>
    )
}