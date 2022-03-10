import React, { useState } from 'react'
import styled from 'styled-components'
import { ENDBAR_HEIGHT, NAVBAR_HEIGHT, PAGECONTENT_PADDING, WINDOW_HEIGHT } from './Constants'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from '@mui/icons-material/Circle';
import { IconButton, Tooltip } from '@mui/material';

const ScrollNavigation = styled.div`
    /* =-=-=-=-= Default =-=-=-=-= */
        position: absolute;
        height: calc(${WINDOW_HEIGHT}px - ${NAVBAR_HEIGHT}em - ${ENDBAR_HEIGHT}em - ${PAGECONTENT_PADDING * 2}em);
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 3em;
    /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`
const BlueCircle = styled(CircleIcon)`
    /* =-=-=-=-= Default =-=-=-=-= */
        color: #4abcff
    /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`
const BlueUncheckedRadio = styled(RadioButtonUncheckedIcon)`
    /* =-=-=-=-= Default =-=-=-=-= */
        color: #86c3ff
    /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`

const ScrollJump = ({arrayOfRefs}) => {
    const [currentPosition, setCurrentPosition] = useState(arrayOfRefs[0].anchor)
    const scrollTo = (ref) => {
        setCurrentPosition(ref)
        return ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return(
        <ScrollNavigation>
            {arrayOfRefs.map((ref) => {
                    return (
                        <Tooltip title={ref.title}>
                            <IconButton onClick={()=>scrollTo(ref.anchor)}>
                                {currentPosition === ref.anchor
                                 ? <BlueCircle fontSize='medium'/>
                                 : <BlueUncheckedRadio fontSize='medium'/>                             
                                }
                            </IconButton>
                        </Tooltip>
                    )
                
            })}
        </ScrollNavigation>
    )
}

export default ScrollJump