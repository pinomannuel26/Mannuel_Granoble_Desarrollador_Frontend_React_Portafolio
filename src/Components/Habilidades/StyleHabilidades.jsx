import styled from 'styled-components';

export const DivprincipalTitle = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    color:white;
    @media screen and (max-width: 768px) {
        margin-top: 20px;
        
   }
   
`
export const DivCards = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
   }
`
export const Card = styled.div`
    width:90%;
    height:10rem;
    border-radius:15px;
    margin-top:30px;
    margin-bottom:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
   background-color:#3A3C3F ;
    overflow: hidden;
    &:hover {
        /* background-color: #0056b3; */
        background-color: #c2903e;
    }

`
export const Img = styled.img`
    
    width:80px;
    height:100px;

`
export const TitleImg = styled.h3`
    color:white;
    margin-top:10px;
`
