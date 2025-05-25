import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetSentinelWeapon = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.sentinelWeapon);

  return {
    getSentinelWeapon: data,
    getSentinelWeaponLoading: loading,
    getSentinelWeaponError: error,
  };
};

export default useGetSentinelWeapon;
