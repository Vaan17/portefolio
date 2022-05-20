import React, { useRef } from 'react'
// import ScrollJump from '../../styledComponent/ScrollJump'
import { Flex, ImageFrame, Spacing, SubTitle, SuperCard, Title } from '../../styledComponent/styledComponent'
import styled from 'styled-components'
import glpilogo from "../../img/glpilogo.png"
import fusioninventory from "../../img/fusioninventory.png"
import glpiscreen from "../../img/glpiscreen.PNG"
import glpi_inventaire from "../../img/glpi_inventaire.PNG"

const CardContainer = styled.div`
  margin-left: 3em;
`

const GestionnaireGlpi = () => {
  const firstCard = useRef(null)
  const secondCard = useRef(null)
  const thirdCard = useRef(null)

  // const arrayOfRefs = [
  //   {
  //     anchor: firstCard,
  //     title: "Gestionnaire de patrimoine informatique GLPI",
  //   },
  //   {
  //     anchor: secondCard,
  //     title: "Interface d'acceuil de GLPI",
  //   },
  //   {
  //     anchor: thirdCard,
  //     title: "Panneau des ordinateurs inventoriés sur le gestionnaire",
  //   }
  // ]

  return (
    <>  
      <CardContainer>
        <SuperCard className="section1" ref={firstCard}>
          <Title>Gestionnaire de patrimoine informatique GLPI</Title>
          <Flex spaceAround>
            <img src={glpilogo} alt="glpi-img" width="25%" />
            <img
              src={fusioninventory}
              alt="fusioninventory-img"
              width="25%"
            />
          </Flex>
        </SuperCard>

            <Spacing spacing="2em" />

        <SuperCard className="section2" ref={secondCard}>
          <SubTitle>1.1: Interface d'acceuil de GLPI</SubTitle>
          <ImageFrame>
            <img src={glpiscreen} alt="glpiscreen-img" width="100%" />
          </ImageFrame>
        </SuperCard>

            <Spacing spacing="2em" />

        <SuperCard className="section3" ref={thirdCard}>
          <SubTitle>1.2: Panneau des ordinateurs inventoriés sur le gestionnaire</SubTitle>
          <ImageFrame>
            <img src={glpi_inventaire} alt="glpiscreen-img" width="100%" />
          </ImageFrame>
        </SuperCard>
      </CardContainer>
    </>
  )
}

export default GestionnaireGlpi