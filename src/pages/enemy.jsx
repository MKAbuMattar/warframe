import useListPage from '../hooks/useListPage';
import useGetEnemy from '../hooks/useGetEnemy';
import EnemyCard from '../components/EnemyCard/EnemyCard';
import EnemyIcon from '../Icons/EnemyIcon';
import ListPageTemplate from '../components/PageTemplate/ListPageTemplate';
import PageSEO from '../components/PageTemplate/PageSEO';
import {EnemyPageMeatDecorator} from '../util/MeatDecoratorList/MeatDecoratorList';

const EnemyPage = () => {
  const {items, loading, filterList} = useListPage(useGetEnemy);

  return (
    <PageSEO
      title={EnemyPageMeatDecorator.title}
      description={EnemyPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={EnemyIcon}
        Card={EnemyCard}
        entityName="Enemy"
        entityNamePlural="Enemies"
      />
    </PageSEO>
  );
};

export default EnemyPage;
