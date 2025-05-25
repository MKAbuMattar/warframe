import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetEnemy = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.enemy);

  return {
    getEnemy: data,
    getEnemyLoading: loading,
    getEnemyError: error,
  };
};

export default useGetEnemy;
