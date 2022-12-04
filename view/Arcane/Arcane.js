import { Fragment, useState, useEffect, useCallback } from 'react'

import ArcaneCard from '../../components/ArcaneCard/ArcaneCard'

import useGetArcane from '../../hooks/useGetArcane'

import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import ArcaneIcon from '../../Icons/ArcaneIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards } from '../../style/Style'

const Arcane = () => {
  const { getArcane, getArcaneLoading, getArcaneError } = useGetArcane()

  const [items, setItems] = useState([])

  useEffect(() => {
    if (!getArcaneLoading) {
      setItems(getArcane)
    }
  }, [getArcaneLoading])

  const filterList = useCallback(
    ({ target }) => {
      if (getArcane.length > 0) {
        const searchQuery = target.value.toLowerCase()
        const updatedList = FilterIt(searchQuery, getArcane)
        setItems(updatedList)
      }
    },
    [getArcaneLoading],
  )

  return (
    <Fragment>
      {getArcaneLoading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : (
        <Fragment>
          <SearchSection id="search">
            <SearchInput type="text" placeholder="Search" onChange={filterList} />
          </SearchSection>

          {items.length > 1 && (
            <Fragment>
              <PageCounter>
                <ArcaneIcon color="#dddddd" size="50" />
                Arcanes: {items.length}
              </PageCounter>
            </Fragment>
          )}

          {items.length == 1 && (
            <Fragment>
              <PageCounter>
                <ArcaneIcon color="#dddddd" size="50" />
                Arcane: {items.length}
              </PageCounter>
            </Fragment>
          )}

          {items.length == 0 && (
            <Fragment>
              <PageCounter>
                <ArcaneIcon color="#dddddd" size="50" />
                Arcane: None
              </PageCounter>
            </Fragment>
          )}

          <section className="container">
            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <ArcaneCard result={result} idx={idx} key={idx} />
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
  )
}

export default Arcane
