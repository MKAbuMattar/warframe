import { Fragment, useState, useEffect, useCallback } from 'react'

import Navbar from '../Navbar/Navbar'

import useGetArcane from '../../hooks/useGetArcane'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import ArcaneIcon from '../../Icons/WarframeIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards, Card, CardImg, CardTite, CardBtn } from '../../style/Style'

const Arcane = () => {
  const CDN_IMG_URL = process.env.NEXT_PUBLIC_CDN_IMG_URL

  const myLoader = ({ src, width, quality }) =>
    `${CDN_IMG_URL}/${src}?w=${width}&q=${quality || 75}`

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

      {getArcaneLoading ? (
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
                    <Card key={idx}>
                      <CardImg
                        loader={myLoader}
                        src={result.imageName}
                        title={result.name}
                        alt={`Name: ${result.name}\n\rDescription:${result.description}\n\rPassive${result.passiveDescription}`}
                        width={300}
                        height={300}
                        objectFit="contain"
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
