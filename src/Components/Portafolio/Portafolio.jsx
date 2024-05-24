import React from 'react'
import {DivprincipalTitle,DivCards,Card,Img,TitleImg} from './StylePortafolio'

const Portafolio = () => {
  return (
    <>
        <DivprincipalTitle>
            <h1>Portafolio</h1>
        </DivprincipalTitle>
        <DivCards>
            <Card>
              <TitleImg href="https://gestacourse.web.app/" target="_blank">
                <Img src="https://res.cloudinary.com/dbktnqag9/image/upload/v1716563417/portafolio/gesta_j25urv.png" alt="pry" />
              </TitleImg>
            </Card>
            <Card>
                <TitleImg href="https://org-alura-react.vercel.app/" target="_blank">
                    <Img src="https://res.cloudinary.com/dbktnqag9/image/upload/v1716564428/portafolio/org_su0kpy.jpg" alt="pry" />
                </TitleImg>
            </Card>
            <Card>
                <TitleImg href="https://whatsap-opal.vercel.app/home.html?id=1" target="_blank">
                    <Img src="https://res.cloudinary.com/dbktnqag9/image/upload/v1716568309/portafolio/bggg_u9xqi8.webp" alt="pry" />
                </TitleImg>
            </Card>
        
            <Card>
                <TitleImg href="https://worshop-1-react.vercel.app/" target="_blank">
                    <Img src="https://res.cloudinary.com/dbktnqag9/image/upload/v1716564182/portafolio/lo_xcruli.jpg" alt="pry" />
                </TitleImg>
            </Card>
            <Card>
                <TitleImg href="https://styled-components-alura-one.vercel.app/" target="_blank">
                    <Img src="https://res.cloudinary.com/dbktnqag9/image/upload/v1716568530/portafolio/alu_eqemut.jpg" alt="pry" />
                </TitleImg>
            </Card>
            <Card>
                <TitleImg href="https://pinomannuel26.github.io/Worshop1_Pokedex/" target="_blank">
                    <Img src="https://res.cloudinary.com/dbktnqag9/image/upload/v1716569006/portafolio/poke_qtpb37.jpg" alt="pry" />
                </TitleImg>
            </Card>
            <Card>
                <TitleImg href="https://pinomannuel26.github.io/Worshp2-MannuelGranoble/#" target="_blank">
                    <Img src="https://res.cloudinary.com/dbktnqag9/image/upload/v1716568708/portafolio/sma_tib6ii.jpg" alt="pry" />
                </TitleImg>
            </Card>
            <Card>
                <TitleImg href="https://encriptador-alura-ochre.vercel.app/" target="_blank">
                    <Img src="https://res.cloudinary.com/dbktnqag9/image/upload/v1716564541/portafolio/encrip_h1z1xx.jpg" alt="pry" />
                </TitleImg>
            </Card>
            <Card>
                <TitleImg href="https://pinomannuel26.github.io/BootCamp-1ERApaginaweb/" target="_blank">
                    <Img src="https://res.cloudinary.com/dbktnqag9/image/upload/v1716568888/portafolio/Imagen_de_WhatsApp_2024-05-24_a_las_11.40.46_c7485fcb_lc786n.jpg" alt="pry" />
                </TitleImg>
            </Card>
            
        </DivCards>
    </>
  )
}

export default Portafolio