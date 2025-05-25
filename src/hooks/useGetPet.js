import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetPet = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.pet);

  return {
    getPet: data,
    getPetLoading: loading,
    getPetError: error,
  };
};

export default useGetPet;
