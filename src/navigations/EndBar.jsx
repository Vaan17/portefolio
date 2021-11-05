import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import styled from 'styled-components'

const A = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover{
      text-decoration: underline;
  }
`
const SAppBar = styled(AppBar)`
    width: 100%;
    height: 4em;
    background-color: #999999 !important;
    display: flex;
    justify-content: center;
    align-items: center;
`
const TextContainer = styled.div`
    color: black;
`

const EndBar = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
          <SAppBar position="static">
            <TextContainer>
                  AIMÉ Melvin ▪ Portefolio &emsp;&emsp; Retrouvez moi sur GitHub ▪ <A href="https://github.com/Vaan17" target="_blank" rel="noreferrer">https://github.com/Vaan17</A>
            </TextContainer>
          </SAppBar>
        </Box>
    )
}

export default EndBar