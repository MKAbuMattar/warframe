import {Fragment, useState} from 'react';
import Modal from 'react-modal';
import XIcon from '../../Icons/XIcon';
import {Card, CardImg, CardTite, CardBtn} from '../../style/Style';
import {
  ModalBtnContainer,
  ModalBtn,
  ModalInfoContainer,
  ModalInfoImg,
  ModalInfoTite,
  ModalInfoSubtite,
} from '../../style/Style';

const SkinCard = ({result, idx}) => {
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
                alt={result.name}
                title={result.name}
              />
              <ModalInfoTite>{result.name}</ModalInfoTite>

              {result.type && (
                <ModalInfoSubtite>
                  Type: <span>{result.type}</span>
                </ModalInfoSubtite>
              )}

              {result.category && (
                <ModalInfoSubtite>
                  Category: <span>{result.category}</span>
                </ModalInfoSubtite>
              )}

              {result.description && (
                <ModalInfoSubtite>
                  Description: <span>{result.description}</span>
                </ModalInfoSubtite>
              )}

              {result.tradable !== undefined && (
                <ModalInfoSubtite>
                  Tradable: <span>{result.tradable ? 'Yes' : 'No'}</span>
                </ModalInfoSubtite>
              )}
            </ModalInfoContainer>
          </Fragment>
        </Modal>
      </Card>
    </Fragment>
  );
};

export default SkinCard;
