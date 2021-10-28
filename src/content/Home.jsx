import styled from 'styled-components'
import React from 'react'
import { Grid } from '@mui/material'

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
    padding: 0 16em;
`
const TinyText = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 18px;
`
const Section = styled.div`
    padding-top: 24px;
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
            <SGridContainer container>
                <SGrid item md={6} sm={12}>
                    <div>
                        Centre de formation :
                    </div>
                    <Section>
                        <BoldText>
                            Cipecma
                        </BoldText>
                    </Section>
                    <Section>
                        <img src="https://www.cipecma.com/templates/cipecma/images/logo.png" alt="Logo Cipecma"/>
                    </Section>
                    <Section>
                        <AlignText>
                            Avenue du Général de Gaulle,
                        </AlignText>
                        <AlignText>
                            17340 Châtelaillon-Plage​
                        </AlignText>
                    </Section>
                </SGrid>
                <SGrid item md={6} sm={12}>
                    <div>
                        Dossier Professionel
                    </div>
                    <Section>
                        <AlignText>
                            AIMÉ Melvin
                        </AlignText>
                    </Section>
                    <Section>
                        <AlignText>
                            BTS SIO SLAM
                        </AlignText>
                        <TinyText>
                            <div>Brevet de Technicien Supérieur.​</div>
                            <div>Services Informatiques aux Organisation.</div>
                            <div>Option: Solution Logiciels et Applications Métiers.​</div>
                        </TinyText>
                    </Section>
                    <Section>
                        <AlignText>
                            2020 - 2022
                        </AlignText>
                    </Section>
                </SGrid>
            </SGridContainer>
        </>
    )
}

export default Home