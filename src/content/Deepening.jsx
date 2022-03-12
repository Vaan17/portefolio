import React from 'react'
import styled from 'styled-components'
import { PageContent, Spacing, Title, SuperCard, Flex, ImageFrame } from '../styledComponent/styledComponent'
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map'
import PanToolIcon from '@mui/icons-material/PanTool'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import PeopleIcon from '@mui/icons-material/People'
import DescriptionIcon from '@mui/icons-material/Description';

const ToolDiv = styled.div`
    /* =-=-=-=-= Default =-=-=-=-= */
    display: flex;
    align-items: end;
    font-size: 22px;
    /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`
const SSuperCard = styled(SuperCard)`
    /* =-=-=-=-= Default =-=-=-=-= */
    height: calc(100vh - 18em);
    /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`

const Deepening = () => {

    const Tools = [
        {
            name: "Accueil",
            icon: <HomeIcon style={{width: "35px", height:"35px"}}/>
        },
        {
            name: "Cartographie",
            icon: <MapIcon style={{width: "35px", height:"35px"}}/>
        },
        {
            name: "Main Courante",
            icon: <PanToolIcon style={{width: "35px", height:"35px"}}/>
        },
        {
            name: "Mes Données",
            icon: <ContactPhoneIcon style={{width: "35px", height:"35px"}}/>
        },
        {
            name: "Coopération",
            icon: <PeopleIcon style={{width: "35px", height:"35px"}}/>
        },
        {
            name: "Documents",
            icon: <DescriptionIcon style={{width: "35px", height:"35px"}}/>
        }
    ]

    return (
        <PageContent>
            <SSuperCard>
                <Title>L'application Numérisk un peu plus en détail :​</Title>
                    <Spacing spacing="8em" />
                <Flex justifyCenter gap={10}>
                    <img src="/numerisklogo.png" alt="Logo Numerisk" width="650px" />
                    <Flex flexColumn>
                        {Tools.map((tool, index) => {
                            let isLastTool = false
                            if(index === Tools.length - 1){
                                isLastTool = true
                            }
                            return (
                                <>
                                    <ToolDiv>{tool.icon} &emsp; {tool.name}</ToolDiv>
                                    {!isLastTool && <Spacing spacing="2em" />}
                                </>
                            )
                        })}
                    </Flex>
                </Flex>
            </SSuperCard>
        </PageContent>
    )
}

export default Deepening