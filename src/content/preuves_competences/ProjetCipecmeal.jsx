import React, { useRef } from "react"
import {
  Flex,
  ImageFrame,
  Spacing,
  SubTitle,
  SuperCard,
  Title,
} from "../../styledComponent/styledComponent"
import CipecmealStudentSign_in from '../../img/CipecmealStudentSign_in.png'
import CipecmealEntrepriseSign_in from '../../img/CipecmealEntrepriseSign_in.png'
import CipecmealLogin from '../../img/CipecmealLogin.png'
import cipecmeal_gestionnaire from '../../img/cipecmeal_gestionnaire.png'
import CipecmealMyAccount from '../../img/CipecmealMyAccount.png'

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
                      src={CipecmealStudentSign_in}
                      alt="Inscription Etudiant"
                      width="100%"
                    />
                  </ImageFrame>
                  <ImageFrame>
                    <img
                      src={CipecmealEntrepriseSign_in}
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
                      src={CipecmealLogin}
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
                      src={cipecmeal_gestionnaire}
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
                      src={CipecmealMyAccount}
                      alt="Mon compte utilisateur"
                      width="100%"
                    />
                  </ImageFrame>
            </SuperCard>
        </>
    )
}

export default ProjetCipecmeal
