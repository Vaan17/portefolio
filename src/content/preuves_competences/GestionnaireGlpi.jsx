import React, { useRef } from 'react'
import { Flex, ImageFrame, Spacing, SubTitle, SuperCard, Title } from '../../styledComponent/styledComponent'

const GestionnaireGlpi = () => {
    const firstCard = useRef(null)
    const secondCard = useRef(null)
    const thirdCard = useRef(null)

    return (
        <>
            <SuperCard className="section1" ref={firstCard}>
              <Title>Gestionnaire de patrimoine informatique GLPI</Title>
              <Flex spaceAround>
                <img src="/glpilogo.png" alt="glpi-img" width="25%" />
                <img
                  src="/fusioninventory.png"
                  alt="fusioninventory-img"
                  width="25%"
                />
              </Flex>
            </SuperCard>

                <Spacing spacing="2em" />

            <SuperCard className="section2" ref={secondCard}>
              <SubTitle>1.1: Interface d'acceuil de GLPI</SubTitle>
              <ImageFrame>
                <img src="/glpiscreen.PNG" alt="glpiscreen-img" width="100%" />
              </ImageFrame>
            </SuperCard>

                <Spacing spacing="2em" />

            <SuperCard className="section3" ref={thirdCard}>
              <SubTitle>1.2: Panneau des ordinateurs inventoriés sur le gestionnaire</SubTitle>
              <ImageFrame>
                <img src="/glpi_inventaire.PNG" alt="glpiscreen-img" width="100%" />
              </ImageFrame>
            </SuperCard>
        </>
    )
}

export default GestionnaireGlpi