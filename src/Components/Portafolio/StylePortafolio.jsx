import styled from 'styled-components';

export const DivprincipalTitle = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    color:white;
    /* background-color: #303135 */
`
export const DivCards = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
   }
`
export const Card = styled.div`
    width:93%;
    height:20rem;
    border-radius:15px;
    margin-top:30px;
    margin-bottom:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
   /* background-color:#3A3C3F ; */
    overflow: hidden;
    transition: transform 0.2s;
    &:hover {
   
        transform: scale(1.1);
    }
    @media screen and (max-width: 768px) {
        width:100%;
        height:auto;
   }

`
export const Img = styled.img`
    
    width:100%;
    height:100%;

`
export const TitleImg = styled.a`
    text-decoration: none;
    color:white;
    font-weight:bold;
    width:100%;
    height:100%;
   
`