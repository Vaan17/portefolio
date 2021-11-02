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
const SIframe = styled.iframe`
    border: 0;
`

const NumeriskAndMe = () => {

    return(
        <>
            <Grid container>
                {/* FIRST PART */}
                <Title>Présentation de l'entreprise :</Title>
                <Grid item md={8} sm={12}>
                    <SIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d671.3559819581556!2d-1.1559088247104978!3d46.148501456785056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480153a9ac4e7ffb%3A0x99beb57145cdbbe6!2zTlVNw4lSSVNL!5e0!3m2!1sfr!2sfr!4v1635877929619!5m2!1sfr!2sfr" width="90%" height="100%" allowfullscreen="" loading="lazy"></SIframe>
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
                        <div>Site WEB : <a href="https://numerisk.fr" target="_blank">https://numerisk.fr</a></div>
                    </GridContent>
                </Grid>
                <Spacing spacing="5em" />
                {/* SECOND PART */}
                <Title>Mon rôle au sein de l'entreprise </Title>
                <Grid item md={6} sm={12}>
                    <GridContent>
                        <img src="/reactjs.jpg" width="80%"/>
                        <Spacing spacing="1em" />
                        <div>Bibliothèque JavaScript (front-end)</div>
                    </GridContent>
                </Grid>
                <Grid item md={6} sm={12}>
                    <GridContent>
                        <img src="/rubyonrails.png" width="80%"/>
                        <Spacing spacing="1em" />
                        <div>Framework Web (back-end)</div>
                    </GridContent>
                </Grid>
            </Grid>
        </>
    )
}

export default NumeriskAndMe