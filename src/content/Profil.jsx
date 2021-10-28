import React from 'react'
import {Grid} from '@mui/material'
import styled from 'styled-components'
import {TinyText, BoldText, Title, Spacing} from '../styledComponent/styledComponent'

const GridContent = styled.div`
display: flex;
flex-direction: column !important;
align-items: ${(props) => props.alignment ?? 'flex-start'} !important;
padding: ${(props) => props.padding ?? 'none'} !important;
font-size: 28px;
`
const SGridContainer = styled(Grid)`
    height: 35%;
`

const Profil = () => {

    return (
        <>
            <SGridContainer container>
                <Grid item md={4} sm={12}>
                    <GridContent alignment="flex-start">
                        <div>AIMÉ Melvin​</div>
                        <div>19 ans​</div>
                        <div>26 rue d'Yves, 17440 Aytré​</div>
                        <div>Vaan17440@outlook.fr​</div>
                        <div>Permis B​</div>
                    </GridContent>
                </Grid>
                <Grid item md={5} sm={12}>
                    <GridContent alignment="center" padding="1.5em 0 0 0">
                        <BoldText>Alternant BTS SIO​</BoldText>
                        <TinyText>
                            <div>Brevet de Technicien Supérieur</div>
                            <div>Services Informatiques aux Organisations</div>​
                        </TinyText>
                    </GridContent>
                </Grid>
                <Grid item md={3} sm={12}>
                    <GridContent alignment="flex-end">
                        <img src={"../assets/melvin-cv.png"} alt="IMAGE CV MELVIN" />
                    </GridContent>
                </Grid>
            </SGridContainer>
            <Grid container>
                <Grid item md={4} sm={12}>
                    <GridContent>
                        <Title>Parcours pédagogique et diplômes :​</Title>
                            <Spacing spacing="1em" />
                        <BoldText>- Collège Albert Camus​</BoldText>
                        <div>17000, La Rochelle.​</div>
                        <div>Diplôme : Brevet des collèges​</div>
                        ​
                        <BoldText>- Lycée René-Josué Valin​</BoldText>
                        <div>17000, La Rochelle.​</div>
                        <div>Diplôme : Aucun​</div>
                        ​
                        <BoldText>- Lycée Polyvalent Léonce Vieljeux​</BoldText>
                        <div>17000, La Rochelle.​</div>
                        <div>Diplôme : Baccalauréat Général et Technologique​</div>
                    </GridContent>
                </Grid>
                <Grid item md={5} sm={12}>
                    <GridContent padding="0 0 0 2em">
                        <Title>Expériences professionnelles :​</Title>
                            <Spacing spacing="1em" />
                        <BoldText>- 2017 TRIBOFILM, Périgny ​</BoldText>
                        <TinyText>Poste occupé : Stagiaire en observation ( 1semaine )</TinyText>​
                        <BoldText>- 2020 NUMERISK, La Rochelle​</BoldText>
                        <TinyText>Poste occupé : Apprenti développeur en informatique ( 1an )</TinyText>
                    </GridContent>
                </Grid>
                <Grid item md={3} sm={12}>
                    <GridContent>
                        <Title>Compétences :​</Title>
                            <Spacing spacing="1em"/>
                        <BoldText>Logiciels maîtrisés :</BoldText>
                        <div>Word, OpenOffice, Visual Studio Code, Wamp, GitHub, Ubuntu.​</div>
                            <Spacing spacing="1em"/>
                        <BoldText>Langages maîtrisés :​</BoldText>
                        <div>HTML : ★★★★☆ </div>
                        <div>CSS : ★★★☆☆ </div>
                        <div>Java Script : ★☆☆☆☆ ​</div>
                        <div>PHP : ★★★☆☆ </div>
                        <div>ReactJS : ★★★☆☆ ​</div>
                        <div>RubyOnRails : ★☆☆☆☆​ </div>
                    </GridContent>
                </Grid>
            </Grid>
        </>
    )
}

export default Profil