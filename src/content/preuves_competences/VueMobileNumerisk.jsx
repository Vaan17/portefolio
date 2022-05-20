import React, { useRef } from 'react'
import { Flex, ImageFrame, Spacing, SubTitle, SuperCard } from '../../styledComponent/styledComponent'
import current_daybook_display from "../../img/current_daybook_display.PNG"
import mobile_daybook_old from "../../img/mobile_daybook_old.PNG"
import mobile_daybook_done from "../../img/mobile_daybook_done.PNG"
import mobile_daybook_done_bottom from "../../img/mobile_daybook_done_bottom.PNG"

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
                    src={current_daybook_display}
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
                      src={mobile_daybook_old}
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
                      src={mobile_daybook_done}
                      alt="SuperReactTable responsive sur mobile"
                      width="100%"
                    />
                  </ImageFrame>
                  <ImageFrame width={"40%"}>
                    <img
                      src={mobile_daybook_done_bottom}
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