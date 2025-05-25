import {ITEM_TYPES} from './constants';

// Import all icons
import HomeIcon from '../../Icons/HomeIcon';
import WarframeIcon from '../../Icons/WarframeIcon';
import WeaponIcon from '../../Icons/WeaponIcon';
import PrimaryWeaponIcon from '../../Icons/PrimaryWeaponIcon';
import SecondaryWeaponIcon from '../../Icons/SecondaryWeaponIcon';
import MeleeWeaponIcon from '../../Icons/MeleeWeaponIcon';
import ArchwingIcon from '../../Icons/ArchwingIcon';
import ArchGunWeaponIcon from '../../Icons/ArchGunWeaponIcon';
import ArchMeleeWeaponIcon from '../../Icons/ArchMeleeWeaponIcon';
import CompanionIcon from '../../Icons/CompanionIcon';
import SentinelIcon from '../../Icons/SentinelIcon';
import NecramechIcon from '../../Icons/NecramechIcon';
import ArcaneIcon from '../../Icons/ArcaneIcon';
import ModIcon from '../../Icons/ModIcon';
import EnemyIcon from '../../Icons/EnemyIcon';
import ResourceIcon from '../../Icons/ResourceIcon';
import MiscellaneousIcon from '../../Icons/MiscellaneousIcon';
import QuestIcon from '../../Icons/QuestIcon';
import GearIcon from '../../Icons/GearIcon';
import GlyphIcon from '../../Icons/GlyphIcon';
import RightIcon from '../../Icons/RightIcon';
import LeftIcon from '../../Icons/LeftIcon';

// Icon mapping for easy access
export const ICONS = {
  HOME: HomeIcon,
  WARFRAME: WarframeIcon,
  WEAPON: WeaponIcon,
  PRIMARY_WEAPON: PrimaryWeaponIcon,
  SECONDARY_WEAPON: SecondaryWeaponIcon,
  MELEE_WEAPON: MeleeWeaponIcon,
  ARCHWING: ArchwingIcon,
  ARCH_GUN: ArchGunWeaponIcon,
  ARCH_MELEE: ArchMeleeWeaponIcon,
  COMPANION: CompanionIcon,
  SENTINEL: SentinelIcon,
  NECRAMECH: NecramechIcon,
  ARCANE: ArcaneIcon,
  MOD: ModIcon,
  ENEMY: EnemyIcon,
  RESOURCE: ResourceIcon,
  MISCELLANEOUS: MiscellaneousIcon,
  QUEST: QuestIcon,
  GEAR: GearIcon,
  GLYPH: GlyphIcon,
  RIGHT: RightIcon,
  LEFT: LeftIcon,
};

// Menu configuration with hierarchy
export const MENU_CONFIG = {
  main: {
    items: [
      {
        label: 'Home',
        leftIcon: 'HOME',
        url: '/',
        type: ITEM_TYPES.LINK,
      },
      {
        label: 'Warframe',
        leftIcon: 'WARFRAME',
        url: '/warframe',
        type: ITEM_TYPES.LINK,
      },
      {
        label: 'Weapons',
        leftIcon: 'WEAPON',
        rightIcon: 'RIGHT',
        goToMenu: 'weapons',
        type: ITEM_TYPES.SUBMENU,
      },
      {
        label: 'Companions',
        leftIcon: 'COMPANION',
        rightIcon: 'RIGHT',
        goToMenu: 'companions',
        type: ITEM_TYPES.SUBMENU,
      },
      {
        label: 'Archwing',
        leftIcon: 'ARCHWING',
        rightIcon: 'RIGHT',
        goToMenu: 'archwing',
        type: ITEM_TYPES.SUBMENU,
      },
      {
        label: 'Necramech',
        leftIcon: 'NECRAMECH',
        url: '/warframe/necramech',
        type: ITEM_TYPES.LINK,
      },
      {
        label: 'Mod',
        leftIcon: 'MOD',
        url: '/warframe/mod',
        type: ITEM_TYPES.LINK,
      },
      {
        label: 'Arcane',
        leftIcon: 'ARCANE',
        url: '/warframe/arcane',
        type: ITEM_TYPES.LINK,
      },
      {
        label: 'Quest',
        leftIcon: 'QUEST',
        url: '/quest',
        type: ITEM_TYPES.LINK,
      },
      {
        label: 'Enemy',
        leftIcon: 'ENEMY',
        url: '/enemy',
        type: ITEM_TYPES.LINK,
      },
      {
        label: 'Miscellaneous',
        leftIcon: 'MISCELLANEOUS',
        url: '/miscellaneous',
        type: ITEM_TYPES.LINK,
      },
      {
        label: 'Resource',
        leftIcon: 'RESOURCE',
        url: '/resource',
        type: ITEM_TYPES.LINK,
      },
      {
        label: 'Gear',
        leftIcon: 'GEAR',
        url: '/gear',
        type: ITEM_TYPES.LINK,
      },
      {
        label: 'Glyph',
        leftIcon: 'GLYPH',
        url: '/glyph',
        type: ITEM_TYPES.LINK,
      },
    ],
  },
  weapons: {
    parentMenu: 'main',
    parentIcon: 'WEAPON',
    title: 'Weapons',
    items: [
      {
        label: 'Primary Weapons',
        leftIcon: 'PRIMARY_WEAPON',
        url: '/weapons/primary',
        type: ITEM_TYPES.LINK,
      },
      {
        label: 'Secondary Weapons',
        leftIcon: 'SECONDARY_WEAPON',
        url: '/weapons/secondary',
        type: ITEM_TYPES.LINK,
      },
      {
        label: 'Melee Weapons',
        leftIcon: 'MELEE_WEAPON',
        url: '/weapons/melee',
        type: ITEM_TYPES.LINK,
      },
    ],
  },
  archwing: {
    parentMenu: 'main',
    parentIcon: 'ARCHWING',
    title: 'Archwing',
    items: [
      {
        label: 'Archwing',
        leftIcon: 'ARCHWING',
        url: '/archwing/',
        type: ITEM_TYPES.LINK,
      },
      {
        label: 'Arch-Weapon',
        leftIcon: 'ARCH_GUN',
        rightIcon: 'RIGHT',
        goToMenu: 'arch-weapon',
        type: ITEM_TYPES.SUBMENU,
      },
    ],
  },
  'arch-weapon': {
    parentMenu: 'archwing',
    parentIcon: 'ARCH_GUN',
    title: 'Arch-Weapon',
    items: [
      {
        label: 'Arch-Gun Weapons',
        leftIcon: 'ARCH_GUN',
        url: '/archwing/weapon/arch-gun',
        type: ITEM_TYPES.LINK,
      },
      {
        label: 'Arch-Melee Weapons',
        leftIcon: 'ARCH_MELEE',
        url: '/archwing/weapon/arch-melee',
        type: ITEM_TYPES.LINK,
      },
    ],
  },
  companions: {
    parentMenu: 'main',
    parentIcon: 'COMPANION',
    title: 'Companions',
    items: [
      {
        label: 'Pet',
        leftIcon: 'COMPANION',
        url: '/companion/pet',
        type: ITEM_TYPES.LINK,
      },
      {
        label: 'Sentinel',
        leftIcon: 'SENTINEL',
        url: '/companion/sentinel',
        type: ITEM_TYPES.LINK,
      },
      {
        label: 'Sentinel Weapon',
        leftIcon: 'SENTINEL',
        url: '/companion/sentinel/weapon',
        type: ITEM_TYPES.LINK,
      },
    ],
  },
};
