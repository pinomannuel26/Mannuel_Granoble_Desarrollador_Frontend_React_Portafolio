import React from 'react'
import {DivPrincipal,DivName,DivImg,Name,ImgName,DivTitulo,DivParrafo} from './StylePresentacion'

const Presentacion = () => {
  return (
    <DivPrincipal>
        <DivName>
            <DivTitulo>
                <h1>Hola, <Name> Soy Mannuel Fdo. Granoble Pino </Name></h1>
                <h2>Ingeniero de Sistemas & Desarrollador Web Frontend</h2>
                <h2>Certificado en Metodologías Agiles Scrum</h2>
            </DivTitulo>
            <div>
                <DivParrafo>
                    Con experiencia en el diseño y desarrollo de aplicaciones web que aseguren la experiencia de usuario. Ejecutando diferentes proyectos, haciendo uso de tecnologías como: React, JavaScript, HTML, CSS, StyledComponents, Git, GitHub, Chakra UI, Material UI, Bootstrap, Figma, FireBase, SQL, Sass. Profesional caracterizado por su facilidad de adaptación, resolución de problemas y trabajo en equipo, apasionado por la tecnología, interesado en oportunidades laborales que permitan el desarrollo profesional aportando significativamente en la implementación de soluciones tecnológicas innovadoras y que se ajusten a necesidades puntuales.
                </DivParrafo>
            </div>
        </DivName>
        <DivImg>
            <ImgName src="https://res.cloudinary.com/dbktnqag9/image/upload/v1716525402/portafolio/mfgp-removebg-preview-removebg-preview_ywoqw6.png" alt="myPhoto" />
        </DivImg>
    </DivPrincipal>
  )
}

export default Presentacion