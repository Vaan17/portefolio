import React, { useRef } from 'react'
import { Flex, ImageFrame, Spacing, SubTitle, SuperCard, Title } from '../../styledComponent/styledComponent'
import oldindicateurs from "../../img/oldindicateurs.PNG"
import indicateurnumerisk from "../../img/indicateurnumerisk.PNG"

const IndicateursNumerisk = () => {
    const firstCard = useRef(null)
    const secondCard = useRef(null)

    return (
        <>
            <SuperCard className="section1" ref={firstCard}>
                <Title>Développement de l'outil : Indicateur Numérisk</Title>
                <Flex flexColumn>
                    <SubTitle>3.1.1: Ancienne version non-fonctionnelle des indicateurs Numérisk</SubTitle>
                    <ImageFrame>
                      <img
                        src={oldindicateurs}
                        alt="anciens-indicateurs-numerisk"
                        width="100%"
                      />
                    </ImageFrame>
                </Flex>
            </SuperCard>

                    <Spacing spacing="2em" />

            <SuperCard className="section1" ref={secondCard}>
                     <SubTitle>3.1.2: Nouvelle version fonctionnelle des indicateurs Numérisk</SubTitle>
                    <ImageFrame>
                      <img
                        src={indicateurnumerisk}
                        alt="indicateurs-numerisk-fini"
                        width="100%"
                      />
                    </ImageFrame>
            </SuperCard>
        </>
    )
}

export default IndicateursNumerisk