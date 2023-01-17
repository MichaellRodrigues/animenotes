import {Container, Form} from './styles'

import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'
import {NoteItem} from '../../components/NoteItem'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'
import {Link} from 'react-router-dom'


export function New(){
    return(
        <Container>
         <Header/>

         <main>
            <Form>
                <header>
                    <h1>Novo Anime</h1>
                    <Link to="/">Voltar</Link>
                </header>
                <Section>
                <div className="button">
                    <Input  placeholder="Título"/>
                    <Input  placeholder="Sua nota (de 0 a 5)"/>
                </div>
                </Section>

                <Textarea placeholder=" Observações"/>

                <Section title="Marcadores">
                    <div className='tags'>
                        <NoteItem value="Aventura" />
                        <NoteItem isNew placeholder='Nova tag'/>
                    </div>
                </Section>

                <Section>
                    <div className='button'>
                    <Button title="Excluir Anime"/>
                    <Button title="Salvar Alterações"/>
                    </div>
                </Section>
            </Form>
         </main>
        </Container>
    )
}