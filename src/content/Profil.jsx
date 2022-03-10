import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {TinyText, BoldText, Title, Spacing, SuperCard, Flex, WidthlessPageContent} from '../styledComponent/styledComponent'

const TopBanner = styled.div`
    /* =-=-=-=-= Default =-=-=-=-= */
        margin: -2em -2em 0 -2em;
        padding: 2em;
        background-color: rgba(0, 97, 126, 0.85);
        color: white
    /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`

const BottomBanner = styled(TopBanner)`
    /* =-=-=-=-= Default =-=-=-=-= */
        margin: 0 -2em -2em -2em;
        height: 1em;
    /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`

const Profil = () => {

    return (
        <WidthlessPageContent>
            <SuperCard>
                <TopBanner>
                    <Flex spaceBetween>
                        <Flex flexColumn>
                            <div>AIMÉ Melvin​</div>
                            <div>19 ans​</div>
                            <div>26 rue d'Yves, 17440 Aytré​</div>
                            <div>Vaan17440@outlook.fr​</div>
                            <div>Permis B​</div>
                        </Flex>
                        <Flex flexColumn alignItemsCenter>
                            <BoldText>Alternant BTS SIO​</BoldText>
                            <TinyText>
                                <div>Brevet de Technicien Supérieur</div>
                                <div>Services Informatiques aux Organisations</div>​
                            </TinyText>
                        </Flex>
                        <Avatar sx={{ width: 150, height: 150 }}>
                            <img src="/melvin-cv.png" alt="melvin-cv" height="200vh" />
                        </Avatar>
                    </Flex>
                </TopBanner>

                <Spacing spacing="3em"/>

                <Flex flexColumn>
                    <Title>Parcours pédagogique et diplômes :​</Title>
                    <BoldText>- Collège Albert Camus​</BoldText>
                    <div>17000, La Rochelle.​</div>
                    <div>Diplôme : Brevet des collèges​</div>
                    ​
                    <BoldText>- Lycée René-Josué Valin​</BoldText>
                    <div>17000, La Rochelle.​</div>
                    <div>Diplôme : Aucun​</div>
                    ​
                    <BoldText>- Lycée Polyvalent Léonce Vieljeux​</BoldText>
                    <div>17000, La Rochelle.​</div>
                    <div>Diplôme : Baccalauréat Général et Technologique​</div>
                </Flex>

                <Spacing spacing="3em"/>

                <Flex flexColumn>
                    <Title>Expériences professionnelles :​</Title>
                    <BoldText>- 2017 TRIBOFILM, Périgny ​</BoldText>
                    <div>Poste occupé : Stagiaire en observation ( 1semaine )</div>​
                    <BoldText>- 2020 NUMERISK, La Rochelle​</BoldText>
                    <div>Poste occupé : Apprenti développeur en informatique ( 1an )</div>
                </Flex>

                <Spacing spacing="3em"/>

                <Flex flexColumn>
                    <Title>Compétences :​</Title>
                    <BoldText>Logiciels maîtrisés :</BoldText>
                    <div>Word, OpenOffice, Visual Studio Code, Wamp, GitHub, Ubuntu.​</div>

                    <Spacing spacing="1em"/>

                    <BoldText>Langages maîtrisés :​</BoldText>
                    <div>HTML : ★★★☆☆ </div>
                    <div>CSS : ★★★☆☆ </div>
                    <div>Java Script : ★☆☆☆☆ ​</div>
                    <div>PHP : ★★★☆☆ </div>
                    <div>ReactJS : ★★★☆☆ ​</div>
                    <div>RubyOnRails : ★☆☆☆☆​ </div>
                </Flex>

                <Spacing spacing="3em"/>

                <BottomBanner />
            </SuperCard >
        </WidthlessPageContent>
    )
}

export default Profil