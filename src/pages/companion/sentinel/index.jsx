import PageSEO from '../../../components/PageTemplate/PageSEO';
import ListPageTemplate from '../../../components/PageTemplate/ListPageTemplate';
import {SentinelPageMeatDecorator} from '../../../util/MeatDecoratorList/MeatDecoratorList';
import useListPage from '../../../hooks/useListPage';
import SentinelIcon from '../../../Icons/SentinelIcon';
import SentinelCard from '../../../components/SentinelCard/SentinelCard';

const SentinelPage = () => {
  const {items, loading, filterList} = useListPage('sentinel');

  return (
    <PageSEO
      title={SentinelPageMeatDecorator.title}
      description={SentinelPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={SentinelIcon}
        Card={SentinelCard}
        entityName="Sentinel"
      />
    </PageSEO>
  );
};

export default SentinelPage;
