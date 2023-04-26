import { Fragment, useState } from 'react'

import Link from 'next/link'

import Modal from 'react-modal'

import { Capitalize } from '../../util/Capitalize/Capitalize'

import XIcon from '../../Icons/XIcon'

import { Card, CardImg, CardTite, CardBtn } from '../../style/Style'

import DamageIcons from '../DamageIcons/DamageIcons'

import { ModalBtnContainer, ModalBtn, ModalInfoContainer, ModalInfoImg } from '../../style/Style'
import { ModalInfoTite, ModalInfoSubtite, ModalInfoAttackSubtite } from '../../style/Style'

import { generateUniqueKey } from '../../util/generateUniqueKey/index.js'

const MeleeCard = ({ result, idx }) => {
  const CDN_IMG_URL = process.env.NEXT_PUBLIC_CDN_IMG_URL

  const myLoader = ({ src, width, quality }) =>
    `${CDN_IMG_URL}/${src}?w=${width}&q=${quality || 75}`

  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Fragment>
      <Card key={generateUniqueKey(idx)}>
        <CardImg
          loader={myLoader}
          src={result.imageName}
          title={result.name}
          alt={`Name: ${result.name}\n\rDescription:${result.description}\n\rPassive${result.passiveDescription}`}
          width={300}
          height={300}
          objectFit="contain"
        />
        <CardTite>{result.name}</CardTite>

        <CardBtn onClick={openModal}>Info</CardBtn>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          className="Modal"
          overlayClassName="Overlay"
        >
          <Fragment>
            <ModalBtnContainer>
              <ModalBtn onClick={closeModal}>
                <XIcon color="#ffffff" />
              </ModalBtn>
            </ModalBtnContainer>
            <ModalInfoContainer>
              <ModalInfoImg
                src={`${CDN_IMG_URL}/${result.imageName}`}
                alt={`Name: ${result.name}\n\rDescription:${result.description}\n\rPassive${result.passiveDescription}`}
                title={result.name}
              />
              <ModalInfoTite>{result.name}</ModalInfoTite>
              <ModalInfoSubtite>
                Mastery Rank: <span>{result.masteryReq}</span>
              </ModalInfoSubtite>

              {result.tags && (
                <ModalInfoSubtite>
                  Weapon: <span>{result.tags[0]}</span>
                </ModalInfoSubtite>
              )}

              <ModalInfoSubtite>
                Weapon type: <span>{result.type}</span>
              </ModalInfoSubtite>
              <ModalInfoSubtite>
                Weapon Description: <span>{result.description}</span>
              </ModalInfoSubtite>

              {result.attacks !== undefined &&
                result.attacks.map((element, idx) => (
                  <Fragment>
                    <div key={generateUniqueKey(idx)}>
                      {result.attacks.length > 1 && (
                        <ModalInfoAttackSubtite>
                          Attack Name: <span>{element.name}</span>
                        </ModalInfoAttackSubtite>
                      )}

                      <ModalInfoSubtite>
                        Attack Speed: <span>{element.speed}</span>
                      </ModalInfoSubtite>

                      <ModalInfoSubtite>
                        Critical Chance: <span>{element.crit_chance}%</span>
                      </ModalInfoSubtite>

                      <ModalInfoSubtite>
                        Critical Multiplier: <span>{element.crit_mult}x</span>
                      </ModalInfoSubtite>

                      <ModalInfoSubtite>
                        Range: <span>{result.range}m</span>
                      </ModalInfoSubtite>

                      <ModalInfoSubtite>
                        Riven Disposition: <span>{result.disposition}</span>
                      </ModalInfoSubtite>

                      <ModalInfoSubtite>
                        Status Chance: <span>{element.status_chance}%</span>
                      </ModalInfoSubtite>

                      <ModalInfoSubtite>Damage</ModalInfoSubtite>

                      <ModalInfoSubtite>
                        {Object.entries(element.damage).map(([key, value], idx) => (
                          <Fragment>
                            <ModalInfoSubtite key={generateUniqueKey(idx)}>
                              <DamageIcons damage={key} key={generateUniqueKey(idx)} />{' '}
                              {Capitalize(key)}: <span>{value}</span>
                            </ModalInfoSubtite>
                          </Fragment>
                        ))}
                      </ModalInfoSubtite>

                      {element.slam !== undefined && (
                        <Fragment>
                          <ModalInfoSubtite>
                            Slam Damage: <span>{element.slam.damage}</span>
                          </ModalInfoSubtite>

                          <ModalInfoSubtite>
                            Radial Damage: <span>{element.slam.radial.damage}</span>
                          </ModalInfoSubtite>

                          <ModalInfoSubtite>
                            Slam Radius : <span>{element.slam.radial.radius}m</span>
                          </ModalInfoSubtite>
                        </Fragment>
                      )}

                      <ModalInfoSubtite>
                        Heavy Damage: <span>{result.heavyAttackDamage}</span>
                      </ModalInfoSubtite>

                      <ModalInfoSubtite>
                        Slide Attack: <span>{result.slideAttack}</span>
                      </ModalInfoSubtite>

                      <ModalInfoSubtite>
                        Total Damage: <span>{result.totalDamage}</span>
                      </ModalInfoSubtite>

                      <ModalInfoSubtite>
                        Wind-up : <span>{result.windUp}s</span>
                      </ModalInfoSubtite>
                    </div>
                  </Fragment>
                ))}

              {result.releaseDate !== undefined && (
                <ModalInfoSubtite>
                  Release Date: <span>{result.releaseDate}</span>
                </ModalInfoSubtite>
              )}

              {result.vaultDate !== 'n/a' && result.vaultDate !== undefined && (
                <Fragment>
                  <ModalInfoSubtite>
                    Vault Date: <span>{result.vaultDate}</span>
                  </ModalInfoSubtite>
                </Fragment>
              )}

              {result.vaultDate === 'n/a' && (
                <Fragment>
                  <ModalInfoSubtite>
                    Estimated Vault Date: <span>{result.estimatedVaultDate}</span>
                  </ModalInfoSubtite>
                </Fragment>
              )}

              {result.introduced !== undefined &&
                result.introduced.name &&
                result.introduced.date && (
                  <ModalInfoSubtite>
                    Introduced:{' '}
                    <Link legacyBehavior href={result.introduced.url}>
                      <a target="__blank">
                        {result.introduced.name} / Date: {result.introduced.date}
                      </a>
                    </Link>
                  </ModalInfoSubtite>
                )}

              {result.wikiaUrl !== undefined && (
                <ModalInfoSubtite>
                  <Link legacyBehavior href={result.wikiaUrl}>
                    <a target="__blank">Wiki Link</a>
                  </Link>
                </ModalInfoSubtite>
              )}
            </ModalInfoContainer>
          </Fragment>
        </Modal>
        {/* {console.log(result)} */}
      </Card>
    </Fragment>
  )
}

export default MeleeCard
