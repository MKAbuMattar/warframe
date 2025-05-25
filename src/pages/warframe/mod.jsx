import PageSEO from '../../components/PageTemplate/PageSEO';
import ListPageTemplate from '../../components/PageTemplate/ListPageTemplate';
import {ModPageMeatDecorator} from '../../util/MeatDecoratorList/MeatDecoratorList';
import useListPage from '../../hooks/useListPage';
import ModIcon from '../../Icons/ModIcon';
import ModCard from '../../components/ModCard/ModCard';

const ModPage = () => {
  const {items, loading, filterList} = useListPage('mod');

  return (
    <PageSEO
      title={ModPageMeatDecorator.title}
      description={ModPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={ModIcon}
        Card={ModCard}
        entityName="Mod"
      />
    </PageSEO>
  );
};

export default ModPage;
