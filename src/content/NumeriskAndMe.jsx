import React from 'react'
import {BoldText, Flex, PageContent, Spacing, SuperCard, Title} from '../styledComponent/styledComponent'
import styled from 'styled-components'

const MapFlex = styled(Flex)`
    /* =-=-=-=-= Default =-=-=-=-= */
        width: 80%;
    /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`
const SIframe = styled.iframe`
    /* =-=-=-=-= Default =-=-=-=-= */
        border: 0;
    /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`

const NumeriskAndMe = () => {

    return(
        <PageContent>
            <SuperCard>
                <Flex>
                    <MapFlex flexColumn>
                        <Title>Présentation de l'entreprise :</Title>
                        <SIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d671.3559819581556!2d-1.1559088247104978!3d46.148501456785056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480153a9ac4e7ffb%3A0x99beb57145cdbbe6!2zTlVNw4lSSVNL!5e0!3m2!1sfr!2sfr!4v1635877929619!5m2!1sfr!2sfr" width="60%" height="100%" allowfullscreen="" loading="lazy"></SIframe>
                    </MapFlex>
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
                <Flex spaceAround>
                    <Flex flexColumn>
                        <img src="/reactjs.jpg" alt="reactjs-img" height="150px"/>
                            <Spacing spacing="1em" />
                        <div>Bibliothèque JavaScript</div>
                        <div>(Front-end)</div>
                    </Flex>
                    <Flex flexColumn>
                        <img src="/rubyonrails.png" alt="rubyonrails-img" height="150px"/>
                            <Spacing spacing="1em" />
                        <div>Framework Web</div>
                        <div>(Back-end)</div>
                    </Flex>
                    <Flex flexColumn>
                        <img src="/TypeScript.png" alt="rubyonrails-img" height="150px"/>
                            <Spacing spacing="1em" />
                        <div>Framework Web</div>
                        <div>(Front-end)</div>
                    </Flex>
                    <Flex flexColumn>
                        <img src="/vscode.png" alt="VisualStudioCode-img" height="150px"/>
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