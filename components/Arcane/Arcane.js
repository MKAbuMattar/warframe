import { Fragment, useState, useEffect, useCallback } from 'react'

import Navbar from '../Navbar/Navbar'

import useGetArcane from '../../hooks/useGetArcane'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import { SearchSection, SearchInput } from '../../style/Style'

import { Cards, Card, CardImg, CardTite, CardBtn } from '../../style/Style'

import { imgURL } from '../../util/Regex/Regex'

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
      <Background />
      <Navbar />

      <SearchSection id="search">
        <SearchInput type="text" placeholder="Search" onChange={filterList} />
      </SearchSection>

      {getArcaneLoading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : (
        <Fragment>
          <section className="container">
            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <Card key={idx}>
                      <CardImg
                        src={
                          imgURL(result.wikiaThumbnail) !== ''
                            ? imgURL(result.wikiaThumbnail)
                            : result.img
                        }
                        alt={result.name}
                        title={result.name}
                      />
                      <CardTite>{result.name}</CardTite>
                      <CardBtn>Info</CardBtn>
                    </Card>
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
