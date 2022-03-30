import React, { useRef } from 'react'
import { Flex, ImageFrame, Spacing, SubTitle, SuperCard, Title } from '../../styledComponent/styledComponent'

const VueMobileNumerisk = () => {
    const firstCard = useRef(null)
    const secondCard = useRef(null)
    const thirdCard = useRef(null)

    return (
        <>
            <SuperCard className="section1" ref={firstCard}>
                <SubTitle>Vue actuel de table recensant les différentes crises sur ordinateur</SubTitle>
                <ImageFrame>
                  <img
                    src="/current_daybook_display.PNG"
                    alt="SuperReactTable PC"
                    width="100%"
                  />
                </ImageFrame>
            </SuperCard>

                    <Spacing spacing="2em" />

            <SuperCard className="section2" ref={secondCard}>
                <SubTitle>Vue mobile de la même table mais sur support mobile</SubTitle>
                <Flex spaceAround>
                  <ImageFrame width={"40%"}>
                    <img
                      src="/mobile_daybook_old.PNG"
                      alt="SuperReactTable pas responsive sur mobile"
                      width="100%"
                    />
                  </ImageFrame>
                </Flex>
            </SuperCard>

                    <Spacing spacing="2em" />

            <SuperCard className="section3" ref={thirdCard}>
                <SubTitle>Amélioration de la vue de la table sur mobile</SubTitle>
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
            </SuperCard>
        </>
    )
}

export default VueMobileNumerisk