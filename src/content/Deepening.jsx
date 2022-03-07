import { Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { PageContent, Spacing, Title, SuperCard, Flex } from '../styledComponent/styledComponent'
import MapIcon from '@mui/icons-material/Map'
import PanToolIcon from '@mui/icons-material/PanTool'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import PeopleIcon from '@mui/icons-material/People'
import DescriptionIcon from '@mui/icons-material/Description';

const GridContent = styled.div`
    display: flex;
    flex-direction: column !important;
    align-items: ${(props) => props.alignment ?? 'flex-start'} !important;
    padding: ${(props) => props.padding ?? 'none'} !important;
    font-size: 28px;
    font-weight: 550;
`
const ToolDiv = styled.div`
    display: flex;
    align-items: end;
    font-size: 22px;
`

const Deepening = () => {

    const Tools = [
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
            <SuperCard>
                <Title>L'application Numérisk un peu plus en détail :​</Title>
                    <Spacing spacing="3em" />
                <Flex spaceAround>
                    <img src="/numerisklogo.png" alt="Logo Numerisk" width="40%" />
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
            </SuperCard>
        </PageContent>
    )
}

export default Deepening