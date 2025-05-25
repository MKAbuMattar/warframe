import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetArchMelee = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.archMelee);

  return {
    getArchMelee: data,
    getArchMeleeLoading: loading,
    getArchMeleeError: error,
  };
};

export default useGetArchMelee;
