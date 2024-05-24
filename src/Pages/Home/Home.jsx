import React from 'react'
import Experiencia from '../../Components/Experiencia/Experiencia'
import Habilidades from '../../Components/Habilidades/Habilidades'
import Portafolio from '../../Components/Portafolio/Portafolio'
import Presentacion from '../../Components/Presentacion/Presentacion'
import {GlobalStyle,DivPrincipal,Pantalla} from './StyledHome'

const Home = () => {
  return (
    <>
        <GlobalStyle/>
        <Pantalla>
            <DivPrincipal>
                <Presentacion/>
                <Habilidades/>
                <Portafolio/>
                <Experiencia/>
            </DivPrincipal>
        </Pantalla>
    
    </>
    
  )
}

export default Home