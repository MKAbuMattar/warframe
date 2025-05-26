import {createDataHooks} from './createDataHook';

/**
 * Auto-generated data hooks using the factory pattern
 * This replaces all individual useGet* hook files
 */

// List of all entities that need data hooks
// This includes ALL entities from DATA_CONFIGS except those with custom logic
const ENTITY_NAMES = [
  'quest',
  'resource',
  'fish',
  'pet',
  'gear',
  'glyph',
  'miscellaneous',
  'arcane',
  'mod',
  'necramech',
  'archwing',
  'archGun',
  'archMelee',
  'sentinel',
  'sentinelWeapon',
  'skin',
  'railjack',
  // Add remaining entities from DATA_CONFIGS
  'enemy',
  'primary',
  'secondary',
  'melee',
  'warframe',
];

// Generate all hooks at once
const generatedHooks = createDataHooks(ENTITY_NAMES);

// Export ALL hooks using the generated factory
export const useGetQuest = generatedHooks.useGetQuest;
export const useGetResource = generatedHooks.useGetResource;
export const useGetFish = generatedHooks.useGetFish;
export const useGetPet = generatedHooks.useGetPet;
export const useGetGear = generatedHooks.useGetGear;
export const useGetGlyph = generatedHooks.useGetGlyph;
export const useGetMiscellaneous = generatedHooks.useGetMiscellaneous;
export const useGetArcane = generatedHooks.useGetArcane;
export const useGetMod = generatedHooks.useGetMod;
export const useGetNecramech = generatedHooks.useGetNecramech;
export const useGetArchwing = generatedHooks.useGetArchwing;
export const useGetArchGun = generatedHooks.useGetArchGun;
export const useGetArchMelee = generatedHooks.useGetArchMelee;
export const useGetSentinel = generatedHooks.useGetSentinel;
export const useGetSentinelWeapon = generatedHooks.useGetSentinelWeapon;
export const useGetSkin = generatedHooks.useGetSkin;
export const useGetRailjack = generatedHooks.useGetRailjack;
export const useGetEnemy = generatedHooks.useGetEnemy;
export const useGetPrimary = generatedHooks.useGetPrimary;
export const useGetSecondary = generatedHooks.useGetSecondary;
export const useGetMelee = generatedHooks.useGetMelee;
export const useGetWarframe = generatedHooks.useGetWarframe;

// Export all hooks as an object for bulk operations
export const dataHooks = generatedHooks;
