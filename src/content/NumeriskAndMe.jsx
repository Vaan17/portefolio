import React from 'react'
import {BoldText, Flex, ImageFrame, PageContent, Spacing, SuperCard, Title} from '../styledComponent/styledComponent'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home'
import MapIcon from '@mui/icons-material/Map'
import PanToolIcon from '@mui/icons-material/PanTool'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import PeopleIcon from '@mui/icons-material/People'
import DescriptionIcon from '@mui/icons-material/Description'
import numerisklogo from "../img/numerisklogo.png"
import reactjs from "../img/reactjs.jpg"
import rubyonrails from "../img/rubyonrails.png"
import TypeScript from "../img/TypeScript.png"
import vscode from "../img/vscode.png"

const SIframe = styled.iframe`
    /* =-=-=-=-= Default =-=-=-=-= */
    border: 0;
    /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`
const ToolDiv = styled.div`
    /* =-=-=-=-= Default =-=-=-=-= */
    display: flex;
    align-items: end;
    font-size: 22px;
    /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`

const Tools = [
    {
        name: "Accueil",
        icon: <HomeIcon style={{width: "35px", height:"35px"}}/>
    },
    {
        name: "Cartographie",
        icon: <MapIcon style={{width: "35px", height:"35px"}}/>
    },
    {
        name: "Main Courante",
        icon: <PanToolIcon style={{width: "35px", height:"35px"}}/>
    },
    {
        name: "Mes Données",
        icon: <ContactPhoneIcon style={{width: "35px", height:"35px"}}/>
    },
    {
        name: "Coopération",
        icon: <PeopleIcon style={{width: "35px", height:"35px"}}/>
    },
    {
        name: "Documents",
        icon: <DescriptionIcon style={{width: "35px", height:"35px"}}/>
    }
]

const NumeriskAndMe = () => {

    return(
        <PageContent>
            <SuperCard>
                <Title>L'application Numérisk un peu plus en détail :​</Title>
                 
                <Flex justifyCenter gap={10}>
                    <img src={numerisklogo} alt="Logo Numerisk" width="650px" />
                    <Flex flexColumn>
                        {Tools.map((tool, index) => {
                            let isLastTool = false
                            if(index === Tools.length - 1){
                                isLastTool = true
                            }
                            return (
                                <>
                                    <ToolDiv>{tool.icon} &emsp; {tool.name}</ToolDiv>
                                    {!isLastTool && <Spacing spacing="2em" />}
                                </>
                            )
                        })}
                    </Flex>
                </Flex>
            </SuperCard>

            <Spacing spacing="3em" />

            <SuperCard>
                <Title>Présentation de l'entreprise :</Title>
                    <Flex gap={5}>
                        <ImageFrame>
                            <SIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d671.3559819581556!2d-1.1559088247104978!3d46.148501456785056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480153a9ac4e7ffb%3A0x99beb57145cdbbe6!2zTlVNw4lSSVNL!5e0!3m2!1sfr!2sfr!4v1635877929619!5m2!1sfr!2sfr" width="700px" height="100%" allowfullscreen="" loading="lazy"></SIframe>
                        </ImageFrame>
                        <Flex flexColumn>
                            <Flex flexColumn>
                                <BoldText>Co-dirigeants :</BoldText>
                                <div>HEYMES Paul</div>
                                <div>FISCHER Amaury</div>
                            </Flex>

                            <Spacing spacing="2em" />

                            <Flex flexColumn>
                                <BoldText>Salariés :</BoldText>
                                <div>THOMINE Alexis</div>
                                <div>AIMÉ Melvin</div>
                            </Flex>

                            <Spacing spacing="2em" />

                            <Flex flexColumn>
                                <BoldText>Stagiaire :</BoldText>
                                <div>Clément</div>
                            </Flex>

                            <Spacing spacing="2em" />

                            <Flex flexColumn>
                                <BoldText>Coordonnées :</BoldText>
                                <div>1 Rue Alexander Fleming​</div>
                                <div>17000 La Rochelle​</div>
                                <div>Téléphone : 06 33 01 80 38​</div>
                                <div>Site WEB : <a href="https://numerisk.fr" target="_blank" rel="noreferrer">https://numerisk.fr</a></div>
                            </Flex> 
                        </Flex>
                    </Flex>           
            </SuperCard>

                <Spacing spacing="3em" />

            <SuperCard>
                <Title>Mon rôle au sein de l'entreprise </Title>
                    <Spacing spacing="1em" />
                <Flex spaceAround>
                    <Flex flexColumn>
                        <img src={reactjs} alt="reactjs-img" width="280px" height="150px"/>
                            <Spacing spacing="1em" />
                        <div>Bibliothèque JavaScript</div>
                        <div>(Front-end)</div>
                    </Flex>
                    <Flex flexColumn>
                        <img src={rubyonrails} alt="rubyonrails-img" width="280px" height="150px"/>
                            <Spacing spacing="1em" />
                        <div>Framework Web</div>
                        <div>(Back-end)</div>
                    </Flex>
                </Flex>
                    <Spacing spacing="2em" />
                <Flex spaceAround>
                    <Flex flexColumn>
                        <img src={TypeScript} alt="rubyonrails-img" width="280px" height="150px"/>
                            <Spacing spacing="1em" />
                        <div>Framework Web</div>
                        <div>(Langage syntaxique)</div>
                    </Flex>
                    <Flex flexColumn>
                        <img src={vscode} alt="VisualStudioCode-img" width="280px" height="150px"/>
                            <Spacing spacing="1em" />
                        <div>Support de développement</div>
                        <div>(Éditeur de code)</div>
                    </Flex>
                </Flex>
            </SuperCard>
        </PageContent>
    )
}

export default NumeriskAndMe