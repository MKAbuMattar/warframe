import {Fragment, useState, useEffect, useCallback} from 'react';

import ModCard from '../../components/ModCard/ModCard';

import useGetMod from '../../hooks/useGetMod';

import Loader from '../../util/Loader/Loader';

import FilterIt from '../../util/FilterIt/FilterIt';

import ModIcon from '../../Icons/ModIcon';

import {SearchSection, SearchInput, PageCounter} from '../../style/Style';

import {Cards} from '../../style/Style';

const Mod = () => {
  const {getMod, getModLoading, getModError} = useGetMod();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!getModLoading) {
      setItems(getMod);
    }
  }, [getModLoading]);

  const filterList = useCallback(
    ({target}) => {
      if (getMod.length > 0) {
        const searchQuery = target.value.toLowerCase();
        const updatedList = FilterIt(searchQuery, getMod);
        setItems(updatedList);
      }
    },
    [getModLoading],
  );

  return (
    <Fragment>
      {getModLoading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : (
        <Fragment>
          <section className="container">
            <SearchSection id="search">
              <SearchInput
                type="text"
                placeholder="Search"
                onChange={filterList}
              />
            </SearchSection>

            {items.length > 1 && (
              <Fragment>
                <PageCounter>
                  <ModIcon color="#dddddd" size="50" />
                  Mods: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 1 && (
              <Fragment>
                <PageCounter>
                  <ModIcon color="#dddddd" size="50" />
                  Mod: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <ModIcon color="#dddddd" size="50" />
                  Mod: None
                </PageCounter>
              </Fragment>
            )}

            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <ModCard result={result} idx={idx} key={idx} />
                  ))}
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Cards>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Mod;
