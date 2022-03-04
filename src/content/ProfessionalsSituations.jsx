import { Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { Spacing, Title } from '../styledComponent/styledComponent'

const STitle = styled(Title)`
    padding 0;
`
const SubTitle = styled(Title)`
    font-size: 18px;
`
const A = styled.a`
    color: rgb(21, 24, 153);
    text-decoration: none;
    font-size: 24px;
    font-weight: 550;
    &:hover{
        text-decoration: underline;
    }
`
const GridContent = styled.div`
    display: flex;
    flex-direction: column !important;
    align-items: ${(props) => props.alignment ?? 'flex-start'} !important;
    padding: ${(props) => props.padding ?? 'none'} !important;
    font-size: 28px;
`

const ProfessionalsSituations = () => {

    return (
        <>
            <Grid container>
                <Title>Tableau de sythèse :</Title>
                <Grid item md={12}>
                    {/* <img src="/tableausynthese.PNG" alt="tableau-synthèse" width="100%"/> */}
                    <iframe src="/Tableau de synthèse BTS SIO SLAM.pdf" alt="tableau-synthèse" height="1000px" width="100%"></iframe>
                </Grid>

                    <Spacing spacing="5em" />

                <Title>Gérer le patrimoine informatique :</Title>
                <Grid item md={6}>
                    <img src="/glpilogo.png" alt="glpi-img" width="75%"/>
                </Grid>
                <Grid item md={6}>
                    <img src="/fusioninventory.png" alt="fusioninventory-img" width="75%"/>
                </Grid>
                <Grid item md={12}>
                    <img src="/glpiscreen.PNG" alt="glpiscreen-img" width="90%"/>
                </Grid>

                    <Spacing spacing="5em" />

                <Title>Répondre aux incidents et aux demandes d'assistance et d'évolution :​</Title>
                <p>(permissions numérisk)</p>

                    <Spacing spacing="5em" />

                <Title>Développer la présence en ligne de l'organisation :</Title>
                <p>(cipecmeal (screen de l'appli) car en lien avec le cipecma)</p>
                

                    <Spacing spacing="5em" />

                    <Title>Travailler en mode projet :</Title>
                <Grid item md={8}>
                    <img src="/trelloscreen.PNG" alt="fusioninventory-img" width="95%"/>
                </Grid>
                <Grid item md={4}>
                    <GridContent>
                        <div>1. Entretien avec le(s) client(s)</div>
                            <Spacing spacing="1rem" />
                        <div>2. Mise en place d'un cahier des charges</div>
                            <Spacing spacing="1rem" />
                        <div>3. Répartition du cahier des charges</div>
                    </GridContent>
                </Grid>
                <Grid item md={6}>
                    <img src="/github.png" alt="github-img" width="60%"/>
                </Grid>
                <Grid item md={6}>
                    <img src="/notion.png" alt="notion-img" width="50%"/>
                    <A href='https://www.notion.so/08c5ce15d88f4f4596c32ff4daca3eb6?v=7f62f792b6884e21a0f32b403dbe0425' target='_blank' rel='noopener noreferrer'>Voir exemple d'utilisation</A>
                </Grid>
                <Grid item md={6}>
                    <img src="/AzureDevops.png" alt="AzureDevops-img" width="60%"/>
                </Grid>

                    <Spacing spacing="5em" />

                <Title>Mettre à disposition des utilisateur un service informatique :</Title>
                    <Spacing spacing="1rem" />
                <Grid item md={12}>
                    <img src="/oldindicateurs.PNG" alt="anciens-indicateurs-numerisk" width="100%"/>
                </Grid>
                    <Spacing spacing="2em" />
                <Grid item md={12}>
                    <img src="/indicateurnumerisk.PNG" alt="indicateurs-numerisk-fini" width="100%"/>
                </Grid>

                    <Spacing spacing="5em" />

                <Title>Organiser son développement professionnel :</Title>
                
            </Grid>
        </>
    )
}

export default ProfessionalsSituations