import useListPage from '../hooks/useListPage';
import RailjackCard from '../components/RailjackCard/RailjackCard';
import RailjackIcon from '../Icons/RailjackIcon';
import ListPageTemplate from '../components/PageTemplate/ListPageTemplate';
import PageSEO from '../components/PageTemplate/PageSEO';
import {RailjackPageMeatDecorator} from '../util/MeatDecoratorList/MeatDecoratorList';

const RailjackPage = () => {
  const {items, loading, filterList} = useListPage('railjack');

  return (
    <PageSEO
      title={RailjackPageMeatDecorator.title}
      description={RailjackPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={RailjackIcon}
        Card={RailjackCard}
        entityName="Railjack"
      />
    </PageSEO>
  );
};

export default RailjackPage;
