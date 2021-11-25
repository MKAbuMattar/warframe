import { Fragment, useState, useEffect, useCallback } from 'react'

import Navbar from '../Navbar/Navbar'
import NecramecheCard from '../NecramecheCard/NecramecheCard'

import useGetNecrameche from '../../hooks/useGetNecrameche'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import NecramecheIcon from '../../Icons/NecramecheIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards } from '../../style/Style'

const Necrameche = () => {
  const { getNecrameche, getNecramecheLoading, getNecramecheError } =
    useGetNecrameche()

  const [items, setItems] = useState([])

  useEffect(() => {
    if (!getNecramecheLoading) {
      setItems(getNecrameche)
    }
  }, [getNecramecheLoading])

  const filterList = useCallback(
    ({ target }) => {
      if (getNecrameche.length > 0) {
        const searchQuery = target.value.toLowerCase()
        const updatedList = FilterIt(searchQuery, getNecrameche)
        setItems(updatedList)
      }
    },
    [getNecramecheLoading],
  )

  return (
    <Fragment>
      <Background />
      <Navbar />

      {getNecramecheLoading ? (
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
                  <NecramecheIcon color="#dddddd" size="50" />
                  Necrameche: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <NecramecheIcon color="#dddddd" size="50" />
                  Necrameche: None
                </PageCounter>
              </Fragment>
            )}

            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <NecramecheCard result={result} idx={idx} key={idx} />
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

export default Necrameche
