// Card configurations for factory pattern consolidation
import {
  ArcaneModalContent,
  ArchwingModalContent,
  CompanionModalContent,
  EnemyModalContent,
  MeleeWeaponModalContent,
  ModModalContent,
  NecramechModalContent,
  PrimaryWeaponModalContent,
  QuestModalContent,
  RailjackModalContent,
  SimpleModalContent,
  WarframeModalContent,
} from '../components/BaseCard/ModalContentRenderers';

/**
 * Centralized card configurations for all entity types
 * Each configuration defines how a card should be rendered
 */
export const CARD_CONFIGS = {
  // Warframe entities
  Warframe: {
    renderModalContent: (item) => <WarframeModalContent item={item} />,
    ariaLabelPrefix: 'Warframe',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`,
    useCdnImages: false,
  },

  // Archwing entities
  Archwing: {
    renderModalContent: (item) => <ArchwingModalContent item={item} />,
    ariaLabelPrefix: 'Archwing',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`,
    useCdnImages: false,
  },

  // Necramech entities
  Necramech: {
    renderModalContent: (item) => <NecramechModalContent item={item} />,
    ariaLabelPrefix: 'Necramech',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`,
    useCdnImages: true,
  },

  // Weapon entities
  Primary: {
    renderModalContent: (item) => <PrimaryWeaponModalContent item={item} />,
    ariaLabelPrefix: 'Primary weapon',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`,
    useCdnImages: false,
  },

  Secondary: {
    renderModalContent: (item) => <PrimaryWeaponModalContent item={item} />,
    ariaLabelPrefix: 'Secondary weapon',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`,
    useCdnImages: false,
  },

  Melee: {
    renderModalContent: (item) => <MeleeWeaponModalContent item={item} />,
    ariaLabelPrefix: 'Melee weapon',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`,
    useCdnImages: false,
  },

  ArchGun: {
    renderModalContent: (item) => <PrimaryWeaponModalContent item={item} />,
    ariaLabelPrefix: 'Archwing gun',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`,
    useCdnImages: false,
  },

  ArchMelee: {
    renderModalContent: (item) => <MeleeWeaponModalContent item={item} />,
    ariaLabelPrefix: 'Archwing melee',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`,
    useCdnImages: false,
  },

  SentinelWeapon: {
    renderModalContent: (item) => <PrimaryWeaponModalContent item={item} />,
    ariaLabelPrefix: 'Sentinel weapon',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`,
    useCdnImages: true,
  },

  // Companion entities
  Sentinel: {
    renderModalContent: (item) => <CompanionModalContent item={item} />,
    ariaLabelPrefix: 'Sentinel',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`,
    useCdnImages: false,
  },

  Pet: {
    renderModalContent: (item) => <CompanionModalContent item={item} />,
    ariaLabelPrefix: 'Pet',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`,
    useCdnImages: false,
  },

  // Enhancement entities
  Arcane: {
    renderModalContent: (item) => <ArcaneModalContent item={item} />,
    ariaLabelPrefix: 'Arcane',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}`,
    useCdnImages: true,
  },

  Mod: {
    renderModalContent: (item) => <ModModalContent item={item} />,
    ariaLabelPrefix: 'Mod',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`,
    useCdnImages: false,
  },

  // Mission and Content entities
  Quest: {
    renderModalContent: (item) => <QuestModalContent item={item} />,
    ariaLabelPrefix: 'Quest',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}`,
    useCdnImages: false,
  },

  Railjack: {
    renderModalContent: (item) => <RailjackModalContent item={item} />,
    ariaLabelPrefix: 'Railjack',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}`,
    useCdnImages: true,
  },

  // Simple entities (using SimpleModalContent)
  Fish: {
    renderModalContent: (item) => <SimpleModalContent item={item} />,
    ariaLabelPrefix: 'Fish',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}`,
    useCdnImages: false,
  },

  Gear: {
    renderModalContent: (item) => <SimpleModalContent item={item} />,
    ariaLabelPrefix: 'Gear',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}`,
    useCdnImages: false,
  },

  Glyph: {
    renderModalContent: (item) => <SimpleModalContent item={item} />,
    ariaLabelPrefix: 'Glyph',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}`,
    useCdnImages: false,
  },

  Miscellaneous: {
    renderModalContent: (item) => <SimpleModalContent item={item} />,
    ariaLabelPrefix: 'Miscellaneous',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}`,
    useCdnImages: false,
  },

  Resource: {
    renderModalContent: (item) => <SimpleModalContent item={item} />,
    ariaLabelPrefix: 'Resource',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}`,
    useCdnImages: false,
  },

  Skin: {
    renderModalContent: (item) => <SimpleModalContent item={item} />,
    ariaLabelPrefix: 'Skin',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`,
    useCdnImages: true,
  },

  // Enemy entities
  Enemy: {
    renderModalContent: (item) => <EnemyModalContent item={item} />,
    ariaLabelPrefix: 'Enemy',
    altTextTemplate: (result) =>
      `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`,
    useCdnImages: false,
  },
};

/**
 * Helper function to get card configuration by entity type
 * @param {string} entityType - The type of entity (Warframe, Primary, etc.)
 * @returns {Object} - Card configuration object
 */
export const getCardConfig = (entityType) => {
  const config = CARD_CONFIGS[entityType];
  if (!config) {
    console.warn(`No card configuration found for entity type: ${entityType}`);
    // Return default configuration
    return {
      renderModalContent: (item) => <SimpleModalContent item={item} />,
      ariaLabelPrefix: entityType || 'Item',
      altTextTemplate: (result) =>
        `Name: ${result.name}\nDescription: ${result.description || 'N/A'}`,
      useCdnImages: false,
    };
  }
  return config;
};

/**
 * Generate all card components using the factory pattern
 */
export const generateCardComponents = () => {
  // This will be imported and used by the CardFactory
  return CARD_CONFIGS;
};

export default CARD_CONFIGS;
