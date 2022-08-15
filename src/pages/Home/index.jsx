import { FiPlus } from 'react-icons/fi'
import { Header } from "../../components/Header";
import { Movie } from '../../components/Movie';
import { Container } from "./styles"

export function Home() {
    return (
        <Container>
            <Header />
            <div className='mainTitle'>
                <h1>Meus filmes</h1>
                <a href="#">
                    <FiPlus />
                    Adicionar filme
                </a>
            </div>
            <div className="movieTags">
                <Movie data={{
                    title: "Interestellar", tags: [
                        { id: '1', name: 'Ficção Cientifica' },
                        { id: '2', name: 'Drama' },
                        { id: '3', name: 'Familia' }
                    ]
                }} />

                <Movie data={{
                    title: "Interestellar", tags: [
                        { id: '1', name: 'Ficção Cientifica' },
                        { id: '2', name: 'Drama' },
                        { id: '3', name: 'Familia' }
                    ]
                }} />

                <Movie data={{
                    title: "Interestellar", tags: [
                        { id: '1', name: 'Ficção Cientifica' },
                        { id: '2', name: 'Drama' },
                        { id: '3', name: 'Familia' }
                    ]
                }} />

                <Movie data={{
                    title: "Interestellar", tags: [
                        { id: '1', name: 'Ficção Cientifica' },
                        { id: '2', name: 'Drama' },
                        { id: '3', name: 'Familia' }
                    ]
                }} />
            </div>
        </Container>
    );
}
