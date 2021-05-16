import React, { Component } from 'react'
import { Cards } from '../../assets/Style/Style'
import Card from '../../utilities/Card/Card'

export default class ModCards extends Component {
  render() {
    return (
      <>
        <Cards>
          {this.props.mod &&
            <>
              {this.props.mod.map((result, index) =>
                <Card
                  key={index}
                  name={result.name}
                  imgSrc={result.imageName}
                  alt={result.name}
                  polarity={result.polarity}
                  rarity={result.rarity}
                  compatName={result.compatName}
                  type={result.type}
                  levelStats={result.levelStats}
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
