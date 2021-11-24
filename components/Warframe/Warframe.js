import { Fragment, useState, useEffect, useCallback } from 'react'

import Navbar from '../Navbar/Navbar'
import WarframeCard from '../WarframeCard/WarframeCard'

import useGetWarframe from '../../hooks/useGetWarframe'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

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
      <Background />
      <Navbar />

      {getWarframeLoading ? (
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

          {items.length > 0 && (
            <Fragment>
              <PageCounter>Warframe: {items.length}</PageCounter>
            </Fragment>
          )}

          {items.length == 0 && (
            <Fragment>
              <PageCounter>Warframe: None</PageCounter>
            </Fragment>
          )}

          <section className="container">
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
