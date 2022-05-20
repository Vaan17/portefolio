import React from 'react'
import { SuperCard, Title } from '../../styledComponent/styledComponent'
import tableauSynthese from "../../img/Tableau de synthèse BTS SIO SLAM.pdf"

const TableauSynthese = () => {

    return (
        <SuperCard>
          <Title>Tableau de sythèse :</Title>
          <iframe
            src={tableauSynthese}
            alt="tableau-synthèse"
            height="1000px"
            width="100%"
          />
        </SuperCard>
    )
}

export default TableauSynthese