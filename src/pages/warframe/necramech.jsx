import PageSEO from '../../components/PageTemplate/PageSEO';
import ListPageTemplate from '../../components/PageTemplate/ListPageTemplate';
import {NecramechPageMeatDecorator} from '../../util/MeatDecoratorList/MeatDecoratorList';
import useListPage from '../../hooks/useListPage';
import NecramechIcon from '../../Icons/NecramechIcon';
import NecramechCard from '../../components/NecramechCard/NecramechCard';

const NecramechPage = () => {
  const {items, loading, filterList} = useListPage('necramech');

  return (
    <PageSEO
      title={NecramechPageMeatDecorator.title}
      description={NecramechPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={NecramechIcon}
        Card={NecramechCard}
        entityName="Necramech"
      />
    </PageSEO>
  );
};

export default NecramechPage;
