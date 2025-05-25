import PageSEO from '../../components/PageTemplate/PageSEO';
import ListPageTemplate from '../../components/PageTemplate/ListPageTemplate';
import {ArcanePageMeatDecorator} from '../../util/MeatDecoratorList/MeatDecoratorList';
import useListPage from '../../hooks/useListPage';
import ArcaneIcon from '../../Icons/ArcaneIcon';
import ArcaneCard from '../../components/ArcaneCard/ArcaneCard';

const ArcanePage = () => {
  const {items, loading, filterList} = useListPage('arcane');

  return (
    <PageSEO
      title={ArcanePageMeatDecorator.title}
      description={ArcanePageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={ArcaneIcon}
        Card={ArcaneCard}
        entityName="Arcane"
      />
    </PageSEO>
  );
};

export default ArcanePage;
