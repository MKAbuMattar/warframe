import useListPage from '../../hooks/useListPage';
import useGetWarframe from '../../hooks/useGetWarframe';
import WarframeCard from '../../components/WarframeCard/WarframeCard';
import WarframeIcon from '../../Icons/WarframeIcon';
import ListPageTemplate from '../../components/PageTemplate/ListPageTemplate';
import PageSEO from '../../components/PageTemplate/PageSEO';
import {WarframePageMeatDecorator} from '../../util/MeatDecoratorList/MeatDecoratorList';

const WarframePage = () => {
  const {items, loading, filterList} = useListPage(useGetWarframe);

  return (
    <PageSEO
      title={WarframePageMeatDecorator.title}
      description={WarframePageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={WarframeIcon}
        Card={WarframeCard}
        entityName="Warframe"
      />
    </PageSEO>
  );
};

export default WarframePage;
