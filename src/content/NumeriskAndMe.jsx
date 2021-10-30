import React from 'react'
import {BoldText, Spacing, Title} from '../styledComponent/styledComponent'
import {Grid} from '@mui/material'
import styled from 'styled-components'

const GridContent = styled.div`
display: flex;
flex-direction: column !important;
align-items: ${(props) => props.alignment ?? 'flex-start'} !important;
padding: ${(props) => props.padding ?? 'none'} !important;
font-size: 28px;
`

const NumeriskAndMe = () => {

    return(
        <>
            <Grid container>
                {/* FIRST PART */}
                <Title>Présentation de l'entreprise :</Title>
                <Grid item md={8} sm={12}>
                    IMAGE GOOGLE MAP NUMERISK
                </Grid>
                <Grid item md={4} sm={12}>
                    <GridContent>
                        <BoldText>Co-dirigeants :</BoldText>
                        <div>HEYMES Paul</div>
                        <div>FISCHER Amaury</div>
                    </GridContent>
                        <Spacing spacing="2em" />
                    <GridContent>
                        <BoldText>Salariés :</BoldText>
                        <div>THOMINE Alexis</div>
                        <div>AIMÉ Melvin</div>
                    </GridContent>
                        <Spacing spacing="2em" />
                    <GridContent>
                        <BoldText>Stagiaire :</BoldText>
                        <div>MAURIN Denis</div>
                    </GridContent>
                        <Spacing spacing="5em" />
                    <GridContent>
                        <BoldText>Coordonnées :</BoldText>
                        <div>1 Rue Alexander Fleming​</div>
                        <div>17000 La Rochelle​</div>
                        <div>Téléphone : 06 33 01 80 38​</div>
                        <div>Site WEB : https://numerisk.fr</div>
                    </GridContent>
                </Grid>
                {/* SECOND PART */}
                <Title>Mon rôle au sein de l'entreprise </Title>
                <Grid item md={6} sm={12}>
                    <GridContent>
                        IMAGE DE ReactJS
                        <Spacing spacing="1em" />
                        <div>Bibliothèque JavaScript (front-end)</div>
                    </GridContent>
                </Grid>
                <Grid item md={6} sm={12}>
                    <GridContent>
                        IMAGE DE RubyOnRails
                        <Spacing spacing="1em" />
                        <div>Framework Web (back-end)</div>
                    </GridContent>
                </Grid>
            </Grid>
        </>
    )
}

export default NumeriskAndMe