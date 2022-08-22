import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    } 
    body{
        background: ${(props) => props.theme['background']};
        padding: 0 10rem;
    }
    
    body,input, textarea, button {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1rem;
    } 
`;