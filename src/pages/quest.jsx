import PageSEO from '../components/PageTemplate/PageSEO';
import ListPageTemplate from '../components/PageTemplate/ListPageTemplate';
import {QuestPageMeatDecorator} from '../util/MeatDecoratorList/MeatDecoratorList';
import useListPage from '../hooks/useListPage';
import QuestIcon from '../Icons/QuestIcon';
import QuestCard from '../components/QuestCard/QuestCard';

const QuestPage = () => {
  const {items, loading, filterList} = useListPage('quest');

  return (
    <PageSEO
      title={QuestPageMeatDecorator.title}
      description={QuestPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={QuestIcon}
        Card={QuestCard}
        entityName="Quest"
      />
    </PageSEO>
  );
};

export default QuestPage;
