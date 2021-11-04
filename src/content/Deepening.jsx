import { Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { Title } from '../styledComponent/styledComponent'
import MapIcon from '@mui/icons-material/Map'
import PanToolIcon from '@mui/icons-material/PanTool'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import PeopleIcon from '@mui/icons-material/People'
import DescriptionIcon from '@mui/icons-material/Description';

const GridContent = styled.div`
    display: flex;
    flex-direction: column !important;
    align-items: ${(props) => props.alignment ?? 'flex-start'} !important;
    padding: ${(props) => props.padding ?? 'none'} !important;
    font-size: 28px;
`

const Deepening = () => {

    return (
        <>
            <Grid container>
                <Title>L'application Numérisk un peu plus en détail :​</Title>
                <Grid item md={6}>
                    <img src="/numerisklogo.png" alt="Logo Numerisk" width="80%" />
                </Grid>
                <Grid item md={6}>
                    <GridContent>
                        <div><MapIcon /> &ensp; Cartographie</div>
                        <div><PanToolIcon /> &ensp; Main Courante</div>
                        <div><ContactPhoneIcon /> &ensp; Mes Données</div>
                        <div><PeopleIcon /> &ensp; Coopération</div>
                        <div><DescriptionIcon /> &ensp; Téléchargement</div>
                    </GridContent>
                </Grid>
            </Grid>

        </>
    )
}

export default Deepening