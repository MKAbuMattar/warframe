import PageSEO from '../../../components/PageTemplate/PageSEO';
import ListPageTemplate from '../../../components/PageTemplate/ListPageTemplate';
import {ArchGunPageMeatDecorator} from '../../../util/MeatDecoratorList/MeatDecoratorList';
import useListPage from '../../../hooks/useListPage';
import ArchGunWeaponIcon from '../../../Icons/ArchGunWeaponIcon';
import ArchGunCard from '../../../components/ArchGunCard/ArchGunCard';

const ArchGunPage = () => {
  const {items, loading, filterList} = useListPage('archGun');

  return (
    <PageSEO
      title={ArchGunPageMeatDecorator.title}
      description={ArchGunPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={ArchGunWeaponIcon}
        Card={ArchGunCard}
        entityName="Arch-Gun"
        entityNamePlural="Arch-Guns"
      />
    </PageSEO>
  );
};

export default ArchGunPage;
