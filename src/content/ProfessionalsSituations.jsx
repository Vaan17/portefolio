import { Grid } from '@mui/material'
import React, { useRef } from 'react'
import styled from 'styled-components'
import ScrollJump from '../styledComponent/ScrollJump'
import { Flex, ImageFrame, PageContent, Spacing, SuperCard, Title } from '../styledComponent/styledComponent'

const LargeOl = styled.ol`
    /* =-=-=-=-= Default =-=-=-=-= */
        margin: 0;
        padding-top: 1em;
        font-size: 28px !important;
        background-color: #d5d5d5;
        border-radius: 0 5% 5% 0;
    /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`

const ProfessionalsSituations = () => {
    const overviewTable = useRef(null)
    const firstSituation = useRef(null)
    const secondSituation = useRef(null)
    const thirdSituation = useRef(null)
    const fourthSituation = useRef(null)
    const fifthSituation = useRef(null)
    const sixthfirstSituation = useRef(null)

    const arrayOfRefs = [
        {
            anchor: overviewTable,
            title: "Tableau de sythèse"
        },
        {
            anchor: firstSituation,
            title: "Gérer le patrimoine informatique"
        },
        {
            anchor: secondSituation,
            title: "Répondre aux incidents et aux demandes d'assistance et d'évolution"
        },
        {
            anchor: thirdSituation,
            title: "Développer la présence en ligne de l'organisation"
        },
        {
            anchor: fourthSituation,
            title: "Travailler en mode projet"
        },
        {
            anchor: fifthSituation,
            title: "Mettre à disposition des utilisateur un service informatique"
        },
        {
            anchor: sixthfirstSituation,
            title: "Organiser son développement professionnel"
        },
    ]

    return (
        <PageContent>
            <Grid container>
                <Grid item md={1}>
                    <ScrollJump arrayOfRefs={arrayOfRefs} />
                </Grid>
                <Grid item md={11}>
                    <SuperCard className="section0" ref={overviewTable}>
                        <Title>Tableau de sythèse :</Title>
                        <iframe src="/Tableau de synthèse BTS SIO SLAM.pdf" alt="tableau-synthèse" height="1000px" width="100%"></iframe>
                    </SuperCard>

                        <Spacing spacing="3em" />

                    <SuperCard className="section1" ref={firstSituation}>
                        <Title>Gérer le patrimoine informatique :</Title>
                        <Flex spaceAround>
                            <img src="/glpilogo.png" alt="glpi-img" width="25%"/>
                            <img src="/fusioninventory.png" alt="fusioninventory-img" width="25%"/>
                        </Flex>
                        <ImageFrame>
                            <img src="/glpiscreen.PNG" alt="glpiscreen-img" width="90%"/>
                        </ImageFrame>
                    </SuperCard>

                        <Spacing spacing="3em" />

                    <SuperCard className="section2" ref={secondSituation}>
                    <Title>Répondre aux incidents et aux demandes d'assistance et d'évolution :​</Title>
                    <p>(permissions numérisk)</p>
                    </SuperCard>

                        <Spacing spacing="3em" />

                    <SuperCard className="section3" ref={thirdSituation}>
                    <Title>Développer la présence en ligne de l'organisation :</Title>
                    <p>(cipecmeal (screen de l'appli) car en lien avec le cipecma)</p>
                    </SuperCard>

                        <Spacing spacing="3em" />

                    <SuperCard className="section4" ref={fourthSituation}>
                    <Title>Travailler en mode projet :</Title>
                    <Flex alignItemsCenter spaceAround>
                        <img src="/trello_logo.PNG" alt="trello_logo" width="25%" height="25%"/>
                        <img src="/notion.png" alt="notion-img" width="25%" height="30%"/>
                        <img src="/AzureDevops.png" alt="AzureDevops-img" width="20%" height="30%"/>
                    </Flex>

                        <Spacing spacing="2em" />

                    <Flex>
                        <ImageFrame>
                            <img src="/trelloscreen.PNG" alt="fusioninventory-img" width="100%"/>
                        </ImageFrame>
                        <LargeOl>
                            <li>Entretien avec le(s) client(s)</li><br/>
                            <li>Mise en place d'un cahier des charges</li><br/>
                            <li>Répartition du cahier des charges</li>
                        </LargeOl>
                    </Flex>

                        <Spacing spacing="2em" />

                    <Flex>
                        <ImageFrame>
                            <img src="/screen_notion.PNG" alt="notion-screen" width="100%"/>
                        </ImageFrame>
                    </Flex>

                    <Spacing spacing="2em" />

                    <Flex>
                        <ImageFrame>
                            <img src="/azure_screen.PNG" alt="notion-screen" width="100%"/>
                        </ImageFrame>
                    </Flex>
                    </SuperCard>

                        <Spacing spacing="3em" />

                    <SuperCard className="section5" ref={fifthSituation}>
                    <Title>Mettre à disposition des utilisateur un service informatique :</Title>
                    <Flex flexColumn>
                        <ImageFrame>
                            <img src="/oldindicateurs.PNG" alt="anciens-indicateurs-numerisk" width="100%"/>
                        </ImageFrame>

                        <Spacing spacing="2em" />

                        <ImageFrame>
                            <img src="/indicateurnumerisk.PNG" alt="indicateurs-numerisk-fini" width="100%"/>
                        </ImageFrame>
                    </Flex>
                    </SuperCard>

                        <Spacing spacing="3em" />

                    <SuperCard className="section6" ref={sixthfirstSituation}>
                        <Title>Organiser son développement professionnel :</Title>
                        <ImageFrame>
                            <img src="/plan_action.PNG" alt="Plan d'action professionnel" width="100%"/>
                        </ImageFrame>
                    </SuperCard>
                </Grid>
            </Grid>
        </PageContent>
    )
}

export default ProfessionalsSituations