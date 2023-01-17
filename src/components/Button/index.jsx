/*importando*/
import { Container } from "./styles";

/*Exportando*/
export function Button({title, loading = false, ...rest}) {
    return(
    <Container type='button' disabled={loading} {...rest}>
        {loading ? 'Carregando...':title}
    </Container>)
}