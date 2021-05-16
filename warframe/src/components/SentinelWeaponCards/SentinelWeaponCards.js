import React, { Component } from 'react'
import { Cards } from '../../assets/Style/Style'
import Card from '../../utilities/Card/Card'

export default class SentinelWeaponCards extends Component {
  render() {
    return (
      <>
        <Cards>
          {this.props.sentinelWeapon &&
            <>
              {this.props.sentinelWeapon.map((result, index) =>
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
                  trigger={result.trigger}
                  projectileSpeed={result.projectileSpeed}
                  noise={result.noise}
                  fireRate={result.fireRate}
                  accuracy={result.accuracy}
                  magazineSize={result.magazineSize}
                  maxAmmo={result.maxAmmo}
                  reloadTime={result.reloadTime}
                  disposition={result.disposition}
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
