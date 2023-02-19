import { Container, Profile, Brand, Search, Logout } from "./styles";
import {useAuth} from "../../hooks/auth"
import { Input } from '../../components/Input'
export function Header(){
    const {signOut} = useAuth()

    return(
        <Container>
            <Brand>
                <h1>AnimeNotes</h1>
            </Brand>     
            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>
           <Profile to="/profile">
                <img src="https://github.com/MichaellRodrigues.png" alt="Foto usuário"/>
                <div>
                 
                 <strong>Michaell Rodrigues</strong>                
                </div>
            </Profile>
            <Logout onClick={signOut}>
                    <span>Sair</span>  
                </Logout>
        </Container>
    )
}