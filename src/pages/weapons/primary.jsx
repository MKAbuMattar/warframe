import useListPage from '../../hooks/useListPage';
import useGetPrimary from '../../hooks/useGetPrimary';
import PrimaryCard from '../../components/PrimaryCard/PrimaryCard';
import PrimaryWeaponIcon from '../../Icons/PrimaryWeaponIcon';
import ListPageTemplate from '../../components/PageTemplate/ListPageTemplate';
import PageSEO from '../../components/PageTemplate/PageSEO';
import {PrimaryWeaponsPageMeatDecorator} from '../../util/MeatDecoratorList/MeatDecoratorList';

const PrimaryWeaponsPage = () => {
  const {items, loading, filterList} = useListPage(useGetPrimary);

  return (
    <PageSEO
      title={PrimaryWeaponsPageMeatDecorator.title}
      description={PrimaryWeaponsPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={PrimaryWeaponIcon}
        Card={PrimaryCard}
        entityName="Primary Weapon"
        entityNamePlural="Primary Weapons"
      />
    </PageSEO>
  );
};

export default PrimaryWeaponsPage;
