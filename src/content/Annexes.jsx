import React from 'react'
import { Title } from '../styledComponent/styledComponent'
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
        <>
            <SingleCenteredText>
                <STitle>Synthèse de mon parcours</STitle>
            </SingleCenteredText>
        </>
    )
}

export default Annexes