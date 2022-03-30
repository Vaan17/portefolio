import { Grid, Tab, Tabs } from "@mui/material"
import React, { useRef, useState } from "react"
import styled from "styled-components"
import ScrollJump from "../styledComponent/ScrollJump"
import {
  Flex,
  ImageFrame,
  PageContent,
  Spacing,
  StyledButton,
  SubTitle,
  SuperCard,
  Title,
} from "../styledComponent/styledComponent"
import BookIcon from '@mui/icons-material/Book'
import TabPanel from "../components/TabPanel"
import TableauSynthese from "./preuves_competences/TableauSynthese"
import EngagementPro from "./preuves_competences/EngagementPro"
import GestionnaireGlpi from "./preuves_competences/GestionnaireGlpi"
import IndicateursNumerisk from "./preuves_competences/IndicateursNumerisk"
import PermissionsNumerisk from "./preuves_competences/PermissionsNumerisk"
import VueMobileNumerisk from "./preuves_competences/VueMobileNumerisk"

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
const StyledTabContainer = styled(Tabs)`
  height: 100%;
`

const ProfessionalsSituations = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const overviewTable = useRef(null)
  const firstSituation = useRef(null)
  const secondSituation = useRef(null)
  const thirdSituation = useRef(null)
  const fourthSituation = useRef(null)
  const fifthSituation = useRef(null)
  const sixthSituation = useRef(null)

  const a11yProps = (index) => (
    {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    }
  )

  const handleChange = (_event, newTab) => {
    setCurrentTab(newTab)
  }

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
  ]

  return (
    <PageContent noPadding>
    <Flex fullHeight>
      <StyledTabContainer
        orientation="vertical"
        variant="scrollable"
        value={currentTab}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Tableau de synthèse" {...a11yProps(0)} />
        <Tab label="Gestionnaire GLPI" {...a11yProps(1)} />
        <Tab label="Indicateurs Numérisk" {...a11yProps(2)} />
        <Tab label="Système de permissions" {...a11yProps(3)} />
        <Tab label="Vue mobile Numérisk" {...a11yProps(4)} />
        <Tab label="Gestion des demandes" {...a11yProps(5)} />
        <Tab label="Gestionnaires de projets" {...a11yProps(6)} />
        <Tab label="Cipecmeal" {...a11yProps(7)} />
        <Tab label="Engagement profesionnel" {...a11yProps(8)} />
      </StyledTabContainer>
      <TabPanel value={currentTab} index={0}>
        <TableauSynthese />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <GestionnaireGlpi />
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        <IndicateursNumerisk />
      </TabPanel>
      <TabPanel value={currentTab} index={3}>
        <PermissionsNumerisk />
      </TabPanel>
      <TabPanel value={currentTab} index={4}>
        <VueMobileNumerisk />
      </TabPanel>
      <TabPanel value={currentTab} index={5}>
        <div>uevrbrrrrrrrer</div>
      </TabPanel>
      <TabPanel value={currentTab} index={6}>
        <div>uevrttttttt ber</div>
      </TabPanel>
      <TabPanel value={currentTab} index={7}>
        <div>rvuiervubieriubvu</div>
      </TabPanel>
      <TabPanel value={currentTab} index={8}>
        <EngagementPro />
      </TabPanel>
    </Flex>
    </PageContent>
  )

  return (
    <>
      <ScrollJump arrayOfRefs={arrayOfRefs} />
      <PageContent>
        <Grid container>
          <Grid item md={1}></Grid>
          <Grid item md={11}>

            <Spacing spacing="3em" />

            

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
                <SubTitle>3.1.1: Ancienne version non-fonctionnelle des indicateurs Numérisk</SubTitle>
                <ImageFrame>
                  <img
                    src="/oldindicateurs.PNG"
                    alt="anciens-indicateurs-numerisk"
                    width="100%"
                  />
                </ImageFrame>

                <Spacing spacing="2em" />

                <SubTitle>3.1.2: Nouvelle version fonctionnelle des indicateurs Numérisk</SubTitle>
                <ImageFrame>
                  <img
                    src="/indicateurnumerisk.PNG"
                    alt="indicateurs-numerisk-fini"
                    width="100%"
                  />
                </ImageFrame>

                <Spacing spacing="2em" />

                <SubTitle>3.2.1: Mise en place d'une permission d'accès aux différents outils</SubTitle>
                <Flex spaceAround>
                  <ImageFrame width={"45%"}>
                    <img
                      src="/cartoPerm_true_appbar.PNG"
                      alt="Outil carto accessible dans l'appbar"
                      width="100%"
                    />
                  </ImageFrame>
                  <ImageFrame width={"45%"}>
                    <img
                      src="/cartoPerm_false_appbar.PNG"
                      alt="Outil carto inaccessible dans l'appbar"
                      width="100%"
                    />
                  </ImageFrame>
                </Flex>

                <Spacing spacing="2em" />

                <SubTitle>3.2.2: La restriction d'accès n'était pas complétement efficace</SubTitle>
                <ImageFrame>
                  <img
                    src="/cartoPerm_false_unfixedUrl.PNG"
                    alt="Outil carto inaccessible dans l'appbar"
                    width="100%"
                  />
                </ImageFrame>

                <Spacing spacing="2em" />

                <SubTitle>3.2.3: La restriction d'accès est complétement efficace</SubTitle>
                <ImageFrame>
                  <img
                    src="/cartoPerm_false_fixedUrl.PNG"
                    alt="Outil carto accessible dans l'appbar"
                    width="100%"
                  />
                </ImageFrame>

                <Spacing spacing="2em" />

                <SubTitle>3.3.1: Vue actuel de table recensant les différentes crises sur ordinateur</SubTitle>
                <ImageFrame>
                  <img
                    src="/current_daybook_display.PNG"
                    alt="SuperReactTable PC"
                    width="100%"
                  />
                </ImageFrame>

                <Spacing spacing="2em" />

                <SubTitle>3.3.2: Vue mobile de la même table mais sur support mobile</SubTitle>
                <Flex spaceAround>
                  <ImageFrame width={"40%"}>
                    <img
                      src="/mobile_daybook_old.PNG"
                      alt="SuperReactTable pas responsive sur mobile"
                      width="100%"
                    />
                  </ImageFrame>
                </Flex>

                <Spacing spacing="2em" />

                <SubTitle>3.3.3: Amélioration de la vue de la table sur mobile</SubTitle>
                <Flex spaceAround>
                  <ImageFrame width={"40%"}>
                    <img
                      src="/mobile_daybook_done.PNG"
                      alt="SuperReactTable responsive sur mobile"
                      width="100%"
                    />
                  </ImageFrame>
                  <ImageFrame width={"40%"}>
                    <img
                      src="/mobile_daybook_done_bottom.PNG"
                      alt="SuperReactTable responsive sur mobile (vue bottom)"
                      width="100%"
                    />
                  </ImageFrame>
                </Flex>
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
                <PanelBackground flexColumn>
                  <LargeOl>
                    <li>Entretien avec le(s) client(s)</li><br/>
                    <li>Mise en place d'un cahier des charges</li><br/>
                    <li>Répartition du cahier des charges</li>
                  </LargeOl>
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

              <Spacing spacing="2em" />

              <SubTitle>4.4: Cahier des charges réalisé avant la mise en production des indicateurs Numerisk</SubTitle>
              <StyledButton startIcon={<BookIcon />} onClick={()=>window.open("../cahierdeschargesI.pdf", '_blank')}>
                    Voir le cahier des charges
                </StyledButton>
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
                <SubTitle>5.3: Gestionnaire des comptes enregistrés (admin seulement)</SubTitle>
                <ImageFrame>
                  <img
                    src="/cipecmeal_gestionnaire.png"
                    alt="Login Utilisateur"
                    width="100%"
                  />
                </ImageFrame>
                <SubTitle>5.4: Interface "Mon Compte" de l'application Cipecmeal</SubTitle>
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

            
          </Grid>
        </Grid>
      </PageContent>
    </>
  );
};

export default ProfessionalsSituations;
