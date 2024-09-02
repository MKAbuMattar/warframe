import {useState, useEffect} from 'react';
import axios from 'axios';
import ArchMelee from '../models/ArchMelee.model';
import getURI from '../util/getURI';

const useGetArchMelee = () => {
  const url = getURI('Arch-Melee');

  const [getArchMeleeLoading, setLoading] = useState(true);
  const [getArchMeleeError, setError] = useState(false);
  const [getArchMelee, setGetArchMelee] = useState([]);

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
          formatData.push(new ArchMelee(result));
        });

        setGetArchMelee(
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

  return {getArchMelee, getArchMeleeLoading, getArchMeleeError};
};

export default useGetArchMelee;
