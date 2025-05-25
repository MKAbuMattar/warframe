import PageSEO from '../../components/PageTemplate/PageSEO';
import ListPageTemplate from '../../components/PageTemplate/ListPageTemplate';
import {ArchwingPageMeatDecorator} from '../../util/MeatDecoratorList/MeatDecoratorList';
import useListPage from '../../hooks/useListPage';
import ArchwingIcon from '../../Icons/ArchwingIcon';
import ArchwingCard from '../../components/ArchwingCard/ArchwingCard';

const ArchwingPage = () => {
  const {items, loading, filterList} = useListPage('archwing');

  return (
    <PageSEO
      title={ArchwingPageMeatDecorator.title}
      description={ArchwingPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={ArchwingIcon}
        Card={ArchwingCard}
        entityName="Archwing"
      />
    </PageSEO>
  );
};

export default ArchwingPage;
