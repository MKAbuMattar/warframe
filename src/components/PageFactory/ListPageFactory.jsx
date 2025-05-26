import React from 'react';
import PageSEO from '../PageTemplate/PageSEO';
import ListPageTemplate from '../PageTemplate/ListPageTemplate';
import useListPage from '../../hooks/useListPage';

/**
 * Generic factory for creating list pages
 * @param {Object} config - Page configuration
 * @param {string|Function} config.dataSource - Entity name string or hook function
 * @param {React.Component} config.Card - Card component to render
 * @param {React.Component} config.Icon - Icon component
 * @param {Object} config.seoMeta - SEO metadata {title, description}
 * @param {string} config.entityName - Display name for the entity
 * @param {string} config.entityNamePlural - Plural display name (optional)
 * @returns {React.Component} - Configured list page component
 */
const createListPage = (config) => {
  const {dataSource, Card, Icon, seoMeta, entityName, entityNamePlural} =
    config;

  const ListPage = () => {
    const {items, loading, filterList} = useListPage(dataSource);

    return (
      <PageSEO title={seoMeta.title} description={seoMeta.description}>
        <ListPageTemplate
          items={items}
          loading={loading}
          filterList={filterList}
          Icon={Icon}
          Card={Card}
          entityName={entityName}
          entityNamePlural={entityNamePlural}
        />
      </PageSEO>
    );
  };

  ListPage.displayName = `${entityName}Page`;
  return ListPage;
};

export default createListPage;
