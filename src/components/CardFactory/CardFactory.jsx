import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import {CARD_CONFIGS} from '../../config/cardConfigs';

/**
 * Generic factory for creating card components
 * @param {Object} config - Card configuration
 * @param {Function} config.renderModalContent - Modal content renderer function
 * @param {Function} config.altTextTemplate - Function to generate alt text (optional)
 * @param {string} config.ariaLabelPrefix - Prefix for aria-label (e.g., "Warframe")
 * @param {boolean} config.useCdnImages - Whether to use CDN images (optional)
 * @returns {React.Component} - Configured card component
 */
const createCard = (config) => {
  const {
    renderModalContent,
    altTextTemplate,
    ariaLabelPrefix,
    useCdnImages = false,
  } = config;

  const Card = ({result, idx}) => {
    // Default alt text template if not provided
    const defaultAltTextTemplate = `Name: ${result.name}\nDescription: ${result.description || 'N/A'}${result.passiveDescription ? `\nPassive: ${result.passiveDescription}` : ''}`;

    const altText = altTextTemplate
      ? altTextTemplate(result)
      : defaultAltTextTemplate;
    const ariaLabel = `${ariaLabelPrefix}: ${result.name}`;

    return (
      <BaseCard
        item={result}
        index={idx}
        renderModalContent={renderModalContent}
        altTextTemplate={altText}
        ariaLabel={ariaLabel}
        useCdnImages={useCdnImages}
      />
    );
  };

  Card.displayName = `${ariaLabelPrefix}Card`;
  return Card;
};

/**
 * Factory to create multiple card components at once
 * @param {Object} cardsConfig - Object with card configurations keyed by card name
 * @returns {Object} - Object with card components keyed by card name
 */
export const createCards = (cardsConfig) => {
  return Object.entries(cardsConfig).reduce((cards, [cardName, config]) => {
    cards[`${cardName}Card`] = createCard(config);
    return cards;
  }, {});
};

// Generate all card components using the centralized configuration
export const CardComponents = createCards(CARD_CONFIGS);

// Export individual card components for backward compatibility
export const {
  ArcaneCard,
  ArchGunCard,
  ArchMeleeCard,
  ArchwingCard,
  EnemyCard,
  FishCard,
  GearCard,
  GlyphCard,
  MeleeCard,
  MiscellaneousCard,
  ModCard,
  NecramechCard,
  PetCard,
  PrimaryCard,
  QuestCard,
  RailjackCard,
  ResourceCard,
  SecondaryCard,
  SentinelCard,
  SentinelWeaponCard,
  SkinCard,
  WarframeCard,
} = CardComponents;

export {createCard};
export default createCard;
