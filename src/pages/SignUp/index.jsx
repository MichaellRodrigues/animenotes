import {Container, Form, Background } from './styles'
import { FiLogIn, FiMail, FiLock, FiUser} from 'react-icons/fi'
import {Button} from '../../components/Button'
import {Link} from 'react-router-dom'
import {Input} from '../../components/Input'


export function SignUp(){
    return(
        <Container>
            <Form>
                <h1>Anime Notes</h1>
                <p> Aplicação para acompanhar tudo que assistir..</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />
                <Button title="Cadastrar"/>
                <Link to="/"> Voltar para o login</Link>
            </Form>
            <Background/>
        </Container>
    )
}