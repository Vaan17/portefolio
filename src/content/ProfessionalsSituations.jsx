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

const ProfessionalsSituations = () => {

    return (
        <>
            <Grid container>
                <Title>Tableau de sythèse :</Title>
                <Grid item md={12}>
                    <img src="/tableausynthese.PNG" alt="tableau-synthèse" width="100%"/>
                </Grid>

                    <Spacing spacing="2em" />

                <STitle>Participation à un projet d’évolution d’un SI :​</STitle>
                <SubTitle>(solution applicative et d’infrastructure portant prioritairement sur le domaine de spécialité du candidat)​</SubTitle>
                <Grid item md={12}>
                    <img src="/oldindicateurs.PNG" alt="anciens-indicateurs-numerisk" width="100%"/>
                </Grid>
                    <Spacing spacing="2em" />
                <Grid item md={12}>
                    <img src="/indicateurnumerisk.PNG" alt="indicateurs-numerisk-fini" width="100%"/>
                </Grid>

                    <Spacing spacing="2em" />

                <Title>Elaboration de documents relatifs à la production et à la fourniture de services :​</Title>
                <Grid item md={6}>
                    <img src="/cahierdescharges1.PNG" alt="cahierdescharge-page1" width="100%"/>
                </Grid>
                <Grid item md={6}>
                    <a href='/cahierdeschargesI.pdf' target='_blank' rel='noopener noreferrer'>Voir le cahier des charges complet</a>
                </Grid>

                        <Spacing spacing="2em" />
                
                <Title>Productions relatives à la mise en place d’un dispositif de veille technologique et à l’étude d’une technologie, d’un composant, d’un outil ou d’une méthode :​</Title>
                <Grid item md={6}>
                    <img src="/formik.jpg" alt="formik-img" width="80%"/>
                </Grid>
                <Grid item md={6}>
                    <img src="/react-hook-form.jpg" alt="reacthookform-img" width="80%"/>
                </Grid>
                    <Spacing spacing="2em" />
                <Grid item md={6}>
                    <img src="https://blog.logrocket.com/wp-content/uploads/2019/10/formik-re-renders.gif" alt="formik-use.gif" width="80%"/>
                </Grid>
                <Grid item md={6}>
                    <img src="https://blog.logrocket.com/wp-content/uploads/2019/10/react-hook-form-re-renders.gif" alt="reacthookform-use.gif" width="80%"/>
                </Grid>
            </Grid>
        </>
    )
}

export default ProfessionalsSituations