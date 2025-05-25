import {useState, useEffect, useCallback} from 'react';
import FilterIt from '../util/FilterIt/FilterIt';

// Import hooks for string mapping
import useGetQuest from './useGetQuest';
import useGetResource from './useGetResource';
import useGetFish from './useGetFish';
import useGetPet from './useGetPet';
import useGetGear from './useGetGear';
import useGetGlyph from './useGetGlyph';
import useGetMiscellaneous from './useGetMiscellaneous';
import useGetArcane from './useGetArcane';
import useGetMod from './useGetMod';
import useGetNecramech from './useGetNecramech';
import useGetArchwing from './useGetArchwing';
import useGetArchGun from './useGetArchGun';
import useGetArchMelee from './useGetArchMelee';
import useGetSentinel from './useGetSentinel';
import useGetSentinelWeapon from './useGetSentinelWeapon';
import useGetSkin from './useGetSkin';

// Map string entity names to hooks
const HOOK_MAP = {
  quest: useGetQuest,
  resource: useGetResource,
  fish: useGetFish,
  pet: useGetPet,
  gear: useGetGear,
  glyph: useGetGlyph,
  miscellaneous: useGetMiscellaneous,
  arcane: useGetArcane,
  mod: useGetMod,
  necramech: useGetNecramech,
  archwing: useGetArchwing,
  archGun: useGetArchGun,
  archMelee: useGetArchMelee,
  sentinel: useGetSentinel,
  sentinelWeapon: useGetSentinelWeapon,
  skin: useGetSkin,
};

/**
 * Reusable hook for list pages with search functionality
 * @param {Object|string} dataHookOrEntityName - Hook function or entity name string
 * @param {Function} filterFunction - Custom filter function (defaults to FilterIt)
 * @returns {Object} - {items, loading, error, filterList, searchQuery}
 */
const useListPage = (dataHookOrEntityName, filterFunction = FilterIt) => {
  // Determine if parameter is a string (entity name) or hook function
  const isStringParam = typeof dataHookOrEntityName === 'string';
  const dataHook = isStringParam
    ? HOOK_MAP[dataHookOrEntityName]
    : dataHookOrEntityName;

  if (isStringParam && !dataHook) {
    throw new Error(`Unknown entity name: ${dataHookOrEntityName}`);
  }

  const hookResult = dataHook();
  const {data, loading, error} = hookResult;

  // Support both old naming convention and new naming convention
  const actualData =
    data ||
    hookResult[Object.keys(hookResult).find((key) => key.startsWith('get'))];
  const actualLoading =
    loading ||
    hookResult[Object.keys(hookResult).find((key) => key.includes('Loading'))];
  const actualError =
    error ||
    hookResult[Object.keys(hookResult).find((key) => key.includes('Error'))];

  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!actualLoading && actualData) {
      setItems(actualData);
    }
  }, [actualLoading, actualData]);

  const filterList = useCallback(
    ({target}) => {
      const query = target.value.toLowerCase();
      setSearchQuery(query);

      if (actualData && actualData.length > 0) {
        const updatedList = filterFunction(query, actualData);
        setItems(updatedList);
      }
    },
    [actualData, filterFunction],
  );

  return {
    items,
    loading: actualLoading,
    error: actualError,
    filterList,
    searchQuery,
    rawData: actualData,
  };
};

export default useListPage;
