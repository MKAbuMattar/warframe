import useListPage from '../../hooks/useListPage';
import useGetMelee from '../../hooks/useGetMelee';
import MeleeCard from '../../components/MeleeCard/MeleeCard';
import MeleeWeaponIcon from '../../Icons/MeleeWeaponIcon';
import ListPageTemplate from '../../components/PageTemplate/ListPageTemplate';
import PageSEO from '../../components/PageTemplate/PageSEO';
import {MeleeWeaponsPageMeatDecorator} from '../../util/MeatDecoratorList/MeatDecoratorList';

const MeleeWeaponsPage = () => {
  const {items, loading, filterList} = useListPage(useGetMelee);

  return (
    <PageSEO
      title={MeleeWeaponsPageMeatDecorator.title}
      description={MeleeWeaponsPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={MeleeWeaponIcon}
        Card={MeleeCard}
        entityName="Melee Weapon"
        entityNamePlural="Melee Weapons"
      />
    </PageSEO>
  );
};

export default MeleeWeaponsPage;
