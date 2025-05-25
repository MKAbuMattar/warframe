import PageSEO from '../components/PageTemplate/PageSEO';
import ListPageTemplate from '../components/PageTemplate/ListPageTemplate';
import {MiscellaneousPageMeatDecorator} from '../util/MeatDecoratorList/MeatDecoratorList';
import useListPage from '../hooks/useListPage';
import MiscellaneousIcon from '../Icons/MiscellaneousIcon';
import MiscellaneousCard from '../components/MiscellaneousCard/MiscellaneousCard';

const MiscellaneousPage = () => {
  const {items, loading, filterList} = useListPage('miscellaneous');

  return (
    <PageSEO
      title={MiscellaneousPageMeatDecorator.title}
      description={MiscellaneousPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={MiscellaneousIcon}
        Card={MiscellaneousCard}
        entityName="Miscellaneous"
      />
    </PageSEO>
  );
};

export default MiscellaneousPage;
