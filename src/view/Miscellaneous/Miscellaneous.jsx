import {Fragment, useState, useEffect, useCallback} from 'react';

import MiscellaneousCard from '../../components/MiscellaneousCard/MiscellaneousCard';

import useGetMiscellaneous from '../../hooks/useGetMiscellaneous';

import Loader from '../../util/Loader/Loader';

import FilterIt from '../../util/FilterIt/FilterIt';

import MiscellaneousIcon from '../../Icons/MiscellaneousIcon';

import {SearchSection, SearchInput, PageCounter} from '../../style/Style';

import {Cards} from '../../style/Style';

const Miscellaneous = () => {
  const {getMiscellaneous, getMiscellaneousLoading, getMiscellaneousError} =
    useGetMiscellaneous();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!getMiscellaneousLoading) {
      setItems(getMiscellaneous);
    }
  }, [getMiscellaneousLoading]);

  const filterList = useCallback(
    ({target}) => {
      if (getMiscellaneous.length > 0) {
        const searchQuery = target.value.toLowerCase();
        const updatedList = FilterIt(searchQuery, getMiscellaneous);
        setItems(updatedList);
      }
    },
    [getMiscellaneousLoading],
  );

  return (
    <Fragment>
      {getMiscellaneousLoading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : (
        <Fragment>
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
                <MiscellaneousIcon color="#dddddd" size="50" />
                Miscellaneous: {items.length}
              </PageCounter>
            </Fragment>
          )}

          {items.length == 1 && (
            <Fragment>
              <PageCounter>
                <MiscellaneousIcon color="#dddddd" size="50" />
                Miscellaneous: {items.length}
              </PageCounter>
            </Fragment>
          )}

          {items.length == 0 && (
            <Fragment>
              <PageCounter>
                <MiscellaneousIcon color="#dddddd" size="50" />
                Miscellaneous: None
              </PageCounter>
            </Fragment>
          )}

          <section className="container">
            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <MiscellaneousCard result={result} idx={idx} key={idx} />
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

export default Miscellaneous;
