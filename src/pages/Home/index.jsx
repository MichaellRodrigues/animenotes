import {Container, Content, NewNote} from './styles'
import {Header} from '../../components/Header'
import {FiPlus} from 'react-icons/fi'
import {Section} from '../../components/Section'
import {Note} from '../../components/Note'


export function Home(){
    return(
        <Container>
             <Header/>

            <Content>
                <div>
                    <h1>Meus Animes</h1>
                    
                    <NewNote to="/new">
                        
                        <FiPlus/>Criar Nota
                    </NewNote>
                </div>
                <Section title="">
                
                    <Note data={{
                        title: "Anime",
                        text:"Lorem ipsum dolor sit amet, consectetur", 
                        tags:[
                            {id:'1', name:'Aventura'},
                            {id:'2', name:'Ação'}
                        ]
                    }}
                    />    
                </Section>
                
            </Content>

            
        </Container>
    )
}