import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetGlyph = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.glyph);

  return {
    getGlyph: data,
    getGlyphLoading: loading,
    getGlyphError: error,
  };
};

export default useGetGlyph;
