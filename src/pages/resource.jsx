import PageSEO from '../components/PageTemplate/PageSEO';
import ListPageTemplate from '../components/PageTemplate/ListPageTemplate';
import {ResourcePageMeatDecorator} from '../util/MeatDecoratorList/MeatDecoratorList';
import useListPage from '../hooks/useListPage';
import ResourceIcon from '../Icons/ResourceIcon';
import ResourceCard from '../components/ResourceCard/ResourceCard';

const ResourcePage = () => {
  const {items, loading, filterList} = useListPage('resource');

  return (
    <PageSEO
      title={ResourcePageMeatDecorator.title}
      description={ResourcePageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={ResourceIcon}
        Card={ResourceCard}
        entityName="Resource"
      />
    </PageSEO>
  );
};

export default ResourcePage;
