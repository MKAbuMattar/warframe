import React, { Component } from 'react'
import { Cards } from '../../assets/Style/Style'
import Card from '../../utilities/Card/Card'

export default class MeleeCards extends Component {
  render() {
    return (
      <>
        <Cards>
          {this.props.melee &&
            <>
              {this.props.melee.map((result, index) =>
                <Card
                  key={index}
                  name={result.name}
                  imgSrc={result.imageName}
                  alt={result.description}
                  description={result.description}
                  tags={result.tags}
                  masteryRankRequirement={result.masteryRankRequirement}
                  category={result.category}
                  type={result.type}
                  disposition={result.disposition}
                  attackSpeed={result.attackSpeed}
                  range={result.range}
                  comboDuration={result.comboDuration}
                  criticalChance={result.criticalChance}
                  criticalMultiplier={result.criticalMultiplier}
                  statusChance={result.statusChance}
                  damageTypes={result.damageTypes}
                  damage={result.damage}
                  totalDamage={result.totalDamage}
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
