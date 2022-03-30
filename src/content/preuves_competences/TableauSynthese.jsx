import React from 'react'
import { SuperCard, Title } from '../../styledComponent/styledComponent'

const TableauSynthese = () => {

    return (
        <SuperCard>
          <Title>Tableau de sythèse :</Title>
          <iframe
            src="/Tableau de synthèse BTS SIO SLAM.pdf"
            alt="tableau-synthèse"
            height="1000px"
            width="100%"
          />
        </SuperCard>
    )
}

export default TableauSynthese