import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import styled from 'styled-components'

const SAppBar = styled(AppBar)`
    height: 4em;
    background-color: #999999 !important;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    color: black;
`

const EndBar = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
          <SAppBar position="static">
            <Container>
              AIMÉ Melvin ▪ Portefolio 
            </Container>
          </SAppBar>
        </Box>
    )
}

export default EndBar