import { Fragment, useState, useEffect, useCallback } from 'react'

import Navbar from '../Navbar/Navbar'
import NecramechCard from '../NecramechCard/NecramechCard'

import useGetNecramech from '../../hooks/useGetNecramech'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import NecramechIcon from '../../Icons/NecramechIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards } from '../../style/Style'

const Necramech = () => {
  const { getNecramech, getNecramechLoading, getNecramechError } =
    useGetNecramech()

  const [items, setItems] = useState([])

  useEffect(() => {
    if (!getNecramechLoading) {
      setItems(getNecramech)
    }
  }, [getNecramechLoading])

  const filterList = useCallback(
    ({ target }) => {
      if (getNecramech.length > 0) {
        const searchQuery = target.value.toLowerCase()
        const updatedList = FilterIt(searchQuery, getNecramech)
        setItems(updatedList)
      }
    },
    [getNecramechLoading],
  )

  return (
    <Fragment>
      <Background />
      <Navbar />

      {getNecramechLoading ? (
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
                  <NecramechIcon color="#dddddd" size="50" />
                  Necramech: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <NecramechIcon color="#dddddd" size="50" />
                  Necramech: None
                </PageCounter>
              </Fragment>
            )}

            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <NecramechCard result={result} idx={idx} key={idx} />
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

export default Necramech
