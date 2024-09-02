import {useState, useEffect} from 'react';
import axios from 'axios';
import Arcane from '../models/Arcane.model';
import getURI from '../util/getURI';

const useGetArcane = () => {
  const url = getURI('Arcanes');

  const [getArcaneLoading, setLoading] = useState(true);
  const [getArcaneError, setError] = useState(false);
  const [getArcane, setGetArcane] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const formatData = [];
    let cancel;

    axios({
      method: 'GET',
      url: `${url}`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        res.data.forEach((result) => {
          if (
            !result.name.toLowerCase().includes('[Hc]'.toLowerCase()) &&
            !result.name.toLowerCase().includes('[Ph]'.toLowerCase()) &&
            result.name.toLowerCase() !== 'Arcane'.toLowerCase()
          ) {
            formatData.push(new Arcane(result));
          }
        });

        setGetArcane(
          [...new Set(formatData)].reduce((unique, o) => {
            if (!unique.some((obj) => obj.name === o.name)) {
              unique.push(o);
            }
            return unique;
          }, []),
        );
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();
  }, [url]);

  return {getArcane, getArcaneLoading, getArcaneError};
};

export default useGetArcane;
