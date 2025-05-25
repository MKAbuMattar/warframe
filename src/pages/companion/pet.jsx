import PageSEO from '../../components/PageTemplate/PageSEO';
import ListPageTemplate from '../../components/PageTemplate/ListPageTemplate';
import {CompanionPageMeatDecorator} from '../../util/MeatDecoratorList/MeatDecoratorList';
import useListPage from '../../hooks/useListPage';
import CompanionIcon from '../../Icons/CompanionIcon';
import PetCard from '../../components/PetCard/PetCard';

const PetPage = () => {
  const {items, loading, filterList} = useListPage('pet');

  return (
    <PageSEO
      title={CompanionPageMeatDecorator.title}
      description={CompanionPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={CompanionIcon}
        Card={PetCard}
        entityName="Pet"
      />
    </PageSEO>
  );
};

export default PetPage;
