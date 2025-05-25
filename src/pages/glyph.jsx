import PageSEO from '../components/PageTemplate/PageSEO';
import ListPageTemplate from '../components/PageTemplate/ListPageTemplate';
import {GlyphPageMeatDecorator} from '../util/MeatDecoratorList/MeatDecoratorList';
import useListPage from '../hooks/useListPage';
import GlyphIcon from '../Icons/GlyphIcon';
import GlyphCard from '../components/GlyphCard/GlyphCard';

const GlyphPage = () => {
  const {items, loading, filterList} = useListPage('glyph');

  return (
    <PageSEO
      title={GlyphPageMeatDecorator.title}
      description={GlyphPageMeatDecorator.description}
    >
      <ListPageTemplate
        items={items}
        loading={loading}
        filterList={filterList}
        Icon={GlyphIcon}
        Card={GlyphCard}
        entityName="Glyph"
      />
    </PageSEO>
  );
};

export default GlyphPage;
