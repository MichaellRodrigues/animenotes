import {Container, Form} from './styles'
import { useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'
import {NoteItem} from '../../components/NoteItem'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'
import {Link} from 'react-router-dom'


export function New(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const[ tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote(){
        if(!title){
            return alert("Digite o título da nota")
        }

        if(newTag){
            return alert("Você deixou uma tag no campo para adicionar, mas não salvou!")
        }
        await api.post("/notes", {
            title,
            description,
            tags
        })

        alert("Nota criada com sucesso!")
        navigate('/')
    }

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
                    <Input 
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Input  placeholder="Sua nota (de 0 a 5)"/>
                </div>
                </Section>

                <Textarea 
                    placeholder=" Observações"
                    onChange={e => setDescription(e.target.value)}    
                />

                <Section title="Marcadores">
                    <div className='tags'>
                    {
                            tags.map((tag, index)=> (
                                <NoteItem 
                                    key={String(index)}
                                    value={tag} 
                                    onClick={() =>handleRemoveTag(tag)} 
                                />
                            ))
                        }
                        <NoteItem 
                            isNew 
                            placeholder='Nova tag'
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag} 
                            onClick={handleAddTag}
                        />
                    </div>
                </Section>

                <Section>
                    <div className='button'>
                    <Button title="Excluir Anime"/>
                    <Button title="Salvar Alterações" onClick={handleNewNote} />
                    </div>
                </Section>
            </Form>
         </main>
        </Container>
    )
}