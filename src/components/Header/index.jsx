import {BsStarFill,BsStarHalf} from 'react-icons/bs'
import { Container, Profile } from './styles'

export function Header() {
    return (
        <Container>
            <Profile>
                <div>
                    <strong>Willian Amaro Gomes</strong>
                    <a href="#">sair</a>
                </div>
                <img src="https://github.com/williangomesdev.png" alt="foto do perfil" />
            </Profile>
        </Container>
    )
}