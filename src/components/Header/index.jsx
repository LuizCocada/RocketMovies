import { Container, Profile } from './styles'

import { Input } from '../Input'

import {Link} from 'react-router-dom';


export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder="Pesquisar pelo título" className="seachInput" />
            <Profile>
                <div>
                    <strong>Luiz Ribeiro</strong>
                    <button>Sair</button>
                </div>
                <Link to="profile">
                    <img src="https://github.com/LuizCocada.png" alt="Foto de usuario" />
                </Link>
            </Profile>
        </Container>
    )
}