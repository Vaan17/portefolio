import 'moment/locale/fr'
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import moment from 'moment'
import styled from 'styled-components'
import ListItem from '@mui/material/ListItem'
import { useHistory, Link } from 'react-router-dom'

const SAppBar = styled(AppBar)`
  height: 4em;
`
const SToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`
const SListItem = styled(ListItem)`
  width: max-content !important;
  padding: 8px 64px !important;
  &:hover{
    background-color: rgba(224, 251, 255, .2);
    transition: background-color .5s, transform .5s;
  }
`
const ListContainer = styled.div`
  display: flex;
  width: 50vw;
  justify-content: center;
  padding: 0 3em;
`
const Header = styled.div`
  display: flex;
  padding: 0 1em;
`
const Separator = styled.div`
  border-left: 1px solid white;
`
const SDiv = styled.div`
  display: flex;
`

const Navbar = () => {
  const history = useHistory()
  const date = moment().locale("fr").format('LL');

  const pages = [
    {
      name: "Accueil",
      path: "/home"
    },
    {
      name: "Profil",
      path: "/profil"
    },
    {
      name: "L'Entreprise et Moi",
      path: "/numerisk_and_me"
    },
    {
      name: "Situations Professionelles",
      path: "/professionals_situations"
    },
    {
      name: "Annexes",
      path: "/annexes"
    },
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SAppBar position="static">
        <SToolbar>
          <img src="https://www.cipecma.com/templates/cipecma/images/logo.png" alt="Logo Cipecma" width="100px" height="55px"/>
          <Header>
            <ListContainer>
              {pages.map((page) => (
                <SDiv>
                  <SListItem onClick={() => {history.push(page.path)}}>
                    {page.name}
                  </SListItem>
                  {page !== pages[pages.length - 1] && (
                    <Separator />
                  )}
                </SDiv>
              ))}
            </ListContainer>
          </Header>
          {date}
        </SToolbar>
      </SAppBar>
    </Box>
  )
}

export default Navbar