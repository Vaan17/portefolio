import React, { useRef } from "react"
import {
  Flex,
  ImageFrame,
  Spacing,
  SubTitle,
  SuperCard,
  Title,
} from "../../styledComponent/styledComponent"
import styled from "styled-components"

const LargeOl = styled.ol`
  /* =-=-=-=-= Default =-=-=-=-= */
  margin: 0;
  padding-top: 1em;
  font-size: 20px !important;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`
const PanelBackground = styled(Flex)`
  /* =-=-=-=-= Default =-=-=-=-= */
    background-color: #d5d5d5;
    border-radius: 0 5% 5% 0;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`

const GestionnairesProjets = () => {
  const firstCard = useRef(null)
  const secondCard = useRef(null)
  const thirdCard = useRef(null)
  const fourthCard = useRef(null)

    return (
        <>
            <SuperCard className="section1" ref={firstCard}>
              <Title>Utilisation d'outils de gestion de projets</Title>
              <Flex alignItemsCenter spaceAround>
                <img
                  src="/trello_logo.PNG"
                  alt="trello_logo"
                  width="25%"
                  height="25%"
                />
                <img
                  src="/notion.png"
                  alt="notion-img"
                  width="25%"
                  height="30%"
                />
                <img
                  src="/AzureDevops.png"
                  alt="AzureDevops-img"
                  width="20%"
                  height="30%"
                />
              </Flex>
            </SuperCard>

                <Spacing spacing="2em" />

            <SuperCard className="section2" ref={secondCard}>
                <SubTitle>1.2: Interface du gestionnaire de projet Trello</SubTitle>
                <Flex>
                  <ImageFrame>
                    <img
                      src="/trelloscreen.PNG"
                      alt="trello_screen"
                      width="100%"
                    />
                  </ImageFrame>
                  <PanelBackground flexColumn>
                    <LargeOl>
                      <li>Entretien avec le(s) client(s)</li><br/>
                      <li>Mise en place d'un cahier des charges</li><br/>
                      <li>Répartition du cahier des charges</li>
                    </LargeOl>
                  </PanelBackground>
                </Flex>
            </SuperCard>

                <Spacing spacing="2em" />

            <SuperCard className="section3" ref={thirdCard}>
                <SubTitle>1.2: Interface du gestionnaire de projet Notion</SubTitle>
                <Flex>
                  <ImageFrame>
                    <img
                      src="/screen_notion.PNG"
                      alt="notion_screen"
                      width="100%"
                    />
                  </ImageFrame>
                </Flex>
            </SuperCard>

                <Spacing spacing="2em" />

            <SuperCard className="section4" ref={fourthCard}>
                <SubTitle>1.3: Interface du gestionnaire de projet Azure Devops</SubTitle>
                <Flex>
                  <ImageFrame>
                    <img
                      src="/azure_screen.PNG"
                      alt="notion-screen"
                      width="100%"
                    />
                  </ImageFrame>
                </Flex>
            </SuperCard>
        </>
    )
}

export default GestionnairesProjets
