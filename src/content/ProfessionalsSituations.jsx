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
                    INSERER TABLEAU DE SYNTHESE MIS A JOUR
                </Grid>


                <STitle>Participation à un projet d’évolution d’un SI :​</STitle>
                <SubTitle>(solution applicative et d’infrastructure portant prioritairement sur le domaine de spécialité du candidat)​</SubTitle>
                <Grid item md={12}>
                    IMAGE DES INDICATEURS NUMERISK
                </Grid>


                <Title>Elaboration de documents relatifs à la production et à la fourniture de services :​</Title>
                <Grid item md={6}>
                    IMAGE CAHIER DES CHARGES 1
                </Grid>
                <Grid item md={6}>
                    IMAGE CAHIER DES CHARGES 2
                </Grid>
                <Grid item md={6}>
                    IMAGE CAHIER DES CHARGES 3
                </Grid>
                <Grid item md={6}>
                    IMAGE CAHIER DES CHARGES 4
                </Grid>


                <Title>Productions relatives à la mise en place d’un dispositif de veille technologique et à l’étude d’une technologie, d’un composant, d’un outil ou d’une méthode :​</Title>
                <Grid item md={6}>
                    IMAGE EXEMPLE FORMIK
                </Grid>
                <Grid item md={6}>
                    IMAGE EXEMPLE REACT HOOK FORM
                </Grid>
            </Grid>
        </>
    )
}

export default ProfessionalsSituations