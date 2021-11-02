import styled from 'styled-components'
import React from 'react'
import { Grid } from '@mui/material'
import {TinyText, Spacing} from '../styledComponent/styledComponent'
const SGrid = styled(Grid)`
    display: flex;
    flex-direction: column !important;
    align-items: center !important;
    font-size: 28px;
`
const SGridContainer = styled(Grid)`
    height: 100% !important;
    display: flex;
    align-items: center;
`
const AlignText = styled.div`
    display: flex;
    justify-content: center;
`
const BoldText = styled(AlignText)`
    font-weight: bold;
`

const Home = () => {

    return (
        <>
        <img src="/melvin-cv.png" height={1000}/>
            <SGridContainer container>
                <SGrid item md={6} sm={12}>
                    <div>
                        Centre de formation :
                    </div>
                    <BoldText>
                        Cipecma
                    </BoldText>
                        <Spacing spacing="1em" />
                    <img src="https://www.cipecma.com/templates/cipecma/images/logo.png" alt="Logo Cipecma"/>
                        <Spacing spacing="1em" />
                    <AlignText>
                        Avenue du Général de Gaulle,
                    </AlignText>
                    <AlignText>
                        17340 Châtelaillon-Plage​
                    </AlignText>
                </SGrid>
                <SGrid item md={6} sm={12}>
                    <div>
                        Dossier Professionel
                    </div>
                        <Spacing spacing="1em" />
                    <AlignText>
                        AIMÉ Melvin
                    </AlignText>
                        <Spacing spacing="1em" />
                    <AlignText>
                        BTS SIO SLAM
                    </AlignText>
                    <TinyText>
                        <div>Brevet de Technicien Supérieur.​</div>
                        <div>Services Informatiques aux Organisation.</div>
                        <div>Option: Solution Logiciels et Applications Métiers.​</div>
                    </TinyText>
                        <Spacing spacing="1em" />
                    <AlignText>
                        2020 - 2022
                    </AlignText>
                </SGrid>
            </SGridContainer>
        </>
    )
}

export default Home