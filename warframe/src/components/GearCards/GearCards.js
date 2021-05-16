import React, { Component } from 'react'
import { Cards } from '../../assets/Style/Style'
import Card from '../../utilities/Card/Card'

export default class GearCards extends Component {
  render() {
    return (
      <>
        <Cards>
          {this.props.gear &&
            <>
              {this.props.gear.map((result, index) =>
                <Card
                  key={index}
                  name={result.name}
                  imgSrc={result.imageName}
                  alt={result.description}
                  description={result.description}
                  masteryRankRequirement={result.masteryRankRequirement}
                  health={result.health}
                  shield={result.shield}
                  armor={result.armor}
                  energy={result.energy}
                  speed={result.speed}
                  passiveDescription={result.passiveDescription}
                  abilities={result.abilities}
                  sex={result.sex}
                  vaultDate={result.vaultDate}
                  wikiaUrl={result.wikiaUrl}
                />
              )}
            </>
          }
        </Cards>
      </>
    )
  }
}
