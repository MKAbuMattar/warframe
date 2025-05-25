import useListPage from '../../hooks/useListPage';
import SkinCard from '../../components/SkinCard/SkinCard';
import SkinIcon from '../../Icons/SkinIcon';
import ListPageTemplate from '../../components/PageTemplate/ListPageTemplate';
import PageSEO from '../../components/PageTemplate/PageSEO';
import {SkinPageMeatDecorator} from '../../util/MeatDecoratorList/MeatDecoratorList';

const SkinPage = () => {
  const {items, loading, filterList} = useListPage('skin');

  return (
    <PageSEO
      title={SkinPageMeatDecorator.title}
      description={SkinPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={SkinIcon}
        Card={SkinCard}
        entityName="Skin"
      />
    </PageSEO>
  );
};

export default SkinPage;
