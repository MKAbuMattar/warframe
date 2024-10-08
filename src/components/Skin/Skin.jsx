import {Fragment, useState, useEffect, useCallback} from 'react';
import useGetSkin from '../../hooks/useGetSkin';
import Loader from '../../util/Loader/Loader';
import FilterIt from '../../util/FilterIt/FilterIt';
import {SearchSection, SearchInput} from '../../style/Style';
import {Cards, Card, CardImg, CardTite, CardBtn} from '../../style/Style';

const Skin = () => {
  const CDN_IMG_URL = process.env.NEXT_PUBLIC_CDN_IMG_URL;

  const {getSkin, getSkinLoading, getSkinError} = useGetSkin();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!getSkinLoading) {
      setItems(getSkin);
    }
  }, [getSkinLoading]);

  const filterList = useCallback(
    ({target}) => {
      if (getSkin.length > 0) {
        const searchQuery = target.value.toLowerCase();
        const updatedList = FilterIt(searchQuery, getSkin);
        setItems(updatedList);
      }
    },
    [getSkinLoading],
  );

  return (
    <Fragment>
      <SearchSection id="search">
        <SearchInput type="text" placeholder="Search" onChange={filterList} />
      </SearchSection>

      {getSkinLoading ? (
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
                        src={`${CDN_IMG_URL}/${result.imageName}`}
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
  );
};

export default Skin;
