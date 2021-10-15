import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import moment from 'moment'
import styled from 'styled-components'

const SToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`
const RoutesContainer = styled.div`
  display: flex;
  width: 30vw;
  justify-content: space-between;
  padding: 0 3em;
`
const Header = styled.div`
  display: flex;
  padding: 0 1em;
`
const Footer = styled.div`
  padding: 0 1em;
`

const Navbar = () => {
    const date = moment().locale('fr').format('LL');
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <SToolbar>
              <Header>
                //! logo cipecma here
                <RoutesContainer>
                  <div>Profil</div>
                  <div>L'Entreprise et Moi</div>
                  <div>Situations Professionnelles</div>
                  <div>Annexes</div>
                </RoutesContainer>
              </Header>
              <Footer>
                {date}
              </Footer>
            </SToolbar>
          </AppBar>
        </Box>
    )
}

export default Navbar