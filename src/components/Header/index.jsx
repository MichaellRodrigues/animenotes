import { Container, Profile, Brand, Search, Logout } from "./styles";
import {useAuth} from "../../hooks/auth"
import { Input } from '../../components/Input'
import {api} from '../../services/api'

export function Header(){
    const {signOut} = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return(
        <Container>
            <Brand>
                <h1>AnimeNotes</h1>
            </Brand>     
            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>
           <Profile to="/profile">
                <img src={avatarUrl} alt={user.name}/>
                <div>
                 
                 <strong>{user.name}</strong>                
                </div>
            </Profile>
            <Logout onClick={signOut}>
                    <span>Sair</span>  
                </Logout>
        </Container>
    )
}