import PageSEO from '../../../components/PageTemplate/PageSEO';
import ListPageTemplate from '../../../components/PageTemplate/ListPageTemplate';
import {SentinelWeaponPageMeatDecorator} from '../../../util/MeatDecoratorList/MeatDecoratorList';
import useListPage from '../../../hooks/useListPage';
import SentinelIcon from '../../../Icons/SentinelIcon';
import SentinelWeaponCard from '../../../components/SentinelWeaponCard/SentinelWeaponCard';

const SentinelWeaponPage = () => {
  const {items, loading, filterList} = useListPage('sentinelWeapon');

  return (
    <PageSEO
      title={SentinelWeaponPageMeatDecorator.title}
      description={SentinelWeaponPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={SentinelIcon}
        Card={SentinelWeaponCard}
        entityName="Sentinel Weapon"
        entityNamePlural="Sentinel Weapons"
      />
    </PageSEO>
  );
};

export default SentinelWeaponPage;
