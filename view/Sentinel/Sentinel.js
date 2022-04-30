import { Fragment, useState, useEffect, useCallback } from 'react'

import Navbar from '../../components/Navbar/Navbar'

import useGetSentinel from '../../hooks/useGetSentinel'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import SentinelIcon from '../../Icons/SentinelIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards } from '../../style/Style'
import SentinelCard from '../../components/SentinelCard/SentinelCard'

const Sentinel = () => {
  const { getSentinel, getSentinelLoading, getSentinelError } = useGetSentinel()

  const [items, setItems] = useState([])

  useEffect(() => {
    if (!getSentinelLoading) {
      setItems(getSentinel)
    }
  }, [getSentinelLoading])

  const filterList = useCallback(
    ({ target }) => {
      if (getSentinel.length > 0) {
        const searchQuery = target.value.toLowerCase()
        const updatedList = FilterIt(searchQuery, getSentinel)
        setItems(updatedList)
      }
    },
    [getSentinelLoading],
  )

  return (
    <Fragment>
      <Background />
      <Navbar />

      {getSentinelLoading ? (
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
                  <SentinelIcon color="#dddddd" size="50" /> Sentinels:{' '}
                  {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 1 && (
              <Fragment>
                <PageCounter>
                  <SentinelIcon color="#dddddd" size="50" /> Sentinel:{' '}
                  {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <SentinelIcon color="#dddddd" size="50" /> Sentinel: None
                </PageCounter>
              </Fragment>
            )}

            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <SentinelCard result={result} idx={idx} key={idx} />
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

export default Sentinel
