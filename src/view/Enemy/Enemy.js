import { Fragment, useState, useEffect, useCallback } from 'react'

import EnemyCard from '../../components/EnemyCard/EnemyCard'

import useGetEnemy from '../../hooks/useGetEnemy'

import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import EnemyIcon from '../../Icons/EnemyIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards } from '../../style/Style'

const Enemy = () => {
  const { getEnemy, getEnemyLoading, getEnemyError } = useGetEnemy()

  const [items, setItems] = useState([])

  useEffect(() => {
    if (!getEnemyLoading) {
      setItems(getEnemy)
    }
  }, [getEnemyLoading])

  const filterList = useCallback(
    ({ target }) => {
      if (getEnemy.length > 0) {
        const searchQuery = target.value.toLowerCase()
        const updatedList = FilterIt(searchQuery, getEnemy)
        setItems(updatedList)
      }
    },
    [getEnemyLoading],
  )

  return (
    <Fragment>
      {getEnemyLoading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : (
        <Fragment>
          <section className="container">
            <SearchSection id="search">
              <SearchInput type="text" placeholder="Search" onChange={filterList} />
            </SearchSection>

            {items.length > 1 && (
              <Fragment>
                <PageCounter>
                  <EnemyIcon color="#dddddd" size="50" />
                  Enemys: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 1 && (
              <Fragment>
                <PageCounter>
                  <EnemyIcon color="#dddddd" size="50" />
                  Enemy: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <EnemyIcon color="#dddddd" size="50" />
                  Enemy: None
                </PageCounter>
              </Fragment>
            )}

            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <EnemyCard result={result} idx={idx} key={idx} />
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

export default Enemy
