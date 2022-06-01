import React, { useRef } from "react";
import {
  Flex,
  Spacing,
  StyledButton,
  SubTitle,
  SuperCard,
  Title,
} from "../../styledComponent/styledComponent";
import styled from "styled-components";
import BookIcon from "@mui/icons-material/Book";
import cahierdeschargesI from "../../img/cahierdeschargesI.pdf";

const LargeOl = styled.ol`
  /* =-=-=-=-= Default =-=-=-=-= */
  margin: 0;
  padding-top: 1em;
  font-size: 20px !important;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;
const SSuperCard = styled(SuperCard)`
  height: calc(100vh - 16em);
`;

const TraitementDemandes = () => {
  const firstCard = useRef(null);

  return (
    <>
      <SSuperCard className="section1" ref={firstCard}>
        <Title>
          Répondre aux incidents et aux demandes d'assistance et d'évolution :​
        </Title>
        <Flex flexColumn>
          <SubTitle>1.1: Procédure d'une demande d'assistance</SubTitle>
          <LargeOl>
            <li>
              Le client étant le gérant de l'entreprise prend contact avec moi.
            </li>
            <br />
            <li>Je relève les différentes demandes et contraintes.</li>
            <br />
            <li>
              Je met en place un cahier des charges pour l'organisation des
              taches.
            </li>
            <br />
            <li>J'application les demandes au sein de l'application.</li>
            <br />
            <li>Je présente au client les travaux qui ont été réalisés.</li>
            <br />
            <li>
              Je crée une demande de mise à jour de l'application comportant mes
              modifications.
            </li>
          </LargeOl>
        </Flex>

        <Spacing spacing="2em" />

        <SubTitle>
          1.2: Cahier des charges réalisé avant la mise en production des
          indicateurs Numerisk
        </SubTitle>
        <StyledButton
          startIcon={<BookIcon />}
          onClick={() => window.open(cahierdeschargesI, "_blank")}
        >
          Voir le cahier des charges
        </StyledButton>
      </SSuperCard>
    </>
  );
};

export default TraitementDemandes;
