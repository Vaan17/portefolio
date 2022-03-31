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
`;

const TraitementDemandes = () => {
  const firstCard = useRef(null)
  const secondCard = useRef(null)
  const thirdCard = useRef(null)

  return (
    <>
      <SuperCard className="section1" ref={firstCard}>
        <Title>
          Répondre aux incidents et aux demandes d'assistance et d'évolution :​
        </Title>
        <SubTitle>1.1: Informations de contact de l'entreprise</SubTitle>
        <ImageFrame>
          <img
            src="/contact.jpg"
            alt="anciens-indicateurs-numerisk"
            width="100%"
          />
        </ImageFrame>
        <Spacing spacing="2em" />
        <Flex flexColumn>
          <SubTitle>1.2: Procédure d'une demande d'assistance</SubTitle>
          <LargeOl>
            <li>
              Le client prend contact via l'adresse de contact de l'entreprise,
              ou par téléphone.
            </li>
            <br />
            <li>Les différentes demandes sont relevées.</li>
            <br />
            <li>
              Transfert et attribution des demandes à l'équipe de développement.
            </li>
            <br />
            <li>Application de la demande au sein de l'application.</li>
            <br />
            <li>
              Création d'une demande de mise à jour de l'application comportant
              les modifications.
            </li>
          </LargeOl>
        </Flex>
        <Spacing spacing="2em" />
        <SubTitle>
          1.3: Modifications en cours de validation suite à une demande
        </SubTitle>
        <ImageFrame>
          <img src="/gitPR1.PNG" alt="gitPR1" width="100%" />
          <img src="/gitPR2.PNG" alt="gitPR2" width="100%" />
        </ImageFrame>
        <Spacing spacing="2em" />
        <SubTitle>
          1.4: Historique d'une partie des améliorations déjà implémentées
        </SubTitle>
        <ImageFrame>
          <img
            src="/histoPR.PNG"
            alt="Historique des PR Numérisk"
            width="100%"
          />
        </ImageFrame>
      </SuperCard>
    </>
  )
}

export default TraitementDemandes
