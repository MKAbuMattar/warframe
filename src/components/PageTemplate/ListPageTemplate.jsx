import {Fragment} from 'react';
import Loader from '../../util/Loader/Loader';
import {
  SearchSection,
  SearchInput,
  PageCounter,
  Cards,
} from '../../style/Style';

/**
 * Reusable template for list pages
 */
const ListPageTemplate = ({
  items,
  loading,
  filterList,
  Icon,
  Card,
  entityName,
  entityNamePlural,
}) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <section className="container">
      <SearchSection id="search">
        <SearchInput type="text" placeholder="Search" onChange={filterList} />
      </SearchSection>

      <PageCounter>
        <Icon color="#dddddd" size="50" />
        {entityNamePlural || entityName}:{' '}
        {items.length > 0 ? items.length : 'None'}
      </PageCounter>

      <Cards>
        {items.length > 0 &&
          items.map((result, idx) => (
            <Card result={result} idx={idx} key={idx} />
          ))}
      </Cards>
    </section>
  );
};

export default ListPageTemplate;
