import { FiLogIn, FiMail, FiLock, FiUser} from 'react-icons/fi'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Input } from "../../components/Input";
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Container, Form, Background } from "./styles";

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assiste</p>
                <h2>Crie sua conta</h2>
                <Input placeholder="Nome" type="text" icon={FiUser} />
                <Input placeholder="E-mail" type="text" icon={FiMail} />
                <Input placeholder="Senha" type="password" icon={FiLock} />
                <Button title="Cadastrar" />
                <div className='buttonText'>
                <AiOutlineArrowLeft /><ButtonText title="Voltar para login" />
                </div>
            </Form>
            <Background />
        </Container>
    )
}