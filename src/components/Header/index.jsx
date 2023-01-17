import { Container, Profile, Brand, Search } from "./styles";
import { Input } from '../../components/Input'
export function Header(){
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
                 <span>Sair</span>  
                </div>
            </Profile>
        </Container>
    )
}