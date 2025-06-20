import React, {useState, useCallback, useMemo} from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import XIcon from '../../Icons/XIcon';
import {Card, CardImg, CardTitle, CardBtn} from '../../style/Style';
import {
  ModalBtnContainer,
  ModalBtn,
  ModalInfoContainer,
  ModalInfoImg,
  ModalInfoTite,
  ModalInfoSubtite,
} from '../../style/Style';

/**
 * Reusable base card component that handles common card functionality
 * @param {Object} props
 * @param {Object} props.item - The data item to display
 * @param {number} props.index - The index of the item
 * @param {Function} props.renderModalContent - Function to render custom modal content
 * @param {string} props.altTextTemplate - Template for alt text (optional)
 * @param {string} props.fallbackImageSrc - Fallback image source (optional)
 * @param {Function} props.onCardClick - Custom click handler (optional)
 * @param {boolean} props.showModal - Whether to show modal on button click (default: true)
 * @param {string} props.buttonText - Custom button text (default: "Info")
 * @param {Object} props.customStyles - Custom styles for card elements (optional)
 * @param {Function} props.imageLoader - Custom image loader function (optional)
 * @param {string} props.imageSrc - Custom image source (optional)
 * @param {string} props.title - Custom title (optional)
 * @param {string} props.altText - Custom alt text (optional)
 */
const BaseCard = React.memo(
  ({
    item,
    index,
    renderModalContent,
    altTextTemplate,
    fallbackImageSrc = '/icon/logo192.png',
    onCardClick,
    showModal = true,
    buttonText = 'Info',
    customStyles = {},
    ariaLabel,
    imageLoader: customImageLoader,
    imageSrc,
    title,
    altText: customAltText,
    ...props
  }) => {
    const CDN_IMG_URL = process.env.NEXT_PUBLIC_CDN_IMG_URL;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    // Memoized image loader - use custom loader if provided, otherwise default
    const imageLoader = useMemo(() => {
      if (customImageLoader) {
        return customImageLoader;
      }
      return ({src, width, quality}) =>
        `${CDN_IMG_URL}/${src}?w=${width}&q=${quality || 75}`;
    }, [customImageLoader, CDN_IMG_URL]);

    // Determine image source - use custom imageSrc if provided, otherwise item.imageName
    const imageSource = imageSrc || item.imageName;

    // Determine title - use custom title if provided, otherwise item.name
    const displayTitle = title || item.name;

    // Memoized alt text - use custom altText if provided
    const altText = useMemo(() => {
      if (customAltText) {
        return customAltText;
      }
      if (altTextTemplate && typeof altTextTemplate === 'function') {
        return altTextTemplate(item);
      }
      return `${item.name}${item.description ? ` - ${item.description}` : ''}${
        item.type ? ` (${item.type})` : ''
      }`;
    }, [customAltText, item, altTextTemplate]);

    // Modal handlers
    const openModal = useCallback(() => {
      if (showModal) {
        setModalIsOpen(true);
      }
      if (onCardClick) {
        onCardClick(item, index);
      }
    }, [showModal, onCardClick, item, index]);

    const closeModal = useCallback(() => {
      setModalIsOpen(false);
    }, []);

    const handleKeyPress = useCallback(
      (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openModal();
        }
      },
      [openModal],
    );

    const handleImageLoad = useCallback(() => {
      setImageLoading(false);
    }, []);

    const handleImageError = useCallback(() => {
      setImageError(true);
      setImageLoading(false);
    }, []);

    return (
      <>
        <Card
          key={index}
          style={customStyles.card}
          role="button"
          tabIndex={0}
          aria-label={ariaLabel || `View details for ${displayTitle}`}
          onKeyPress={handleKeyPress}
          {...props}
        >
          {/* Image with loading state and error handling */}
          <CardImg
            loader={imageLoader}
            src={imageError ? fallbackImageSrc : imageSource}
            title={displayTitle}
            alt={altText}
            width={300}
            height={300}
            objectFit="contain"
            style={customStyles.image}
            onLoad={handleImageLoad}
            onError={handleImageError}
            priority={index < 4} // Prioritize first 4 images
          />

          <CardTitle style={customStyles.title}>{displayTitle}</CardTitle>

          <CardBtn
            onClick={openModal}
            style={customStyles.button}
            aria-label={`${buttonText} for ${displayTitle}`}
          >
            {buttonText}
          </CardBtn>

          {/* Modal */}
          {showModal && (
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              ariaHideApp={false}
              className="Modal"
              overlayClassName="Overlay"
              aria-labelledby="modal-title"
              aria-describedby="modal-content"
            >
              <ModalBtnContainer>
                <ModalBtn onClick={closeModal} aria-label="Close modal">
                  <XIcon color="#ffffff" />
                </ModalBtn>
              </ModalBtnContainer>

              <ModalInfoContainer>
                <ModalInfoImg
                  src={
                    customImageLoader
                      ? customImageLoader({
                          src: imageSource,
                          width: 300,
                          quality: 75,
                        })
                      : `${CDN_IMG_URL}/${imageSource}`
                  }
                  alt={displayTitle}
                  title={displayTitle}
                />
                <ModalInfoTite id="modal-title">{displayTitle}</ModalInfoTite>

                <div id="modal-content">
                  {renderModalContent ? (
                    renderModalContent(item)
                  ) : (
                    <DefaultModalContent item={item} />
                  )}
                </div>
              </ModalInfoContainer>
            </Modal>
          )}
        </Card>
      </>
    );
  },
);

BaseCard.displayName = 'BaseCard';

/**
 * Default modal content renderer
 */
const DefaultModalContent = React.memo(({item}) => (
  <>
    {item.type && (
      <ModalInfoSubtite>
        Type: <span>{item.type}</span>
      </ModalInfoSubtite>
    )}

    {item.category && (
      <ModalInfoSubtite>
        Category: <span>{item.category}</span>
      </ModalInfoSubtite>
    )}

    {item.description && (
      <ModalInfoSubtite>
        Description: <span>{item.description}</span>
      </ModalInfoSubtite>
    )}

    {item.tradable !== undefined && (
      <ModalInfoSubtite>
        Tradable: <span>{item.tradable ? 'Yes' : 'No'}</span>
      </ModalInfoSubtite>
    )}
  </>
));

DefaultModalContent.displayName = 'DefaultModalContent';

export default BaseCard;
