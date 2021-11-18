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
                    <img src="/tableausynthese.PNG" alt="tableau-synthèse" width="100%"/>
                    {/* <iframe src="/BTS_SIO_E6_tableau_synthèse.pdf" alt="tableau-synthèse" height="1000px" width="100%"></iframe> */}
                </Grid>

                    <Spacing spacing="5em" />

                <STitle>Participation à un projet d’évolution d’un SI :​</STitle>
                <SubTitle>(solution applicative et d’infrastructure portant prioritairement sur le domaine de spécialité du candidat)​</SubTitle>
                <Grid item md={12}>
                    <img src="/oldindicateurs.PNG" alt="anciens-indicateurs-numerisk" width="100%"/>
                </Grid>
                    <Spacing spacing="2em" />
                <Grid item md={12}>
                    <img src="/indicateurnumerisk.PNG" alt="indicateurs-numerisk-fini" width="100%"/>
                </Grid>

                    <Spacing spacing="5em" />

                <Title>Elaboration de documents relatifs à la production et à la fourniture de services :​</Title>
                <Grid item md={6}>
                    <img src="/cahierdescharges1.PNG" alt="cahierdescharge-page1" width="100%"/>
                </Grid>
                <Grid item md={6}>
                    <A href='/cahierdeschargesI.pdf' target='_blank' rel='noopener noreferrer'>Voir le cahier des charges complet</A>
                </Grid>

                    <Spacing spacing="5em" />
                
                <Title>Productions relatives à la mise en place d’un dispositif de veille technologique et à l’étude d’une technologie, d’un composant, d’un outil ou d’une méthode :​</Title>
                <Grid item md={6}>
                    <img src="/formik.jpg" alt="formik-img" width="80%"/>
                </Grid>
                <Grid item md={6}>
                    <img src="/react-hook-form.jpg" alt="reacthookform-img" width="80%"/>
                </Grid>
                    <Spacing spacing="5em" />
                <Grid item md={6}>
                    <img src="https://blog.logrocket.com/wp-content/uploads/2019/10/formik-re-renders.gif" alt="formik-use.gif" width="80%"/>
                </Grid>
                <Grid item md={6}>
                    <img src="https://blog.logrocket.com/wp-content/uploads/2019/10/react-hook-form-re-renders.gif" alt="reacthookform-use.gif" width="80%"/>
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

                    <Spacing spacing="5em" />

                <Title>Organiser son développement professionnel :</Title>
                    <Spacing spacing="1rem" />
                <Grid item md={6}>
                    <img src="/github.png" alt="github-img" width="60%"/>
                </Grid>
                <Grid item md={6}>
                    <img src="/notion.png" alt="notion-img" width="50%"/>
                    <A href='https://www.notion.so/08c5ce15d88f4f4596c32ff4daca3eb6?v=7f62f792b6884e21a0f32b403dbe0425' target='_blank' rel='noopener noreferrer'>Voir exemple d'utilisation</A>
                </Grid>
                
                    <Spacing spacing="5em" />

                <Title>Développer la présence en ligne de l'organisation :</Title>
                    <Spacing spacing="1rem" />
                <Grid item md={8}>
                    <img src="/packs_numerisk.PNG" alt="packs_numerisk-img" width="80%"/>
                </Grid>
            </Grid>
        </>
    )
}

export default ProfessionalsSituations