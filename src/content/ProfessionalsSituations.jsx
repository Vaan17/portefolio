import React from 'react'
import styled from 'styled-components'
import { Flex, PageContainer, PageContent, Spacing, SuperCard, Title } from '../styledComponent/styledComponent'

const LargeOl = styled.ol`
    font-size: 28px !important;
`

const ProfessionalsSituations = () => {

    return (
        <PageContent>
            <SuperCard>
                <Title>Tableau de sythèse :</Title>
                <iframe src="/Tableau de synthèse BTS SIO SLAM.pdf" alt="tableau-synthèse" height="1000px" width="100%"></iframe>
            </SuperCard>

                <Spacing spacing="5em" />

            <SuperCard>
                <Title>Gérer le patrimoine informatique :</Title>
                <Flex>
                    <img src="/glpilogo.png" alt="glpi-img" width="25%"/>
                    <img src="/fusioninventory.png" alt="fusioninventory-img" width="25%"/>
                </Flex>
                <img src="/glpiscreen.PNG" alt="glpiscreen-img" width="90%"/>
            </SuperCard>

                <Spacing spacing="5em" />

            <SuperCard>
            <Title>Répondre aux incidents et aux demandes d'assistance et d'évolution :​</Title>
            <p>(permissions numérisk)</p>
            </SuperCard>

                <Spacing spacing="5em" />

            <SuperCard>
            <Title>Développer la présence en ligne de l'organisation :</Title>
            <p>(cipecmeal (screen de l'appli) car en lien avec le cipecma)</p>
            </SuperCard>

                <Spacing spacing="5em" />

            <SuperCard>
            <Title>Travailler en mode projet :</Title>
            <Flex>
                <img src="/trelloscreen.PNG" alt="fusioninventory-img" width="60%"/>
                <LargeOl>
                    <li>Entretien avec le(s) client(s)</li><br/>
                    <li>Mise en place d'un cahier des charges</li><br/>
                    <li>Répartition du cahier des charges</li>
                </LargeOl>
            </Flex>
            <Flex spaceAround>
                <img src="/github.png" alt="github-img" width="30%" height="30%"/>
                <img src="/notion.png" alt="notion-img" width="25%" height="30%"/>
                <img src="/AzureDevops.png" alt="AzureDevops-img" width="20%" height="30%"/>
            </Flex>
            </SuperCard>

                <Spacing spacing="5em" />

            <SuperCard>
            <Title>Mettre à disposition des utilisateur un service informatique :</Title>
            <Flex flexColumn>
                <img src="/oldindicateurs.PNG" alt="anciens-indicateurs-numerisk" width="100%"/>
                
                <Spacing spacing="2em" />

                <img src="/indicateurnumerisk.PNG" alt="indicateurs-numerisk-fini" width="100%"/>
            </Flex>
            </SuperCard>

                <Spacing spacing="5em" />

            <SuperCard>
                <Title>Organiser son développement professionnel :</Title>
                <img src="/plan_action.PNG" alt="Plan d'action professionnel" width="65%"/>
            </SuperCard>
        </PageContent>
    )
}

export default ProfessionalsSituations