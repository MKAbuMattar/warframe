import { Fragment, useState, useEffect, useCallback } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import ArchwingCard from '../../components/ArchwingCard/ArchwingCard'

import useGetArchwing from '../../hooks/useGetArchwing'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import ArchwingIcon from '../../Icons/ArchwingIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards } from '../../style/Style'

const Archwing = () => {
  const { getArchwing, getArchwingLoading, getArchwingError } = useGetArchwing()

  const [items, setItems] = useState([])

  useEffect(() => {
    if (!getArchwingLoading) {
      setItems(getArchwing)
    }
  }, [getArchwingLoading])

  const filterList = useCallback(
    ({ target }) => {
      if (getArchwing.length > 0) {
        const searchQuery = target.value.toLowerCase()
        const updatedList = FilterIt(searchQuery, getArchwing)
        setItems(updatedList)
      }
    },
    [getArchwingLoading],
  )

  return (
    <Fragment>
      <Background />
      <Navbar />

      {getArchwingLoading ? (
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

          <section className="container">
            {items.length > 1 && (
              <Fragment>
                <PageCounter>
                  <ArchwingIcon color="#dddddd" size="50" />
                  Archwing: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <ArchwingIcon color="#dddddd" size="50" />
                  Archwing: None
                </PageCounter>
              </Fragment>
            )}

            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <ArchwingCard result={result} idx={idx} key={idx} />
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

export default Archwing
