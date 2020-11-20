import  styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #F8FAFF;
        font-family: 'Lato', sans-serif;
    }
`

export const AppContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`