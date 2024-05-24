import styled from 'styled-components';

export const DivPrincipal = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    align-items:center;
    @media screen and (max-width: 768px) {
       
       flex-direction: column-reverse;
    }
`
export const DivName = styled.div`
    width:70%;
    color:white;
    @media screen and (max-width: 768px) {
       
        width:100%;
    }
`
export const DivTitulo = styled.div`
    font-size:20px;
    text-align:center;
    margin-bottom:20px;
    @media screen and (max-width: 768px) {
        font-size:15px;
        
   }
`
export const DivParrafo = styled.div`
    width:100%;
    text-align:justify;
    font-size:18px;
    @media screen and (max-width: 768px) {
        font-size:15px;
        
   }
`
export const Name = styled.span`
    color:#edb76c;
    
`
export const DivImg = styled.div`
    width:30%;

`
export const ImgName = styled.img`
    width:90%;
`