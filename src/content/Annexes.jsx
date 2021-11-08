import React from 'react'
import {Grid} from '@mui/material'
import { Title } from '../styledComponent/styledComponent'

const Annexes = () => {

    return (
        <>
            <Grid container>
                <Title>Synthèse de mon parcours :</Title>
                <Grid item md={2}><img src="/htmlLogo.png" alt="html5Logo" height="100"/></Grid>
                <Grid item md={2}><img src="/cssLogo.png" alt="css3Logo" height="100"/></Grid>
                <Grid item md={2}><img src="/jsLogo.jpg" alt="javascriptLogo" height="100"/></Grid>
                <Grid item md={2}><img src="/phpLogo.png" alt="phpLogo" height="100"/></Grid>
                <Grid item md={2}><img src="/reactLogo.png" alt="reactLogo" height="100"/></Grid>
                <Grid item md={2}><img src="/rubyLogo.png" alt="rubyLogo" height="100"/></Grid>
            </Grid>
        </>
    )
}

export default Annexes