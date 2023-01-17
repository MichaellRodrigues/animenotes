import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`

export const Content = styled.div`
    padding: 0 64px 64px;
    overflow-y:auto;

    > div{
        display: flex;
        justify-content: space-between;
        margin-top:40px;
    }
`
export const NewNote= styled(Link)`
    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    width: 200px;
    height:48px;
    border-radius:8px;

    display: flex;
    align-items:center;
    justify-content:center;

    svg{
        margin:8px;
    }
`
