import React from 'react';
import PageSEO from '../PageTemplate/PageSEO';
import ListPageTemplate from '../PageTemplate/ListPageTemplate';
import useListPage from '../../hooks/useListPage';
import {createCard} from '../CardFactory';
import {getPageConfig} from '../../config/pageConfigs';

/**
 * Universal page generator that creates list pages based on entity configuration
 * This replaces all individual page components with a single configurable component
 *
 * @param {string} entityName - Name of the entity (matches PAGE_CONFIGS key)
 * @returns {React.Component} - Configured page component
 */
const createUniversalPage = (entityName) => {
  const config = getPageConfig(entityName);

  // Create the card component using the factory
  const Card = createCard({
    renderModalContent: config.modalContentRenderer,
    ariaLabelPrefix: config.ariaLabelPrefix,
    useCdnImages: config.useCdnImages,
  });

  const UniversalPage = () => {
    const {items, loading, filterList} = useListPage(config.dataSource);

    return (
      <PageSEO
        title={config.seoMeta.title}
        description={config.seoMeta.description}
      >
        <ListPageTemplate
          items={items}
          loading={loading}
          filterList={filterList}
          Icon={config.Icon}
          Card={Card}
          entityName={config.entityName}
          entityNamePlural={config.entityNamePlural}
        />
      </PageSEO>
    );
  };

  UniversalPage.displayName = `${config.entityName.replace(/\s+/g, '')}Page`;
  return UniversalPage;
};

/**
 * Pre-created page components for all entities
 * These can be imported directly in routing files
 */
export const WarframePage = createUniversalPage('warframe');
export const PrimaryWeaponsPage = createUniversalPage('primary');
export const SecondaryWeaponsPage = createUniversalPage('secondary');
export const MeleeWeaponsPage = createUniversalPage('melee');
export const ArchwingPage = createUniversalPage('archwing');
export const ArchGunPage = createUniversalPage('archGun');
export const ArchMeleePage = createUniversalPage('archMelee');
export const NecramechPage = createUniversalPage('necramech');
export const ModPage = createUniversalPage('mod');
export const ArcanePage = createUniversalPage('arcane');
export const SentinelPage = createUniversalPage('sentinel');
export const SentinelWeaponPage = createUniversalPage('sentinelWeapon');
export const PetPage = createUniversalPage('pet');
export const EnemyPage = createUniversalPage('enemy');
export const QuestPage = createUniversalPage('quest');
export const FishPage = createUniversalPage('fish');
export const GearPage = createUniversalPage('gear');
export const GlyphPage = createUniversalPage('glyph');
export const ResourcePage = createUniversalPage('resource');
export const MiscellaneousPage = createUniversalPage('miscellaneous');
export const SkinPage = createUniversalPage('skin');
export const RailjackPage = createUniversalPage('railjack');


export default createUniversalPage;
