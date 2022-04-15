import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {TinyText, BoldText, Title, Spacing, SuperCard, Flex, PageContent} from '../styledComponent/styledComponent'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import StarIcon from '@mui/icons-material/Star'
import StarOutlineIcon from '@mui/icons-material/StarOutline'

const Star = styled(StarIcon)`
    font-size: 16px !important;
`
const StarHalf = styled(StarHalfIcon)`
    font-size: 16px !important; 
`
const StarEmpty= styled(StarOutlineIcon)`
    font-size: 16px !important;
`
const StyledImg = styled.img`
    transition: all 0.2s;
    &:hover {
        transform: scale(1.1)
    }
`
const TopBanner = styled.div`
    /* =-=-=-=-= Default =-=-=-=-= */
    margin: -2em -2em 0 -2em;
    padding: 2em;
    background-color: rgba(0, 97, 126, 0.85);
    color: white;
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
        <PageContent widthless>
            <SuperCard>
                <Flex flexColumn gap={3}>
                    <TopBanner>
                        <Flex spaceBetween alignItemsCenter>
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
                                <StyledImg src="/melvin-cv.png" alt="melvin-cv" height="200vh" />
                            </Avatar>
                        </Flex>
                    </TopBanner>

                    <Flex flexColumn>
                        <Title>Parcours pédagogique et diplômes :​</Title>
                        <BoldText>Diplôme : Baccalauréat Général et Technologique​</BoldText>
                        <div>- Lycée Polyvalent Léonce Vieljeux​</div>
                        <div>17000, La Rochelle.​</div>
                        ​
                        <BoldText>Diplôme : Brevet des collèges​</BoldText>
                        <div>- Collège Albert Camus​</div>
                        <div>17000, La Rochelle.​</div>
                        ​
                    </Flex>

                    <Flex flexColumn>
                        <Title>Expériences professionnelles :​</Title>
                        <Flex flexColumn gap={1}>
                            <div>
                                <BoldText>Poste occupé : Apprenti développeur en informatique ( 1an )</BoldText>
                                <div>- 2020 NUMERISK, La Rochelle​</div>
                            </div>
                            <div>
                                <BoldText>Poste occupé : Stagiaire en observation ( 1semaine )</BoldText>
                                <div>- 2017 TRIBOFILM, Périgny​</div>
                            </div>
                        </Flex>
                    </Flex>

                    <Flex flexColumn gap={1}>
                        <Flex flexColumn gap={1}>
                            <div>
                                <Title>Compétences :​</Title>
                                <BoldText>Logiciels maîtrisés :</BoldText>
                            </div>
                            <Flex gap={3}>
                                <Flex flexColumn gap={.5}>
                                    <li>Word</li>
                                    <li>Visual Studio Code</li>
                                </Flex>
                                <Flex flexColumn gap={.5}>
                                    <li>GitHub</li>
                                    <li>Ubuntu Terminal</li>
                                </Flex>
                                <Flex flexColumn gap={.5}>
                                    <li>Wamp</li>
                                    <li>PhpMyAdmin</li>
                                </Flex>
                            </Flex>
                        </Flex>

                        <Flex flexColumn gap={1}>
                            <BoldText>Langages maîtrisés :​</BoldText>
                            <Flex gap={3}>
                                <Flex flexColumn gap={.5}>
                                    <li>HTML : <Star /><Star /><Star /><Star /><StarEmpty /></li>
                                    <li>PHP :  <Star /><Star /><Star /><StarEmpty /><StarEmpty /></li>
                                    <li>Android Kotlin :  <Star /><Star /><StarEmpty /><StarEmpty /><StarEmpty /></li>
                                </Flex>
                                <Flex flexColumn gap={.5}>
                                    <li>CSS : <Star /><Star /><Star /><Star /><StarEmpty /></li>
                                    <li>ReactJS :  <Star /><Star /><Star /><Star /><StarEmpty /></li>
                                </Flex>
                                <Flex flexColumn gap={.5}>
                                    <li>Java Script :  <Star /><Star /><Star /><Star /><StarEmpty /></li>
                                    <li>RubyOnRails :  <Star /><Star /><Star /><StarHalf /><StarEmpty />​</li>
                                </Flex>
                            </Flex>
                        </Flex>

                        <Flex flexColumn gap={1}>
                            <BoldText>Langues :</BoldText>
                            <li>Anglais : Niveau A2</li>
                        </Flex>
                    </Flex>

                    <BottomBanner />
                </Flex>
            </SuperCard >
        </PageContent>
    )
}

export default Profil