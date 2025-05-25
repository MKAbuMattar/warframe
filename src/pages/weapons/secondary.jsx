import useListPage from '../../hooks/useListPage';
import useGetSecondary from '../../hooks/useGetSecondary';
import SecondaryCard from '../../components/SecondaryCard/SecondaryCard';
import SecondaryWeaponIcon from '../../Icons/SecondaryWeaponIcon';
import ListPageTemplate from '../../components/PageTemplate/ListPageTemplate';
import PageSEO from '../../components/PageTemplate/PageSEO';
import {SecondaryWeaponsPageMeatDecorator} from '../../util/MeatDecoratorList/MeatDecoratorList';

const SecondaryWeaponsPage = () => {
  const {items, loading, filterList} = useListPage(useGetSecondary);

  return (
    <PageSEO
      title={SecondaryWeaponsPageMeatDecorator.title}
      description={SecondaryWeaponsPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={SecondaryWeaponIcon}
        Card={SecondaryCard}
        entityName="Secondary Weapon"
        entityNamePlural="Secondary Weapons"
      />
    </PageSEO>
  );
};

export default SecondaryWeaponsPage;
