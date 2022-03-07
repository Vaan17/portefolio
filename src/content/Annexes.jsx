import React from 'react'
import { PageContent, Title } from '../styledComponent/styledComponent'
import styled from 'styled-components'

const SingleCenteredText = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`
const STitle = styled(Title)`
    display: flex;
    justify-content: center;
    font-size: 48px;
`

const Annexes = () => {

    return (
        <PageContent>
            <SingleCenteredText>
                <STitle>Synthèse de mon parcours</STitle>
            </SingleCenteredText>
        </PageContent>
    )
}

export default Annexes