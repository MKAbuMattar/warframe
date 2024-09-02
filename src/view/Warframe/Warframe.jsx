import { Fragment, useState, useEffect, useCallback } from 'react'

import WarframeCard from '../../components/WarframeCard/WarframeCard'

import useGetWarframe from '../../hooks/useGetWarframe'

import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import WarframeIcon from '../../Icons/WarframeIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards } from '../../style/Style'

const Warframe = () => {
  const { getWarframe, getWarframeLoading, getWarframeError } = useGetWarframe()

  const [items, setItems] = useState([])

  useEffect(() => {
    if (!getWarframeLoading) {
      setItems(getWarframe)
    }
  }, [getWarframeLoading])

  const filterList = useCallback(
    ({ target }) => {
      if (getWarframe.length > 0) {
        const searchQuery = target.value.toLowerCase()
        const updatedList = FilterIt(searchQuery, getWarframe)
        setItems(updatedList)
      }
    },
    [getWarframeLoading],
  )

  return (
    <Fragment>
      {getWarframeLoading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : (
        <Fragment>
          <section className="container">
            <SearchSection id="search">
              <SearchInput type="text" placeholder="Search" onChange={filterList} />
            </SearchSection>

            {items.length > 0 && (
              <Fragment>
                <PageCounter>
                  <WarframeIcon color="#dddddd" size="50" /> Warframe: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <WarframeIcon color="#dddddd" size="50" /> Warframe: None
                </PageCounter>
              </Fragment>
            )}
            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <WarframeCard result={result} idx={idx} key={idx} />
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

export default Warframe
