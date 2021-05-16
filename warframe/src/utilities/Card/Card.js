import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { CardBox, CardText, CardBtnGroup, CardBtn } from '../../assets/Style/Style'
import './style.css'

export default class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <>
        <CardBox key={this.props.key}>
          <img src={this.props.imgSrc} alt={this.props.alt} title={this.props.name} />
          <CardText>
            {this.props.name &&
              <>
                <h3>{this.props.name}</h3>
              </>
            }
            {this.props.tags &&
              <>
                <p>Category Factions: {this.props.tags}</p>
                <br />
              </>
            }
            {(this.props.masteryRankRequirement >= 0) ? (
              <>
                <br />
                <p>Mastery Rank: {this.props.masteryRankRequirement}</p>
              </>
            ) : (
              <>
              </>
            )}
            {this.props.description &&
              <>
                <br />
                <p>Description:<br /> {this.props.description}</p>
                <br />
              </>
            }
            {this.props.health &&
              <>
                <p>Health: {this.props.health}</p>
              </>
            }
            {(this.props.shield >= 0) ? (
              <>
                <p>Shield: {this.props.shield}</p>
              </>
            ) : (
              <>
              </>
            )}
            {this.props.armor &&
              <>
                <p>Armor: {this.props.armor}</p>
              </>
            }
            {(this.props.energy >= 0) ? (
              <>
                <p>Energy: {this.props.energy}</p>
              </>
            ) : (
              <>
              </>
            )}
            {this.props.speed &&
              <>
                <p>Speed: {this.props.speed}</p>
              </>
            }
            {this.props.type &&
              <>
                <p>Type: {this.props.type}</p>
                <br />
              </>
            }
            {this.props.trigger &&
              <>
                <p>Trigger Type: {this.props.trigger}</p>
                <br />
              </>
            }
            {this.props.fireRate &&
              <>
                <p>Fire Rate: {this.props.fireRate}</p>
              </>
            }
            {this.props.accuracy &&
              <>
                <p>Accuracy: {this.props.accuracy}</p>
              </>
            }
            {this.props.magazineSize &&
              <>
                <p>Magazine Size: {this.props.magazineSize}</p>
              </>
            }
            {this.props.maxAmmo &&
              <>
                <p>Max Ammo: {this.props.maxAmmo}</p>
              </>
            }
            {(this.props.reloadTime >= 0) ? (
              <>
                <p>Reload Time: {this.props.reloadTime}</p>
              </>
            ) : (
              <></>
            )}
            {/* {this.props.disposition &&
              <>
                <p>Disposition: {this.props.disposition}</p>
              </>
            } */}
            {this.props.attackSpeed &&
              <>
                <p>Attack Speed: {this.props.attackSpeed}</p>
              </>
            }
            {this.props.range &&
              <>
                <p>Range: {this.props.range}</p>
              </>
            }
            {this.props.comboDuration &&
              <>
                <p>Combo Duration: {this.props.comboDuration}</p>
              </>
            }
            {this.props.criticalChance &&
              <>
                <p>CriticalChance: {this.props.criticalChance}</p>
              </>
            }
            {this.props.criticalMultiplier &&
              <>
                <p>Critical Multiplier: {this.props.criticalMultiplier}</p>
              </>
            }
            {this.props.statusChance &&
              <>
                <p>Status Chance: {this.props.statusChance}</p>
              </>
            }
            {this.props.damage &&
              <>
                <p>Damage: {this.props.damage}</p>
              </>
            }
            {this.props.totalDamage &&
              <>
                <p>Total Damage: {this.props.totalDamage}</p>
              </>
            }
            {this.props.polarity &&
              <>
                <p>Polarity: {this.props.polarity}</p>
              </>
            }
            {this.props.rarity &&
              <>
                <p>Rarity: {this.props.rarity}</p>
              </>
            }
            {this.props.compatName &&
              <>
                <p>Compat Name: {this.props.compatName}</p>
              </>
            }
          </CardText>
          {this.props.wikiaUrl &&
            <>
              <CardBtnGroup>
                <CardBtn
                  onClick={this.handleOpenModal}
                >
                  More Info
                </CardBtn>
              </CardBtnGroup>
            </>
          }
        </CardBox>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          className="Modal"
          overlayClassName="Overlay"
        >
          <>
            <CardBox key={this.props.key}>
              <img src={this.props.imgSrc} alt={this.props.alt} title={this.props.name} />
              <CardText>
                {this.props.name &&
                  <>
                    <h3>{this.props.name}</h3>
                  </>
                }
                {this.props.tags &&
                  <>
                    <p>Category Factions: {this.props.tags}</p>
                    <br />
                  </>
                }
                {this.props.sex &&
                  <>
                    <br />
                    <p>Gender: {this.props.sex}</p>
                  </>
                }
                {this.props.vaultDate !== undefined ? (
                  <>
                    {(this.props.name).toLowerCase().includes('Prime'.toLowerCase()) ? (
                      <>
                        {(this.props.vaultDate).toLowerCase().includes('n/a'.toLowerCase()) ? (
                          <>
                            <br />
                            <p>Not Vaulted</p>
                          </>
                        ) : (
                          <>
                            <br />
                            <p>Vaulted</p>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                      </>)}
                  </>
                ) : (
                  <></>
                )}
                {(this.props.masteryRankRequirement >= 0) ? (
                  <>
                    <br />
                    <p>Mastery Rank: {this.props.masteryRankRequirement}</p>
                  </>
                ) : (
                  <>
                  </>
                )}
                {this.props.description &&
                  <>
                    <br />
                    <p>Description:<br /> {this.props.description}</p>
                    <br />
                  </>
                }
                {this.props.health &&
                  <>
                    <p>Health: {this.props.health}</p>
                  </>
                }
                {(this.props.shield >= 0) ? (
                  <>
                    <p>Shield: {this.props.shield}</p>
                  </>
                ) : (
                  <>
                  </>
                )}
                {this.props.armor &&
                  <>
                    <p>Armor: {this.props.armor}</p>
                  </>
                }
                {(this.props.energy >= 0) ? (
                  <>
                    <p>Energy: {this.props.energy}</p>
                  </>
                ) : (
                  <>
                  </>
                )}
                {this.props.speed &&
                  <>
                    <p>Speed: {this.props.speed}</p>
                  </>
                }
                {this.props.passiveDescription &&
                  <>
                    <br />
                    <p>Passive: {this.props.passiveDescription}</p>
                  </>
                }
                {this.props.abilities &&
                  <>
                    <br />
                    <p>Abilities</p>
                    <br />
                    {this.props.abilities.map((result, index) =>
                      <>
                        <p key={index}>
                          {result.name}: {result.description}
                        </p>
                        <br />
                      </>
                    )}
                  </>
                }
                {this.props.category &&
                  <>
                    <p>Category: {this.props.category}</p>
                    <br />
                  </>
                }
                {this.props.type &&
                  <>
                    <p>Type: {this.props.type}</p>
                    <br />
                  </>
                }
                {this.props.trigger &&
                  <>
                    <p>Trigger Type: {this.props.trigger}</p>
                    <br />
                  </>
                }
                {this.props.type &&
                  <>
                    <p>Ammo Type: {this.props.type}</p>
                    <br />
                  </>
                }
                {this.props.projectileSpeed &&
                  <>
                    <p>Projectile Speed: {this.props.projectileSpeed}</p>
                    <br />
                  </>
                }
                {this.props.noise &&
                  <>
                    <p>Noise Level: {this.props.noise}</p>
                    <br />
                  </>
                }
                {this.props.fireRate &&
                  <>
                    <p>Fire Rate: {this.props.fireRate}</p>
                  </>
                }
                {this.props.accuracy &&
                  <>
                    <p>Accuracy: {this.props.accuracy}</p>
                  </>
                }
                {this.props.magazineSize &&
                  <>
                    <p>Magazine Size: {this.props.magazineSize}</p>
                  </>
                }
                {this.props.maxAmmo &&
                  <>
                    <p>Max Ammo: {this.props.maxAmmo}</p>
                  </>
                }
                {(this.props.reloadTime >= 0) ? (
                  <>
                    <p>Reload Time: {this.props.reloadTime}</p>
                  </>
                ) : (
                  <></>
                )}
                {/* {this.props.disposition &&
              <>
                <p>Disposition: {this.props.disposition}</p>
              </>
            } */}
                {this.props.attackSpeed &&
                  <>
                    <p>Attack Speed: {this.props.attackSpeed}</p>
                  </>
                }
                {this.props.range &&
                  <>
                    <p>Range: {this.props.range}</p>
                  </>
                }
                {this.props.comboDuration &&
                  <>
                    <p>Combo Duration: {this.props.comboDuration}</p>
                  </>
                }
                {this.props.criticalChance &&
                  <>
                    <p>CriticalChance: {this.props.criticalChance}</p>
                  </>
                }
                {this.props.criticalMultiplier &&
                  <>
                    <p>Critical Multiplier: {this.props.criticalMultiplier}</p>
                  </>
                }
                {this.props.statusChance &&
                  <>
                    <p>Status Chance: {this.props.statusChance}</p>
                  </>
                }
                {this.props.damageTypes &&
                  <>
                    <br />
                    <p>Damage Types</p>
                    <br />
                    {Object.entries(this.props.damageTypes)
                      .map(([key, value]) =>
                        <>
                          <p>{(key).toUpperCase()}: {value}</p>
                        </>
                      )}
                    <br />
                  </>
                }
                {this.props.damage &&
                  <>
                    <p>Damage: {this.props.damage}</p>
                  </>
                }
                {this.props.totalDamage &&
                  <>
                    <p>Total Damage: {this.props.totalDamage}</p>
                  </>
                }
                {this.props.levelStats &&
                  <>
                    <br />
                    <p>Level Stats</p>
                    <br />
                    {this.props.levelStats.map((result, index) =>
                      <>
                        <p key={index}>
                          Stats: {result.stats}
                        </p>
                        <br />
                      </>
                    )}
                  </>
                }
              </CardText>
              {this.props.wikiaUrl &&
                <>
                  <CardBtnGroup>
                    <CardBtn
                      href={this.props.wikiaUrl}
                      target="__block"
                    >
                      Wiki
                </CardBtn>
                    <CardBtn
                      onClick={this.handleCloseModal}
                    >
                      Close Info
                </CardBtn>
                  </CardBtnGroup>
                </>
              }
            </CardBox>
          </>
        </ReactModal>
      </>
    )
  }
}
