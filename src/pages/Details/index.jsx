/* Importar o styles.css*/
import {Container, Links, Content} from "./styles.js"
import {Button} from '../../components/Button'
import {Header} from '../../components/Header'
import { Section } from "../../components/Section"
import {Tag} from "../../components/Tags"
/* Função para implementação de conteúdo*/
export function Details(){
  
  return(
    <Container>
    <Header/>
    
    <main>
      <Content>
      <Button title="Voltar"/>
      <h1>Introdução ao React</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim tenetur quo maxime eum? Tempore suscipit in praesentium nihil iure, vel reprehenderit commodi sed deserunt repellendus blanditiis ab quia iusto.. Quas enim tenetur quo maxime eum? Tempore suscipit in praesentium nihil iure, vel reprehenderit commodi sed deserunt repellendus blanditiis ab quia iusto</p>

      <Section title="Marcadores">
        <Tag title="Aventura"/>
        <Tag title="Shougun"/>
      </Section>

      <Button title="Voltar"/>
      </Content>
    </main>
    </Container>
  )
}