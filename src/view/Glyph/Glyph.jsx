import {Fragment, useState, useEffect, useCallback} from 'react';

import GlyphCard from '../../components/GlyphCard/GlyphCard';

import useGetGlyph from '../../hooks/useGetGlyph';

import Loader from '../../util/Loader/Loader';

import FilterIt from '../../util/FilterIt/FilterIt';

import GlyphIcon from '../../Icons/GlyphIcon';

import {SearchSection, SearchInput, PageCounter} from '../../style/Style';

import {Cards} from '../../style/Style';

const Glyph = () => {
  const {getGlyph, getGlyphLoading, getGlyphError} = useGetGlyph();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!getGlyphLoading) {
      setItems(getGlyph);
    }
  }, [getGlyphLoading]);

  const filterList = useCallback(
    ({target}) => {
      if (getGlyph.length > 0) {
        const searchQuery = target.value.toLowerCase();
        const updatedList = FilterIt(searchQuery, getGlyph);
        setItems(updatedList);
      }
    },
    [getGlyphLoading],
  );

  return (
    <Fragment>
      {getGlyphLoading ? (
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
                  <GlyphIcon color="#dddddd" size="50" />
                  Glyphs: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 1 && (
              <Fragment>
                <PageCounter>
                  <GlyphIcon color="#dddddd" size="50" />
                  Glyph: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <GlyphIcon color="#dddddd" size="50" />
                  Glyph: None
                </PageCounter>
              </Fragment>
            )}

            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <GlyphCard result={result} idx={idx} key={idx} />
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
  );
};

export default Glyph;
