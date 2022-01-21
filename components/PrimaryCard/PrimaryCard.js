import { Fragment, useState } from 'react'

import Link from 'next/link'

import Modal from 'react-modal'

import { Capitalize } from '../../util/Capitalize/Capitalize'

import XIcon from '../../Icons/XIcon'

import { Card, CardImg, CardTite, CardBtn } from '../../style/Style'

import DamageIcons from '../DamageIcons/DamageIcons'

import {
  ModalBtnContainer,
  ModalBtn,
  ModalInfoContainer,
  ModalInfoImg,
} from '../../style/Style'

import {
  ModalInfoTite,
  ModalInfoSubtite,
  ModalInfoAttackSubtite,
} from '../../style/Style'

const PrimaryCard = ({ result, idx }) => {
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
      <Card key={idx}>
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

              {result.name !== undefined && (
                <ModalInfoTite>{result.name}</ModalInfoTite>
              )}

              {result.masteryReq !== undefined && (
                <ModalInfoSubtite>
                  Mastery Rank: <span>{result.masteryReq}</span>
                </ModalInfoSubtite>
              )}

              {/* {result.tags[0] !== undefined && (
                <ModalInfoSubtite>
                  Weapon: <span>{result.tags[0]}</span>
                </ModalInfoSubtite>
              )} */}

              {result.type !== undefined && (
                <ModalInfoSubtite>
                  Weapon type: <span>{result.type}</span>
                </ModalInfoSubtite>
              )}

              {result.description !== undefined && (
                <ModalInfoSubtite>
                  Weapon Description: <span>{result.description}</span>
                </ModalInfoSubtite>
              )}

              {/* {result.attacks.map((element, idx) => (
                <Fragment>
                  <div key={idx}>
                    {result.attacks.length > 1 && (
                      <ModalInfoAttackSubtite>
                        Attack Name: <span>{element.name}</span>
                      </ModalInfoAttackSubtite>
                    )}

                    {result.accuracy !== undefined && (
                      <ModalInfoSubtite>
                        Accuracy: <span>{result.accuracy.toFixed(1)}</span>
                      </ModalInfoSubtite>
                    )}

                    {element.crit_chance !== undefined && (
                      <ModalInfoSubtite>
                        Critical Chance <span>{element.crit_chance}%</span>
                      </ModalInfoSubtite>
                    )}

                    {element.crit_mult !== undefined && (
                      <ModalInfoSubtite>
                        Critical Multiplier <span>{element.crit_mult}x</span>
                      </ModalInfoSubtite>
                    )}

                    {element.speed !== undefined && (
                      <ModalInfoSubtite>
                        Fire Rate: <span>{element.speed}</span>
                      </ModalInfoSubtite>
                    )}

                    {result.magazineSize !== undefined && result.ammo > 0 && (
                      <ModalInfoSubtite>
                        Magazine:{' '}
                        <span>
                          {result.magazineSize !== undefined && (
                            <Fragment>{result.magazineSize}</Fragment>
                          )}

                          {result.ammo > 0 && (
                            <Fragment> / {result.ammo}</Fragment>
                          )}
                        </span>
                      </ModalInfoSubtite>
                    )}

                    {result.multishot !== undefined && (
                      <ModalInfoSubtite>
                        Multishot: <span>{result.multishot}</span>
                      </ModalInfoSubtite>
                    )}

                    {result.noise !== undefined && (
                      <ModalInfoSubtite>
                        Noise: <span>{result.noise}</span>
                      </ModalInfoSubtite>
                    )}

                    {result.reloadTime !== undefined && (
                      <ModalInfoSubtite>
                        Reload: <span>{result.reloadTime}</span>
                      </ModalInfoSubtite>
                    )}

                    {result.disposition !== undefined && (
                      <ModalInfoSubtite>
                        Riven Disposition: <span>{result.disposition}</span>
                      </ModalInfoSubtite>
                    )}

                    {element.status_chance !== undefined && (
                      <ModalInfoSubtite>
                        Status Chance: <span>{element.status_chance}%</span>
                      </ModalInfoSubtite>
                    )}
                    <ModalInfoSubtite>Damage</ModalInfoSubtite>
                    <ModalInfoSubtite>
                      {Object.entries(element.damage).map(
                        ([key, value], idx) => (
                          <Fragment>
                            <ModalInfoSubtite key={idx}>
                              <DamageIcons damage={key} /> {Capitalize(key)}:{' '}
                              <span>{value}</span>
                            </ModalInfoSubtite>
                          </Fragment>
                        ),
                      )}
                    </ModalInfoSubtite>

                    {result.trigger !== undefined && (
                      <ModalInfoSubtite>
                        Trigger: <span>{result.trigger}</span>
                      </ModalInfoSubtite>
                    )}

                    {result.totalDamage !== undefined && (
                      <ModalInfoSubtite>
                        Total Damage: <span>{result.totalDamage}</span>
                      </ModalInfoSubtite>
                    )}
                  </div>
                </Fragment>
              ))} */}

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
                    Estimated Vault Date:{' '}
                    <span>{result.estimatedVaultDate}</span>
                  </ModalInfoSubtite>
                </Fragment>
              )}

              {result.introduced !== undefined && (
                <ModalInfoSubtite>
                  Introduced:{' '}
                  <Link href={result.introduced.url}>
                    <a target="__blank">
                      {result.introduced.name} / Date: {result.introduced.date}
                    </a>
                  </Link>
                </ModalInfoSubtite>
              )}

              {result.wikiaUrl !== undefined && (
                <ModalInfoSubtite>
                  <Link href={result.wikiaUrl}>
                    <a target="__blank">Wiki Link</a>
                  </Link>
                </ModalInfoSubtite>
              )}
            </ModalInfoContainer>
          </Fragment>
        </Modal>
      </Card>
      {/* {console.log(result)} */}
    </Fragment>
  )
}

export default PrimaryCard
