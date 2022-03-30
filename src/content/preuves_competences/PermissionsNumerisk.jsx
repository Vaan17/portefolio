import React, { useRef } from 'react'
import { Flex, ImageFrame, Spacing, SubTitle, SuperCard, Title } from '../../styledComponent/styledComponent'

const PermissionsNumerisk = () => {
    const firstCard = useRef(null)
    const secondCard = useRef(null)
    const thirdCard = useRef(null)

    return (
        <>
            <SuperCard className="section1" ref={firstCard}>
                <SubTitle>Mise en place d'une permission d'accès aux différents outils</SubTitle>
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
            </SuperCard>

                <Spacing spacing="2em" />

            <SuperCard className="section1" ref={secondCard}>
                <SubTitle>La restriction d'accès n'était pas complétement efficace</SubTitle>
                <ImageFrame>
                  <img
                    src="/cartoPerm_false_unfixedUrl.PNG"
                    alt="Outil carto inaccessible dans l'appbar"
                    width="100%"
                  />
                </ImageFrame>
            </SuperCard>

                <Spacing spacing="2em" />

            <SuperCard className="section1" ref={thirdCard}>
                <SubTitle>La restriction d'accès est complétement efficace</SubTitle>
                <ImageFrame>
                  <img
                    src="/cartoPerm_false_fixedUrl.PNG"
                    alt="Outil carto accessible dans l'appbar"
                    width="100%"
                  />
                </ImageFrame>
            </SuperCard>
        </>
    )
}

export default PermissionsNumerisk