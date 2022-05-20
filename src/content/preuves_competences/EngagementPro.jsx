import React from 'react'
import { ImageFrame, SuperCard, Title } from '../../styledComponent/styledComponent'
import plan_action from "../../img/plan_action.PNG"

const EngagementPro = () => {

    return (
        <SuperCard>
          <Title>VI/ Organiser son développement professionnel :</Title>
          <ImageFrame>
            <img
              src={plan_action}
              alt="Plan d'action professionnel"
              width="100%"
            />
          </ImageFrame>
        </SuperCard>
    )
}

export default EngagementPro