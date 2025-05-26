// Import all necessary components and modal content renderers
import {
  WarframeModalContent,
  PrimaryWeaponModalContent,
  SecondaryWeaponModalContent,
  MeleeWeaponModalContent,
  ArchwingModalContent,
  NecramechModalContent,
  ModModalContent,
  ArcaneModalContent,
  CompanionModalContent,
  EnemyModalContent,
  QuestModalContent,
  SimpleModalContent,
  RailjackModalContent,
} from '../components/BaseCard/ModalContentRenderers';

// Import icons
import WarframeIcon from '../Icons/WarframeIcon';
import PrimaryWeaponIcon from '../Icons/PrimaryWeaponIcon';
import SecondaryWeaponIcon from '../Icons/SecondaryWeaponIcon';
import MeleeWeaponIcon from '../Icons/MeleeWeaponIcon';
import ArchwingIcon from '../Icons/ArchwingIcon';
import ArchGunWeaponIcon from '../Icons/ArchGunWeaponIcon';
import ArchMeleeWeaponIcon from '../Icons/ArchMeleeWeaponIcon';
import NecramechIcon from '../Icons/NecramechIcon';
import ModIcon from '../Icons/ModIcon';
import ArcaneIcon from '../Icons/ArcaneIcon';
import SentinelIcon from '../Icons/SentinelIcon';
import CompanionIcon from '../Icons/CompanionIcon';
import EnemyIcon from '../Icons/EnemyIcon';
import QuestIcon from '../Icons/QuestIcon';
import FishIcon from '../Icons/FishIcon';
import GearIcon from '../Icons/GearIcon';
import GlyphIcon from '../Icons/GlyphIcon';
import ResourceIcon from '../Icons/ResourceIcon';
import MiscellaneousIcon from '../Icons/MiscellaneousIcon';
import SkinIcon from '../Icons/SkinIcon';
import RailjackIcon from '../Icons/RailjackIcon';

// Import meta decorators
import {
  WarframePageMeatDecorator,
  PrimaryWeaponsPageMeatDecorator,
  SecondaryWeaponsPageMeatDecorator,
  MeleeWeaponsPageMeatDecorator,
  ArchwingPageMeatDecorator,
  ArchGunPageMeatDecorator,
  ArchMeleePageMeatDecorator,
  NecramechPageMeatDecorator,
  ModPageMeatDecorator,
  ArcanePageMeatDecorator,
  SentinelPageMeatDecorator,
  SentinelWeaponPageMeatDecorator,
  CompanionPageMeatDecorator,
  EnemyPageMeatDecorator,
  QuestPageMeatDecorator,
  FishPageMeatDecorator,
  GearPageMeatDecorator,
  GlyphPageMeatDecorator,
  ResourcePageMeatDecorator,
  MiscellaneousPageMeatDecorator,
  SkinPageMeatDecorator,
  RailjackPageMeatDecorator,
} from '../util/MeatDecoratorList/MeatDecoratorList';

// Import data hooks from centralized index
import {
  useGetWarframe,
  useGetPrimary,
  useGetSecondary,
  useGetMelee,
  useGetEnemy,
  useGetArchwing,
  useGetArchGun,
  useGetArchMelee,
  useGetNecramech,
  useGetMod,
  useGetArcane,
  useGetSentinel,
  useGetSentinelWeapon,
  useGetPet,
  useGetQuest,
  useGetFish,
  useGetGear,
  useGetGlyph,
  useGetResource,
  useGetMiscellaneous,
  useGetSkin,
  useGetRailjack,
} from '../hooks';

/**
 * Centralized configuration for all list pages
 * This eliminates the need for separate page components with repetitive code
 */
