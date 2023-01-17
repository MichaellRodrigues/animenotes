import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display:grid;
    grid-template-rows: 105px auto;
    grid-template-areas:"header" "content";

    > main{
        grid-area: content;
        overflow-y: auto;
    }

    .tags{
        display:flex;
        justify-content:flex-start;
        flex-wrap:wrap;
    }
    .button{
        display:flex;
        justify-content:flex-start;
        flex-wrap:nowrap;
        gap:40px;
        background:none !important;
    }
    button:hover{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.ORANGE};
        border:1px dashed ${({theme}) => theme.COLORS.BACKGROUND_900};
    }

`

export const Form = styled.form`
    max-width: 1137px;
    margin:38px auto;

    >header{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom:36px;

        a{
            font-size:20px;
            color: ${({theme}) => theme.COLORS.GRAY_100}
        }
    }

    > Section div{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        margin:5px;
        padding:2px;
        border-radius:20px;
        gap:5px;
    }
    

`
