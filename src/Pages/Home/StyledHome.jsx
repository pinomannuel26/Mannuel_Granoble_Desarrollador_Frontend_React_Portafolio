import styled, { createGlobalStyle } from 'styled-components';

 export const GlobalStyle= createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        
    }
       
 
`;
export const Pantalla= styled.div`
    width:100vw;
    display: flex;
    justify-content: center;
    background: linear-gradient(to bottom, #3A3C3F, #A6A8AA);
`;
export const DivPrincipal= styled.div`
    width: 80%;
    margin-top:50px;

`;