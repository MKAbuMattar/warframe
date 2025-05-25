import PageSEO from '../../../components/PageTemplate/PageSEO';
import ListPageTemplate from '../../../components/PageTemplate/ListPageTemplate';
import {ArchMeleePageMeatDecorator} from '../../../util/MeatDecoratorList/MeatDecoratorList';
import useListPage from '../../../hooks/useListPage';
import ArchMeleeWeaponIcon from '../../../Icons/ArchMeleeWeaponIcon';
import ArchMeleeCard from '../../../components/ArchMeleeCard/ArchMeleeCard';

const ArchMeleePage = () => {
  const {items, loading, filterList} = useListPage('archMelee');

  return (
    <PageSEO
      title={ArchMeleePageMeatDecorator.title}
      description={ArchMeleePageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={ArchMeleeWeaponIcon}
        Card={ArchMeleeCard}
        entityName="Arch-Melee"
        entityNamePlural="Arch-Melee Weapons"
      />
    </PageSEO>
  );
};

export default ArchMeleePage;
