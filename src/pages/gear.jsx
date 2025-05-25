import PageSEO from '../components/PageTemplate/PageSEO';
import ListPageTemplate from '../components/PageTemplate/ListPageTemplate';
import {GearPageMeatDecorator} from '../util/MeatDecoratorList/MeatDecoratorList';
import useListPage from '../hooks/useListPage';
import GearIcon from '../Icons/GearIcon';
import GearCard from '../components/GearCard/GearCard';

const GearPage = () => {
  const {items, loading, filterList} = useListPage('gear');

  return (
    <PageSEO
      title={GearPageMeatDecorator.title}
      description={GearPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={GearIcon}
        Card={GearCard}
        entityName="Gear"
      />
    </PageSEO>
  );
};

export default GearPage;
