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
  ModalInfoSubtiteAbilitie,
  ModalInfoAbilities,
  ModalInfoAbilitie,
} from '../../style/Style'

const EnemyCard = ({ result, idx }) => {
  const myLoader = ({ src, width, quality }) =>
    `/warframe/enemy/${src}?w=${width}&q=${quality || 75}`

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
          src={`${result.name}.png`}
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
              <CardImg
                loader={myLoader}
                src={`${result.name}.png`}
                title={result.name}
                alt={`Name: ${result.name}\n\rDescription:${result.description}\n\rPassive${result.passiveDescription}`}
                width={300}
                height={300}
                objectFit="contain"
              />

              <ModalInfoTite>{result.name}</ModalInfoTite>

              {result.description !== undefined && result.description !== '' && (
                <ModalInfoSubtite>
                  Description: <span>{result.description}</span>
                </ModalInfoSubtite>
              )}

              {result.type !== undefined && (
                <ModalInfoSubtite>
                  Type: <span>{result.type}</span>
                </ModalInfoSubtite>
              )}

              {result.health !== undefined && (
                <ModalInfoSubtite>
                  Health:{' '}
                  <span>
                    {result.health} ({Number(result.health) * 3} at R30)
                  </span>
                </ModalInfoSubtite>
              )}

              {result.shield !== undefined && (
                <ModalInfoSubtite>
                  Shield:{' '}
                  <span>
                    {result.shield} ({Number(result.shield) * 3} at R30)
                  </span>
                </ModalInfoSubtite>
              )}

              {result.armor !== undefined && (
                <ModalInfoSubtite>
                  Armor: <span>{result.armor}</span>
                </ModalInfoSubtite>
              )}

              {result.resistances !== undefined && (
                <Fragment>
                  <ModalInfoSubtiteAbilitie>
                    Resistances
                  </ModalInfoSubtiteAbilitie>
                  <ModalInfoAbilities>
                    {result.resistances.map((element, idx) => (
                      <ModalInfoAbilitie key={idx}>
                        <ModalInfoSubtite>{element.type}</ModalInfoSubtite>
                        {element.affectors.map((affector, idx) => (
                          <Fragment>
                            <ModalInfoSubtite key={idx}>
                              <DamageIcons damage={affector.element} />{' '}
                              {affector.element}
                              {': '}
                              <span>{affector.modifier}</span>
                            </ModalInfoSubtite>
                          </Fragment>
                        ))}
                      </ModalInfoAbilitie>
                    ))}
                  </ModalInfoAbilities>
                </Fragment>
              )}

              {result.drops !== undefined && (
                <Fragment>
                  <ModalInfoSubtiteAbilitie>Drops</ModalInfoSubtiteAbilitie>
                  <ModalInfoAbilities>
                    {result.drops.map((element, idx) => (
                      <ModalInfoAbilitie key={idx}>
                        {element.rarity !== undefined &&
                          element.chance !== undefined &&
                          element.chance !== null &&
                          element.type !== undefined && (
                            <Fragment>
                              <ModalInfoSubtite>
                                {element.location}
                              </ModalInfoSubtite>

                              {element.rarity !== undefined && (
                                <ModalInfoSubtite>
                                  <span>Rarity: {element.rarity}</span>
                                </ModalInfoSubtite>
                              )}

                              {element.chance !== undefined &&
                                element.chance !== null && (
                                  <ModalInfoSubtite>
                                    <span>
                                      Drop Chance: {element.chance.toFixed(2)}
                                    </span>
                                  </ModalInfoSubtite>
                                )}

                              {element.type !== undefined && (
                                <ModalInfoSubtite>
                                  <span>Drop Type: {element.type}</span>
                                </ModalInfoSubtite>
                              )}
                            </Fragment>
                          )}
                      </ModalInfoAbilitie>
                    ))}
                  </ModalInfoAbilities>
                </Fragment>
              )}
            </ModalInfoContainer>
          </Fragment>
        </Modal>
      </Card>
      {/* {console.log(result)} */}
    </Fragment>
  )
}

export default EnemyCard
