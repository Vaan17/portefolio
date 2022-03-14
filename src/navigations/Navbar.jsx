import "moment/locale/fr";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import moment from "moment";
import styled from "styled-components";
import ListItem from "@mui/material/ListItem";
import { useHistory } from "react-router-dom";

const SAppBar = styled(AppBar)`
  height: 4em;
  background-image: linear-gradient(to right, #0d4073, #65a1dc) !important;
`;
const SToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;
const SListItem = styled(ListItem)`
  width: 11vw !important;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  //padding: 8px 3em !important;
  cursor: pointer !important;
  &:hover {
    background-color: rgba(224, 251, 255, 0.2);
    transition: background-color 0.5s, transform 0.5s;
  }
`;
const ListContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const Header = styled.div``;
const Separator = styled.div`
  border-left: 1px solid white;
`;
const FollowingWhiteBar = styled.div`
  transition: all 0.2s;
  width: 11vw;
  height: 3px;
  background-color: white;
  position: relative;
  left: 0;
  margin-left: calc((11vw * var(--tab)) + (1px * var(--tab)));
  border-radius: 50px;
`;
const Navbar = () => {
  const history = useHistory();
  const date = moment().locale("fr").format("LL");
  const [lastTabSelectedIndex, setLastTabSelectedIndex] = useState(0);

  const pages = [
    {
      name: "Accueil",
      path: "/home",
    },
    {
      name: "Profil",
      path: "/profil",
    },
    {
      name: "L'Entreprise et Moi",
      path: "/numerisk_and_me",
    },
    {
      name: "Situations Professionelles",
      path: "/professionals_situations",
    },
    {
      name: "Approfondissement",
      path: "/deepening",
    },
    {
      name: "Annexes",
      path: "/annexes",
    },
  ];

  return (
    <SAppBar>
      <SToolbar>
        <img
          src="https://www.cipecma.com/templates/cipecma/images/logo.png"
          alt="Logo Cipecma"
          width="100px"
          height="55px"
        />
        <Header>
          <ListContainer>
            {pages.map((page, index) => (
              <>
                <SListItem
                  onClick={() => {
                    history.push(page.path);
                    setLastTabSelectedIndex(index);
                  }}
                >
                  {page.name}
                </SListItem>
                {page !== pages[pages.length - 1] && <Separator />}
              </>
            ))}
          </ListContainer>
          <FollowingWhiteBar
            style={{
              "--tab": lastTabSelectedIndex,
            }}
          />
        </Header>
        {date}
      </SToolbar>
    </SAppBar>
  );
};

export default Navbar;