export const PAGE_CONFIGS = {
  // Warframes
  warframe: {
    dataSource: useGetWarframe,
    modalContentRenderer: (item) => <WarframeModalContent item={item} />,
    Icon: WarframeIcon,
    seoMeta: WarframePageMeatDecorator,
    entityName: 'Warframe',
    ariaLabelPrefix: 'Warframe',
    useCdnImages: false,
  },

  // Primary Weapons
  primary: {
    dataSource: useGetPrimary,
    modalContentRenderer: (item) => <PrimaryWeaponModalContent item={item} />,
    Icon: PrimaryWeaponIcon,
    seoMeta: PrimaryWeaponsPageMeatDecorator,
    entityName: 'Primary Weapon',
    entityNamePlural: 'Primary Weapons',
    ariaLabelPrefix: 'Primary weapon',
    useCdnImages: false,
  },

  // Secondary Weapons
  secondary: {
    dataSource: useGetSecondary,
    modalContentRenderer: (item) => <PrimaryWeaponModalContent item={item} />,
    Icon: SecondaryWeaponIcon,
    seoMeta: SecondaryWeaponsPageMeatDecorator,
    entityName: 'Secondary Weapon',
    entityNamePlural: 'Secondary Weapons',
    ariaLabelPrefix: 'Secondary weapon',
    useCdnImages: false,
  },

  // Melee Weapons
  melee: {
    dataSource: useGetMelee,
    modalContentRenderer: (item) => <MeleeWeaponModalContent item={item} />,
    Icon: MeleeWeaponIcon,
    seoMeta: MeleeWeaponsPageMeatDecorator,
    entityName: 'Melee Weapon',
    entityNamePlural: 'Melee Weapons',
    ariaLabelPrefix: 'Melee weapon',
    useCdnImages: false,
  },

  // String-based entities (using useListPage with entity names)
  archwing: {
    dataSource: 'archwing',
    modalContentRenderer: (item) => <ArchwingModalContent item={item} />,
    Icon: ArchwingIcon,
    seoMeta: ArchwingPageMeatDecorator,
    entityName: 'Archwing',
    ariaLabelPrefix: 'Archwing',
    useCdnImages: false,
  },

  archGun: {
    dataSource: 'archGun',
    modalContentRenderer: (item) => <PrimaryWeaponModalContent item={item} />,
    Icon: ArchGunWeaponIcon,
    seoMeta: ArchGunPageMeatDecorator,
    entityName: 'Arch-Gun',
    ariaLabelPrefix: 'Archwing gun',
    useCdnImages: false,
  },

  archMelee: {
    dataSource: 'archMelee',
    modalContentRenderer: (item) => <MeleeWeaponModalContent item={item} />,
    Icon: ArchMeleeWeaponIcon,
    seoMeta: ArchMeleePageMeatDecorator,
    entityName: 'Arch-Melee',
    ariaLabelPrefix: 'Archwing melee',
    useCdnImages: false,
  },

  necramech: {
    dataSource: 'necramech',
    modalContentRenderer: (item) => <NecramechModalContent item={item} />,
    Icon: NecramechIcon,
    seoMeta: NecramechPageMeatDecorator,
    entityName: 'Necramech',
    ariaLabelPrefix: 'Necramech',
    useCdnImages: true,
  },

  mod: {
    dataSource: 'mod',
    modalContentRenderer: (item) => <ModModalContent item={item} />,
    Icon: ModIcon,
    seoMeta: ModPageMeatDecorator,
    entityName: 'Mod',
    ariaLabelPrefix: 'Mod',
    useCdnImages: false,
  },

  arcane: {
    dataSource: 'arcane',
    modalContentRenderer: (item) => <ArcaneModalContent item={item} />,
    Icon: ArcaneIcon,
    seoMeta: ArcanePageMeatDecorator,
    entityName: 'Arcane',
    ariaLabelPrefix: 'Arcane',
    useCdnImages: true,
  },

  sentinel: {
    dataSource: 'sentinel',
    modalContentRenderer: (item) => <CompanionModalContent item={item} />,
    Icon: SentinelIcon,
    seoMeta: SentinelPageMeatDecorator,
    entityName: 'Sentinel',
    ariaLabelPrefix: 'Sentinel',
    useCdnImages: false,
  },

  sentinelWeapon: {
    dataSource: 'sentinelWeapon',
    modalContentRenderer: (item) => <PrimaryWeaponModalContent item={item} />,
    Icon: SentinelIcon,
    seoMeta: SentinelWeaponPageMeatDecorator,
    entityName: 'Sentinel Weapon',
    entityNamePlural: 'Sentinel Weapons',
    ariaLabelPrefix: 'Sentinel weapon',
    useCdnImages: true,
  },

  pet: {
    dataSource: 'pet',
    modalContentRenderer: (item) => <CompanionModalContent item={item} />,
    Icon: CompanionIcon,
    seoMeta: CompanionPageMeatDecorator,
    entityName: 'Pet',
    ariaLabelPrefix: 'Pet',
    useCdnImages: false,
  },

  enemy: {
    dataSource: useGetEnemy,
    modalContentRenderer: (item) => <EnemyModalContent item={item} />,
    Icon: EnemyIcon,
    seoMeta: EnemyPageMeatDecorator,
    entityName: 'Enemy',
    entityNamePlural: 'Enemies',
    ariaLabelPrefix: 'Enemy',
    useCdnImages: false,
  },

  quest: {
    dataSource: 'quest',
    modalContentRenderer: (item) => <QuestModalContent item={item} />,
    Icon: QuestIcon,
    seoMeta: QuestPageMeatDecorator,
    entityName: 'Quest',
    ariaLabelPrefix: 'Quest',
    useCdnImages: false,
  },

  fish: {
    dataSource: 'fish',
    modalContentRenderer: (item) => <SimpleModalContent item={item} />,
    Icon: FishIcon,
    seoMeta: FishPageMeatDecorator,
    entityName: 'Fish',
    ariaLabelPrefix: 'Fish',
    useCdnImages: false,
  },

  gear: {
    dataSource: 'gear',
    modalContentRenderer: (item) => <SimpleModalContent item={item} />,
    Icon: GearIcon,
    seoMeta: GearPageMeatDecorator,
    entityName: 'Gear',
    ariaLabelPrefix: 'Gear',
    useCdnImages: false,
  },

  glyph: {
    dataSource: 'glyph',
    modalContentRenderer: (item) => <SimpleModalContent item={item} />,
    Icon: GlyphIcon,
    seoMeta: GlyphPageMeatDecorator,
    entityName: 'Glyph',
    ariaLabelPrefix: 'Glyph',
    useCdnImages: false,
  },

  resource: {
    dataSource: 'resource',
    modalContentRenderer: (item) => <SimpleModalContent item={item} />,
    Icon: ResourceIcon,
    seoMeta: ResourcePageMeatDecorator,
    entityName: 'Resource',
    ariaLabelPrefix: 'Resource',
    useCdnImages: false,
  },

  miscellaneous: {
    dataSource: 'miscellaneous',
    modalContentRenderer: (item) => <SimpleModalContent item={item} />,
    Icon: MiscellaneousIcon,
    seoMeta: MiscellaneousPageMeatDecorator,
    entityName: 'Miscellaneous',
    ariaLabelPrefix: 'Miscellaneous',
    useCdnImages: false,
  },

  skin: {
    dataSource: 'skin',
    modalContentRenderer: (item) => <SimpleModalContent item={item} />,
    Icon: SkinIcon,
    seoMeta: SkinPageMeatDecorator,
    entityName: 'Skin',
    ariaLabelPrefix: 'Skin',
    useCdnImages: true,
  },

  railjack: {
    dataSource: 'railjack',
    modalContentRenderer: (item) => <RailjackModalContent item={item} />,
    Icon: RailjackIcon,
    seoMeta: RailjackPageMeatDecorator,
    entityName: 'Railjack',
    ariaLabelPrefix: 'Railjack',
    useCdnImages: true,
  },
};

/**
 * Helper function to get page configuration by entity name
 * @param {string} entityName - Name of the entity
 * @returns {Object} - Page configuration object
 */
export const getPageConfig = (entityName) => {
  const config = PAGE_CONFIGS[entityName];
  if (!config) {
    throw new Error(`No page configuration found for entity: ${entityName}`);
  }
  return config;
};
