import React, { Component } from 'react'
import { Cards } from '../../assets/Style/Style'
import Card from '../../utilities/Card/Card'

export default class ResourceCards extends Component {
  render() {
    return (
      <>
        <Cards>
          {this.props.resource &&
            <>
              {this.props.resource.map((result, index) =>
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
