import { Fragment, useState } from 'react'

import Link from 'next/link'

import Modal from 'react-modal'

import XIcon from '../../Icons/XIcon'
import AbilitieIcons from '../AbilitieIcons/AbilitieIcons'

import { Card, CardImg, CardTite, CardBtn } from '../../style/Style'
import {
  ModalBtnContainer,
  ModalBtn,
  ModalInfoContainer,
  ModalInfoImg,
  ModalInfoAbilities,
  ModalInfoAbilitie,
} from '../../style/Style'
import {
  ModalInfoSubtiteAbilitie,
  ModalInfoTite,
  ModalInfoSubtite,
} from '../../style/Style'

const QuestCard = ({ result, idx }) => {
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

              <ModalInfoTite>{result.name}</ModalInfoTite>

              {result.description !== undefined && (
                <ModalInfoSubtite>
                  Description: <span>{result.description}</span>
                </ModalInfoSubtite>
              )}

              {result.releaseDate !== undefined && (
                <ModalInfoSubtite>
                  Release Date: <span>{result.releaseDate}</span>
                </ModalInfoSubtite>
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

export default QuestCard
