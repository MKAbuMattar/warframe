import PageSEO from '../components/PageTemplate/PageSEO';
import ListPageTemplate from '../components/PageTemplate/ListPageTemplate';
import {FishPageMeatDecorator} from '../util/MeatDecoratorList/MeatDecoratorList';
import useListPage from '../hooks/useListPage';
import FishIcon from '../Icons/FishIcon';
import FishCard from '../components/FishCard/FishCard';

const FishPage = () => {
  const {items, loading, filterList} = useListPage('fish');

  return (
    <PageSEO
      title={FishPageMeatDecorator.title}
      description={FishPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={FishIcon}
        Card={FishCard}
        entityName="Fish"
      />
    </PageSEO>
  );
};

export default FishPage;
