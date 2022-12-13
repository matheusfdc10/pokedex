import { StyledHeader } from './style'
import logo from '../../assets/logo.png'

export default function Header({ search, setSearch}) {

    return (
        <StyledHeader>
            <div>
                <img src={logo} />
            </div>

            <input type="text" placeholder="Buscar"
                onChange={e => setSearch(e.target.value)}
                value={search}
            />

        </StyledHeader>
    )
}