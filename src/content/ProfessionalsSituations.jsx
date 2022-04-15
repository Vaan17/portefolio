import { Tab, Tabs } from "@mui/material"
import React, { useState } from "react"
import styled from "styled-components"
import {
  Flex,
  PageContent
} from "../styledComponent/styledComponent"
import TabPanel from "../components/TabPanel"
import TableauSynthese from "./preuves_competences/TableauSynthese"
import EngagementPro from "./preuves_competences/EngagementPro"
import GestionnaireGlpi from "./preuves_competences/GestionnaireGlpi"
import IndicateursNumerisk from "./preuves_competences/IndicateursNumerisk"
import PermissionsNumerisk from "./preuves_competences/PermissionsNumerisk"
import VueMobileNumerisk from "./preuves_competences/VueMobileNumerisk"
import TraitementDemandes from "./preuves_competences/TraitementDemandes"
import GestionnairesProjets from "./preuves_competences/GestionnairesProjets"
import ProjetCipecmeal from "./preuves_competences/ProjetCipecmeal"
import { WINDOW_HEIGHT } from "../styledComponent/constants"

const StyledPanelContainer = styled.div`
  width: 100%;
  margin-left: calc(18vw + 0.5em);
`
const StyledTabContainer = styled(Tabs)`
  width: 18vw !important;
  height: calc(${WINDOW_HEIGHT}px - 12em);
  position: fixed;
  .MuiTabs-flexContainer {
    height: 100% !important;
    justify-content: space-between !important;
  }
`

const ProfessionalsSituations = () => {
  const [currentTab, setCurrentTab] = useState(0)

  const a11yProps = (index) => (
    {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    }
  )

  const handleChange = (_event, newTab) => {
    setCurrentTab(newTab)
  }

  return (
    <PageContent extrawidth>
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
      <StyledPanelContainer>
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
          <TraitementDemandes />
        </TabPanel>
        <TabPanel value={currentTab} index={6}>
          <GestionnairesProjets />
        </TabPanel>
        <TabPanel value={currentTab} index={7}>
          <ProjetCipecmeal />
        </TabPanel>
        <TabPanel value={currentTab} index={8}>
          <EngagementPro />
        </TabPanel>
      </StyledPanelContainer>
    </Flex>
    </PageContent>
  )
}

export default ProfessionalsSituations