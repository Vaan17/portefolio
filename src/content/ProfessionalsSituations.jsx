import { Grid } from "@mui/material";
import React, { useRef } from "react";
import styled from "styled-components";
import ScrollJump from "../styledComponent/ScrollJump";
import {
  Flex,
  ImageFrame,
  PageContent,
  Spacing,
  StyledButton,
  SubTitle,
  SuperCard,
  Title,
} from "../styledComponent/styledComponent";
import BookIcon from '@mui/icons-material/Book';

const LargeOl = styled.ol`
  /* =-=-=-=-= Default =-=-=-=-= */
  margin: 0;
  padding-top: 1em;
  font-size: 20px !important;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;
const PanelBackground = styled(Flex)`
  /* =-=-=-=-= Default =-=-=-=-= */
    background-color: #d5d5d5;
    border-radius: 0 5% 5% 0;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`

const ProfessionalsSituations = () => {
  const overviewTable = useRef(null);
  const firstSituation = useRef(null);
  const secondSituation = useRef(null);
  const thirdSituation = useRef(null);
  const fourthSituation = useRef(null);
  const fifthSituation = useRef(null);
  const sixthSituation = useRef(null);

  const arrayOfRefs = [
    {
      anchor: overviewTable,
      title: "Tableau de sythèse",
    },
    {
      anchor: firstSituation,
      title: "Gérer le patrimoine informatique",
    },
    {
      anchor: secondSituation,
      title:
        "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    },
    {
      anchor: thirdSituation,
      title: "Développer la présence en ligne de l'organisation",
    },
    {
      anchor: fourthSituation,
      title: "Travailler en mode projet",
    },
    {
      anchor: fifthSituation,
      title: "Mettre à disposition des utilisateur un service informatique",
    },
    {
      anchor: sixthSituation,
      title: "Organiser son développement professionnel",
    },
  ];

  return (
    <>
      <ScrollJump arrayOfRefs={arrayOfRefs} />
      <PageContent>
        <Grid container>
          <Grid item md={1}></Grid>
          <Grid item md={11}>
            <SuperCard className="section0" ref={overviewTable}>
              <Title>Tableau de sythèse :</Title>
              <iframe
                src="/Tableau de synthèse BTS SIO SLAM.pdf"
                alt="tableau-synthèse"
                height="1000px"
                width="100%"
              ></iframe>
            </SuperCard>

            <Spacing spacing="3em" />

            <SuperCard className="section1" ref={firstSituation}>
              <Title>I/ Gérer le patrimoine informatique :</Title>
              <Flex spaceAround>
                <img src="/glpilogo.png" alt="glpi-img" width="25%" />
                <img
                  src="/fusioninventory.png"
                  alt="fusioninventory-img"
                  width="25%"
                />
              </Flex>
              <SubTitle>1.1: Interface d'acceuil de GLPI</SubTitle>
              <ImageFrame>
                <img src="/glpiscreen.PNG" alt="glpiscreen-img" width="100%" />
              </ImageFrame>
                <Spacing spacing="2em" />
              <SubTitle>1.2: Panneau des ordinateurs inventoriés sur le gestionnaire</SubTitle>
              <ImageFrame>
                <img src="/glpi_inventaire.PNG" alt="glpiscreen-img" width="100%" />
              </ImageFrame>
            </SuperCard>

            <Spacing spacing="3em" />

            <SuperCard className="section2" ref={secondSituation}>
              <Title>
                II/ Répondre aux incidents et aux demandes d'assistance et
                d'évolution :​
              </Title>
              <SubTitle>2.1: Informations de contact de l'entreprise</SubTitle>
              <ImageFrame>
                <img
                  src="/contact.jpg"
                  alt="anciens-indicateurs-numerisk"
                  width="100%"
                />
              </ImageFrame>
                <Spacing spacing="2em" />
              <Flex flexColumn>
                <SubTitle>2.2: Procédure d'une demande d'assistance</SubTitle>
                <LargeOl>
                  <li>Le client prend contact via l'adresse de contact de l'entreprise, ou par téléphone.</li><br/>
                  <li>Les différentes demandes sont relevées.</li><br/>
                  <li>Transfert et attribution des demandes à l'équipe de développement.</li><br/>
                  <li>Application de la demande au sein de l'application.</li><br/>
                  <li>Création d'une demande de mise à jour de l'application comportant les modifications.</li>
                </LargeOl>
              </Flex>
                <Spacing spacing="2em" />
              <SubTitle>2.3: Modifications en cours de validation suite à une demande</SubTitle>
              <ImageFrame>
                <img
                  src="/gitPR1.PNG"
                  alt="gitPR1"
                  width="100%"
                />
                <img
                  src="/gitPR2.PNG"
                  alt="gitPR2"
                  width="100%"
                />
              </ImageFrame>
                <Spacing spacing="2em" />
              <SubTitle>2.4: Historique d'une partie des améliorations déjà implémentées</SubTitle>
              <ImageFrame>
                <img
                  src="/histoPR.PNG"
                  alt="Historique des PR Numérisk"
                  width="100%"
                />
              </ImageFrame>
            </SuperCard>

            <Spacing spacing="3em" />

            <SuperCard className="section3" ref={thirdSituation}>
              <Title>III/ Développer la présence en ligne de l'organisation :</Title>
              <Flex flexColumn>
                <SubTitle>3.1: Ancienne version non-fonctionnelle des indicateurs Numérisk</SubTitle>
                <ImageFrame>
                  <img
                    src="/oldindicateurs.PNG"
                    alt="anciens-indicateurs-numerisk"
                    width="100%"
                  />
                </ImageFrame>

                <Spacing spacing="2em" />

                <SubTitle>3.2: Nouvelle version fonctionnelle des indicateurs Numérisk</SubTitle>
                <ImageFrame>
                  <img
                    src="/indicateurnumerisk.PNG"
                    alt="indicateurs-numerisk-fini"
                    width="100%"
                  />
                </ImageFrame>
              </Flex>
            </SuperCard>

            <Spacing spacing="3em" />

            <SuperCard className="section4" ref={fourthSituation}>
              <Title>IV/ Travailler en mode projet :</Title>
              <Flex alignItemsCenter spaceAround>
                <img
                  src="/trello_logo.PNG"
                  alt="trello_logo"
                  width="25%"
                  height="25%"
                />
                <img
                  src="/notion.png"
                  alt="notion-img"
                  width="25%"
                  height="30%"
                />
                <img
                  src="/AzureDevops.png"
                  alt="AzureDevops-img"
                  width="20%"
                  height="30%"
                />
              </Flex>

              <Spacing spacing="2em" />

              <SubTitle>4.1: Interface du gestionnaire de projet Trello</SubTitle>
              <Flex>
                <ImageFrame>
                  <img
                    src="/trelloscreen.PNG"
                    alt="trello_screen"
                    width="100%"
                  />
                </ImageFrame>
                <PanelBackground flexColumn spaceAround>
                  <LargeOl>
                    <li>Entretien avec le(s) client(s)</li><br/>
                    <li>Mise en place d'un cahier des charges</li><br/>
                    <li>Répartition du cahier des charges</li>
                  </LargeOl>
                  <StyledButton startIcon={<BookIcon />} onClick={()=>window.open("../cahierdeschargesI.pdf", '_blank')}>
                    Voir le cahier des charges
                  </StyledButton>
                </PanelBackground>
              </Flex>

              <Spacing spacing="2em" />

              <SubTitle>4.2: Interface du gestionnaire de projet Notion</SubTitle>
              <Flex>
                <ImageFrame>
                  <img
                    src="/screen_notion.PNG"
                    alt="notion_screen"
                    width="100%"
                  />
                </ImageFrame>
              </Flex>

              <Spacing spacing="2em" />

              <SubTitle>4.3: Interface du gestionnaire de projet Azure Devops</SubTitle>
              <Flex>
                <ImageFrame>
                  <img
                    src="/azure_screen.PNG"
                    alt="notion-screen"
                    width="100%"
                  />
                </ImageFrame>
              </Flex>
            </SuperCard>

            <Spacing spacing="3em" />

            <SuperCard className="section5" ref={fifthSituation}>
              <Title>
                V/ Mettre à disposition des utilisateur un service informatique :
              </Title>
              <Flex flexColumn gap={2}>
                <SubTitle>5.1: Interfaces d'inscription de l'application Cipecmeal</SubTitle>
                <ImageFrame>
                  <img
                    src="/CipecmealStudentSign_in.png"
                    alt="Inscription Etudiant"
                    width="100%"
                  />
                </ImageFrame>
                <ImageFrame>
                  <img
                    src="/CipecmealEntrepriseSign_in.png"
                    alt="Inscription Entreprise"
                    width="100%"
                  />
                </ImageFrame>
                <SubTitle>5.2: Interface de connexion de l'application Cipecmeal</SubTitle>
                <ImageFrame>
                  <img
                    src="/CipecmealLogin.png"
                    alt="Login Utilisateur"
                    width="100%"
                  />
                </ImageFrame>
                <SubTitle>5.3: Interface "Mon Compte" de l'application Cipecmeal</SubTitle>
                <ImageFrame>
                  <img
                    src="/CipecmealMyAccount.png"
                    alt="Mon compte utilisateur"
                    width="100%"
                  />
                </ImageFrame>
              </Flex>
            </SuperCard>

            <Spacing spacing="3em" />

            <SuperCard className="section6" ref={sixthSituation}>
              <Title>VI/ Organiser son développement professionnel :</Title>
              <ImageFrame>
                <img
                  src="/plan_action.PNG"
                  alt="Plan d'action professionnel"
                  width="100%"
                />
              </ImageFrame>
            </SuperCard>
          </Grid>
        </Grid>
      </PageContent>
    </>
  );
};

export default ProfessionalsSituations;
