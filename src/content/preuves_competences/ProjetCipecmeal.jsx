import React, { useRef } from "react"
import {
  Flex,
  ImageFrame,
  Spacing,
  StyledButton,
  SubTitle,
  SuperCard,
  Title,
} from "../../styledComponent/styledComponent"

const ProjetCipecmeal = () => {
  const firstCard = useRef(null)
  const secondCard = useRef(null)
  const thirdCard = useRef(null)
  const fourthCard = useRef(null)

    return (
        <>
            <SuperCard className="section1" ref={firstCard}>
                <Title>Mise en service de l'application web Cipecmeal</Title>
                <Flex flexColumn gap={2}>
                  <SubTitle>1.1: Interfaces d'inscription de l'application Cipecmeal</SubTitle>
                  <ImageFrame>
                    <img
                      src="/CipecmealStudentSign_in.png"
                      alt="Inscription Etudiant"
                      width="100%"
                    />
                  </ImageFrame>
                  <ImageFrame>
                    <img
                      src="/CipecmealEntrepriseSign_in.png"
                      alt="Inscription Entreprise"
                      width="100%"
                    />
                  </ImageFrame>
                </Flex>
            </SuperCard>

                <Spacing spacing="2em" />

            <SuperCard className="section2" ref={secondCard}>
                  <SubTitle>1.2: Interface de connexion de l'application Cipecmeal</SubTitle>
                  <ImageFrame>
                    <img
                      src="/CipecmealLogin.png"
                      alt="Login Utilisateur"
                      width="100%"
                    />
                  </ImageFrame>
            </SuperCard>

                <Spacing spacing="2em" />

            <SuperCard className="section3" ref={thirdCard}>
                  <SubTitle>1.3: Gestionnaire des comptes enregistrés (admin seulement)</SubTitle>
                  <ImageFrame>
                    <img
                      src="/cipecmeal_gestionnaire.png"
                      alt="Login Utilisateur"
                      width="100%"
                    />
                  </ImageFrame>
            </SuperCard>

                <Spacing spacing="2em" />

            <SuperCard className="section4" ref={fourthCard}>
                  <SubTitle>1.4: Interface "Mon Compte" de l'application Cipecmeal</SubTitle>
                  <ImageFrame>
                    <img
                      src="/CipecmealMyAccount.png"
                      alt="Mon compte utilisateur"
                      width="100%"
                    />
                  </ImageFrame>
            </SuperCard>
        </>
    )
}

export default ProjetCipecmeal
