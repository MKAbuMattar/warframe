import {Fragment, useState} from 'react';

import Modal from 'react-modal';

import XIcon from '../../Icons/XIcon';

import {Card, CardImg, CardTite, CardBtn} from '../../style/Style';

import {
  ModalBtnContainer,
  ModalBtn,
  ModalInfoContainer,
  ModalInfoImg,
} from '../../style/Style';

import {ModalInfoTite, ModalInfoSubtite} from '../../style/Style';

const SentinelCard = ({result, idx}) => {
  const CDN_IMG_URL = process.env.NEXT_PUBLIC_CDN_IMG_URL;

  const myLoader = ({src, width, quality}) =>
    `${CDN_IMG_URL}/${src}?w=${width}&q=${quality || 75}`;

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
              <ModalInfoSubtite>
                Mastery Rank:{' '}
                <span>
                  {result.masteryReq !== undefined ? result.masteryReq : '0'}
                </span>
              </ModalInfoSubtite>

              {result.description !== undefined &&
                result.description !== '' && (
                  <ModalInfoSubtite>
                    Description: <span>{result.description}</span>
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

              {result.vaultDate !== undefined && (
                <Fragment>
                  <ModalInfoSubtite>
                    Release Date: <span>{result.releaseDate}</span>
                  </ModalInfoSubtite>
                </Fragment>
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
            </ModalInfoContainer>
          </Fragment>
        </Modal>
      </Card>
      {/* {console.log(result)} */}
    </Fragment>
  );
};

export default SentinelCard;
