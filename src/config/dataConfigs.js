// Import all model classes
import Arcane from '../models/Arcane.model';
import ArchGun from '../models/ArchGun.model';
import ArchMelee from '../models/ArchMelee.model';
import Archwing from '../models/Archwing.model';
import Enemy from '../models/Enemy.model';
import Fish from '../models/Fish.model';
import Gear from '../models/Gear.model';
import Glyph from '../models/Glyph.model';
import Melee from '../models/Melee.model';
import Miscellaneous from '../models/Miscellaneous.model';
import Mod from '../models/Mod.model';
import Necramech from '../models/Necramech.model';
import Pet from '../models/Pet.model';
import Primary from '../models/Primary.model';
import Quest from '../models/Quest.model';
import Resource from '../models/Resource.model';
import Secondary from '../models/Secondary.model';
import Sentinel from '../models/Sentinel.model';
import SentinelWeapon from '../models/SentinelWeapon.model';
import Skin from '../models/Skin.model';
import Warframe from '../models/Warframe.model';
import Railjack from '../models/Railjack.model';

// Import filter utilities
import {
  createExcludeFilter,
  createPropertyFilter,
  createCategoryFilter,
  createCategoryExcludeFilter,
  combineFilters,
} from '../util/filterUtils';

/**
 * Configuration objects for each data type
 * Each configuration defines:
 * - endpoint: API endpoint name
 * - ModelClass: Model class constructor
 * - filters: Array of filter functions to apply
 * - deduplicationStrategy: Strategy for removing duplicates
 */

export const DATA_CONFIGS = {
  arcane: {
    endpoint: 'Arcanes',
    ModelClass: Arcane,
    filters: [
      createExcludeFilter(['[Hc]', '[Ph]']),
      (item) => item.name.toLowerCase() !== 'arcane',
    ],
    deduplicationStrategy: 'name',
  },

  archGun: {
    endpoint: 'Arch-Gun',
    ModelClass: ArchGun,
    filters: [],
    deduplicationStrategy: 'name',
  },

  archMelee: {
    endpoint: 'Arch-Melee',
    ModelClass: ArchMelee,
    filters: [],
    deduplicationStrategy: 'name',
  },

  archwing: {
    endpoint: 'Archwing',
    ModelClass: Archwing,
    filters: [createPropertyFilter('stamina', 140, '>=')],
    deduplicationStrategy: 'name',
  },

  enemy: {
    endpoint: 'Enemy',
    ModelClass: Enemy,
    filters: [createExcludeFilter(['Kuva', 'Commander', 'Zanuka'])],
    deduplicationStrategy: 'name',
  },

  fish: {
    endpoint: 'Fish',
    ModelClass: Fish,
    filters: [],
    deduplicationStrategy: 'name',
  },

  gear: {
    endpoint: 'Gear',
    ModelClass: Gear,
    filters: [createExcludeFilter(['[Hc]', '[Ph]', 'Xattractor', '/'])],
    deduplicationStrategy: 'name',
  },

  glyph: {
    endpoint: 'Glyphs',
    ModelClass: Glyph,
    filters: [createExcludeFilter(['[hc]', '[Ph]'])],
    deduplicationStrategy: 'name',
  },

  melee: {
    endpoint: 'Melee',
    ModelClass: Melee,
    filters: [
      createPropertyFilter('type', '', '!=='),
      createExcludeFilter(['Jai', 'Ruhang', 'KORB']),
    ],
    deduplicationStrategy: 'name',
  },

  miscellaneous: {
    endpoint: 'Misc',
    ModelClass: Miscellaneous,
    filters: [createExcludeFilter(['/', 'endo', 'booster'])],
    deduplicationStrategy: 'name',
  },

  mod: {
    endpoint: 'Mods',
    ModelClass: Mod,
    filters: [(item) => item.name.toLowerCase() !== 'do not use'],
    deduplicationStrategy: 'name',
  },

  necramech: {
    endpoint: 'Warframes',
    ModelClass: Necramech,
    filters: [createPropertyFilter('stamina', 180, '>')],
    deduplicationStrategy: 'name',
  },

  pet: {
    endpoint: 'Pets',
    ModelClass: Pet,
    filters: [
      createExcludeFilter(['Parts', 'Warframe', 'Gyro', 'Core']),
      (item) => !item.type?.toLowerCase().includes('parts'),
      (item) => !item.type?.toLowerCase().includes('warframe'),
    ],
    deduplicationStrategy: 'name',
  },

  primary: {
    endpoint: 'Primary',
    ModelClass: Primary,
    filters: [createCategoryExcludeFilter(['SentinelWeapons', 'SpaceGuns'])],
    deduplicationStrategy: 'name',
  },

  quest: {
    endpoint: 'Quests',
    ModelClass: Quest,
    filters: [createExcludeFilter(['[hc]', 'Clan Key'])],
    deduplicationStrategy: 'name',
  },

  resource: {
    endpoint: 'Resources',
    ModelClass: Resource,
    filters: [
      createExcludeFilter(['[Ph]', '[hc]', '/', 'Entratifragmentbase']),
    ],
    deduplicationStrategy: 'name',
  },

  secondary: {
    endpoint: 'Secondary',
    ModelClass: Secondary,
    filters: [createPropertyFilter('type', '', '!==')],
    deduplicationStrategy: 'basic',
  },

  sentinel: {
    endpoint: 'Sentinels',
    ModelClass: Sentinel,
    filters: [],
    deduplicationStrategy: 'name',
  },

  sentinelWeapon: {
    endpoint: 'SentinelWeapons',
    ModelClass: SentinelWeapon,
    filters: [createCategoryFilter(['SentinelWeapons'])],
    deduplicationStrategy: 'name',
  },

  skin: {
    endpoint: 'Skins',
    ModelClass: Skin,
    filters: [
      createExcludeFilter(['/']),
      createPropertyFilter('type', 'Skin', '==='),
    ],
    deduplicationStrategy: 'name',
  },

  warframe: {
    endpoint: 'Warframes',
    ModelClass: Warframe,
    filters: [createPropertyFilter('stamina', 5, '<=')],
    deduplicationStrategy: 'basic',
  },

  railjack: {
    endpoint: 'Railjack',
    ModelClass: Railjack,
    filters: [createExcludeFilter(['[hc]', '[Ph]'])],
    deduplicationStrategy: 'name',
  },
};

// Re-export for easier access
export default DATA_CONFIGS;
