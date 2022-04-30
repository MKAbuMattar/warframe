import { Fragment, useState, useEffect, useCallback } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import ResourceCard from '../../components/ResourceCard/ResourceCard'

import useGetResource from '../../hooks/useGetResource'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import ResourceIcon from '../../Icons/ResourceIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards } from '../../style/Style'

const Resource = () => {
  const { getResource, getResourceLoading, getResourceError } = useGetResource()

  const [items, setItems] = useState([])

  useEffect(() => {
    if (!getResourceLoading) {
      setItems(getResource)
    }
  }, [getResourceLoading])

  const filterList = useCallback(
    ({ target }) => {
      if (getResource.length > 0) {
        const searchQuery = target.value.toLowerCase()
        const updatedList = FilterIt(searchQuery, getResource)
        setItems(updatedList)
      }
    },
    [getResourceLoading],
  )

  return (
    <Fragment>
      <Background />
      <Navbar />

      {getResourceLoading ? (
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
                  <ResourceIcon color="#dddddd" size="50" />
                  Resources: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 1 && (
              <Fragment>
                <PageCounter>
                  <ResourceIcon color="#dddddd" size="50" />
                  Resource: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <ResourceIcon color="#dddddd" size="50" />
                  Resource: None
                </PageCounter>
              </Fragment>
            )}

            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <ResourceCard result={result} idx={idx} key={idx} />
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

export default Resource
