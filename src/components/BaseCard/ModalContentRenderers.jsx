import React, {Fragment} from 'react';
import Link from 'next/link';
import {
  ModalInfoSubtite,
  ModalInfoAttackSubtite,
  ModalInfoSubtiteAbilitie,
  ModalInfoAbilities,
  ModalInfoAbilitie,
} from '../../style/Style';
import DamageIcons from '../DamageIcons/DamageIcons';
import AbilitieIcons from '../AbilitieIcons/AbilitieIcons';
import {Capitalize} from '../../util/Capitalize/Capitalize';
import {generateUniqueKey} from '../../util/generateUniqueKey/index';

/**
 * Collection of specialized modal content renderers for different entity types
 */

// Warframe-specific modal content
export const WarframeModalContent = React.memo(({item}) => (
  <>
    {item.type && (
      <ModalInfoSubtite>
        Type: <span>{item.type}</span>
      </ModalInfoSubtite>
    )}

    {item.aura && (
      <ModalInfoSubtite>
        Aura: <span>{item.aura}</span>
      </ModalInfoSubtite>
    )}

    {item.health && (
      <ModalInfoSubtite>
        Health:{' '}
        <span>
          {item.health} ({Number(item.health) * 3} at R30)
        </span>
      </ModalInfoSubtite>
    )}

    {item.shield && (
      <ModalInfoSubtite>
        Shield:{' '}
        <span>
          {item.shield} ({Number(item.shield) * 3} at R30)
        </span>
      </ModalInfoSubtite>
    )}

    {item.armor && (
      <ModalInfoSubtite>
        Armor: <span>{item.armor}</span>
      </ModalInfoSubtite>
    )}

    {item.power && (
      <ModalInfoSubtite>
        Energy:{' '}
        <span>
          {item.power} ({Number(item.power) * Number(1.5)} at R30)
        </span>
      </ModalInfoSubtite>
    )}

    {item.sprint && (
      <ModalInfoSubtite>
        Sprint Speed: <span>{item.sprint}</span>
      </ModalInfoSubtite>
    )}

    {item.passiveDescription && (
      <ModalInfoSubtite>
        Passive: <span>{item.passiveDescription}</span>
      </ModalInfoSubtite>
    )}

    {item.description && (
      <ModalInfoSubtite>
        Description: <span>{item.description}</span>
      </ModalInfoSubtite>
    )}

    {item.masteryReq && (
      <ModalInfoSubtite>
        Mastery Requirement: <span>{item.masteryReq}</span>
      </ModalInfoSubtite>
    )}

    {item.sex && (
      <ModalInfoSubtite>
        Gender: <span>{item.sex}</span>
      </ModalInfoSubtite>
    )}

    {item.polarities && (
      <ModalInfoSubtite>
        Polarities:{' '}
        <span>
          {item.polarities &&
            item.polarities.map((polarity, idx) => (
              <i key={idx}>{polarity} </i>
            ))}{' '}
        </span>
      </ModalInfoSubtite>
    )}

    {item.abilities && item.abilities.length > 0 && (
      <>
        <ModalInfoSubtiteAbilitie>Abilities</ModalInfoSubtiteAbilitie>
        <ModalInfoAbilities>
          {item.abilities.map((ability, idx) => (
            <ModalInfoAbilitie key={idx}>
              <AbilitieIcons
                warframe={item.name}
                abilitie={ability.name}
                description={ability.description}
              />
              <ModalInfoSubtite>{ability.name}</ModalInfoSubtite>
              <ModalInfoSubtite>
                <span>{ability.description}</span>
              </ModalInfoSubtite>
            </ModalInfoAbilitie>
          ))}
        </ModalInfoAbilities>
      </>
    )}

    {item.releaseDate && (
      <ModalInfoSubtite>
        Release Date: <span>{item.releaseDate}</span>
      </ModalInfoSubtite>
    )}

    {item.vaultDate !== 'n/a' && item.vaultDate !== undefined && (
      <Fragment>
        <ModalInfoSubtite>
          Vault Date: <span>{item.vaultDate}</span>
        </ModalInfoSubtite>
      </Fragment>
    )}

    {item.vaultDate === 'n/a' && (
      <Fragment>
        <ModalInfoSubtite>
          Estimated Vault Date: <span>{item.estimatedVaultDate}</span>
        </ModalInfoSubtite>
      </Fragment>
    )}

    {item.introduced && (
      <ModalInfoSubtite>
        {item.introduced.url !== undefined && (
          <Fragment>
            Introduced:{' '}
            <Link href={item.introduced.url} target="__blank">
              {item.introduced.name} / Date: {item.introduced.date}
            </Link>
          </Fragment>
        )}
      </ModalInfoSubtite>
    )}

    {item.wikiaUrl && (
      <ModalInfoSubtite>
        <Link href={item.wikiaUrl} target="__blank">
          Wiki Link
        </Link>
      </ModalInfoSubtite>
    )}
  </>
));

// Weapon-specific modal content
export const WeaponModalContent = React.memo(({item}) => (
  <>
    {item.type && (
      <ModalInfoSubtite>
        Type: <span>{item.type}</span>
      </ModalInfoSubtite>
    )}

    {item.category && (
      <ModalInfoSubtite>
        Category: <span>{item.category}</span>
      </ModalInfoSubtite>
    )}

    {item.damage && typeof item.damage === 'object' && (
      <ModalInfoSubtite>
        Damage:{' '}
        <span>
          {Object.entries(item.damage)
            .map(([type, value]) => `${type}: ${value}`)
            .join(', ')}
        </span>
      </ModalInfoSubtite>
    )}

    {item.totalDamage && (
      <ModalInfoSubtite>
        Total Damage: <span>{item.totalDamage}</span>
      </ModalInfoSubtite>
    )}

    {item.fireRate && (
      <ModalInfoSubtite>
        Fire Rate: <span>{item.fireRate}</span>
      </ModalInfoSubtite>
    )}

    {item.accuracy && (
      <ModalInfoSubtite>
        Accuracy: <span>{item.accuracy}</span>
      </ModalInfoSubtite>
    )}

    {item.criticalChance && (
      <ModalInfoSubtite>
        Critical Chance: <span>{item.criticalChance}%</span>
      </ModalInfoSubtite>
    )}

    {item.criticalMultiplier && (
      <ModalInfoSubtite>
        Critical Multiplier: <span>{item.criticalMultiplier}x</span>
      </ModalInfoSubtite>
    )}

    {item.statusChance && (
      <ModalInfoSubtite>
        Status Chance: <span>{item.statusChance}%</span>
      </ModalInfoSubtite>
    )}

    {item.masteryReq && (
      <ModalInfoSubtite>
        Mastery Requirement: <span>{item.masteryReq}</span>
      </ModalInfoSubtite>
    )}

    {item.description && (
      <ModalInfoSubtite>
        Description: <span>{item.description}</span>
      </ModalInfoSubtite>
    )}
  </>
));

// Railjack-specific modal content
export const RailjackModalContent = React.memo(({item}) => (
  <>
    {item.type && (
      <ModalInfoSubtite>
        Type: <span>{item.type}</span>
      </ModalInfoSubtite>
    )}

    {item.category && (
      <ModalInfoSubtite>
        Category: <span>{item.category}</span>
      </ModalInfoSubtite>
    )}

    {item.description && (
      <ModalInfoSubtite>
        Description: <span>{item.description}</span>
      </ModalInfoSubtite>
    )}

    {item.health && (
      <ModalInfoSubtite>
        Health: <span>{item.health}</span>
      </ModalInfoSubtite>
    )}

    {item.armor && (
      <ModalInfoSubtite>
        Armor: <span>{item.armor}</span>
      </ModalInfoSubtite>
    )}

    {item.shield && (
      <ModalInfoSubtite>
        Shield: <span>{item.shield}</span>
      </ModalInfoSubtite>
    )}

    {item.speed && (
      <ModalInfoSubtite>
        Speed: <span>{item.speed}</span>
      </ModalInfoSubtite>
    )}

    {item.masteryReq && (
      <ModalInfoSubtite>
        Mastery Requirement: <span>{item.masteryReq}</span>
      </ModalInfoSubtite>
    )}

    {item.buildTime && (
      <ModalInfoSubtite>
        Build Time: <span>{item.buildTime}</span>
      </ModalInfoSubtite>
    )}

    {item.tradable !== undefined && (
      <ModalInfoSubtite>
        Tradable: <span>{item.tradable ? 'Yes' : 'No'}</span>
      </ModalInfoSubtite>
    )}

    {item.abilities && item.abilities.length > 0 && (
      <ModalInfoSubtite>
        Abilities:
        <span>
          {item.abilities.map((ability, i) => (
            <div key={i}>
              {ability.name}: {ability.description}
            </div>
          ))}
        </span>
      </ModalInfoSubtite>
    )}
  </>
));

// Quest-specific modal content
export const QuestModalContent = React.memo(({item}) => (
  <>
    {item.description && (
      <ModalInfoSubtite>
        Description: <span>{item.description}</span>
      </ModalInfoSubtite>
    )}

    {item.location && (
      <ModalInfoSubtite>
        Location: <span>{item.location}</span>
      </ModalInfoSubtite>
    )}

    {item.levelRange && (
      <ModalInfoSubtite>
        Level Range: <span>{item.levelRange}</span>
      </ModalInfoSubtite>
    )}

    {item.rewards && item.rewards.length > 0 && (
      <ModalInfoSubtite>
        Rewards: <span>{item.rewards.join(', ')}</span>
      </ModalInfoSubtite>
    )}
  </>
));

// Simple modal content for basic items (Fish, Gear, etc.)
export const SimpleModalContent = React.memo(({item}) => (
  <>
    {item.type && (
      <ModalInfoSubtite>
        Type: <span>{item.type}</span>
      </ModalInfoSubtite>
    )}

    {item.category && (
      <ModalInfoSubtite>
        Category: <span>{item.category}</span>
      </ModalInfoSubtite>
    )}

    {item.description && (
      <ModalInfoSubtite>
        Description: <span>{item.description}</span>
      </ModalInfoSubtite>
    )}

    {item.tradable !== undefined && (
      <ModalInfoSubtite>
        Tradable: <span>{item.tradable ? 'Yes' : 'No'}</span>
      </ModalInfoSubtite>
    )}
  </>
));

// Primary Weapon-specific modal content with complete attack information
export const PrimaryWeaponModalContent = React.memo(({item}) => (
  <>
    {item.masteryReq !== undefined && (
      <ModalInfoSubtite>
        Mastery Rank: <span>{item.masteryReq}</span>
      </ModalInfoSubtite>
    )}

    {item.tags && (
      <ModalInfoSubtite>
        Weapon: <span>{item.tags[0]}</span>
      </ModalInfoSubtite>
    )}

    {item.type !== undefined && (
      <ModalInfoSubtite>
        Weapon type: <span>{item.type}</span>
      </ModalInfoSubtite>
    )}

    {item.description !== undefined && (
      <ModalInfoSubtite>
        Weapon Description: <span>{item.description}</span>
      </ModalInfoSubtite>
    )}

    {item.attacks && (
      <>
        {item.attacks.map((element, idx) => (
          <div key={generateUniqueKey(idx)}>
            {item.attacks.length > 1 && (
              <ModalInfoAttackSubtite>
                Attack Name: <span>{element.name}</span>
              </ModalInfoAttackSubtite>
            )}

            {item.accuracy !== undefined && (
              <ModalInfoSubtite>
                Accuracy: <span>{item.accuracy.toFixed(1)}</span>
              </ModalInfoSubtite>
            )}

            {element.crit_chance !== undefined && (
              <ModalInfoSubtite>
                Critical Chance <span>{element.crit_chance}%</span>
              </ModalInfoSubtite>
            )}

            {element.crit_mult !== undefined && (
              <ModalInfoSubtite>
                Critical Multiplier <span>{element.crit_mult}x</span>
              </ModalInfoSubtite>
            )}

            {element.speed !== undefined && (
              <ModalInfoSubtite>
                Fire Rate: <span>{element.speed}</span>
              </ModalInfoSubtite>
            )}

            {item.magazineSize !== undefined && item.ammo > 0 && (
              <ModalInfoSubtite>
                Magazine:
                <span>
                  {item.magazineSize !== undefined && <>{item.magazineSize}</>}
                  {item.ammo > 0 && <> / {item.ammo}</>}
                </span>
              </ModalInfoSubtite>
            )}

            {item.multishot !== undefined && (
              <ModalInfoSubtite>
                Multishot: <span>{item.multishot}</span>
              </ModalInfoSubtite>
            )}

            {item.noise !== undefined && (
              <ModalInfoSubtite>
                Noise: <span>{item.noise}</span>
              </ModalInfoSubtite>
            )}

            {item.reloadTime !== undefined && (
              <ModalInfoSubtite>
                Reload: <span>{item.reloadTime}</span>
              </ModalInfoSubtite>
            )}

            {item.disposition !== undefined && (
              <ModalInfoSubtite>
                Riven Disposition: <span>{item.disposition}</span>
              </ModalInfoSubtite>
            )}

            {element.status_chance !== undefined && (
              <ModalInfoSubtite>
                Status Chance: <span>{element.status_chance}%</span>
              </ModalInfoSubtite>
            )}

            <ModalInfoSubtite>Damage</ModalInfoSubtite>
            <ModalInfoSubtite>
              {Object.entries(element.damage).map(([key, value], idx) => (
                <ModalInfoSubtite key={generateUniqueKey(idx)}>
                  <DamageIcons damage={key} /> {Capitalize(key)}:{' '}
                  <span>{value}</span>
                </ModalInfoSubtite>
              ))}
            </ModalInfoSubtite>

            {item.trigger !== undefined && (
              <ModalInfoSubtite>
                Trigger: <span>{item.trigger}</span>
              </ModalInfoSubtite>
            )}

            {item.totalDamage !== undefined && (
              <ModalInfoSubtite>
                Total Damage: <span>{item.totalDamage}</span>
              </ModalInfoSubtite>
            )}
          </div>
        ))}
      </>
    )}

    {item.releaseDate !== undefined && (
      <ModalInfoSubtite>
        Release Date: <span>{item.releaseDate}</span>
      </ModalInfoSubtite>
    )}

    {item.vaultDate !== 'n/a' && item.vaultDate !== undefined && (
      <ModalInfoSubtite>
        Vault Date: <span>{item.vaultDate}</span>
      </ModalInfoSubtite>
    )}

    {item.vaultDate === 'n/a' && (
      <ModalInfoSubtite>
        Estimated Vault Date: <span>{item.estimatedVaultDate}</span>
      </ModalInfoSubtite>
    )}

    {item.introduced && (
      <ModalInfoSubtite>
        Introduced:{' '}
        <Link href={item.introduced.url} target="__blank">
          {item.introduced.name} / Date: {item.introduced.date}
        </Link>
      </ModalInfoSubtite>
    )}

    {item.wikiaUrl && (
      <ModalInfoSubtite>
        <Link href={item.wikiaUrl} target="__blank">
          Wiki Link
        </Link>
      </ModalInfoSubtite>
    )}
  </>
));

// Melee Weapon-specific modal content with melee attack information
export const MeleeWeaponModalContent = React.memo(({item}) => (
  <>
    {item.masteryReq !== undefined && (
      <ModalInfoSubtite>
        Mastery Rank: <span>{item.masteryReq}</span>
      </ModalInfoSubtite>
    )}

    {item.tags && (
      <ModalInfoSubtite>
        Weapon: <span>{item.tags[0]}</span>
      </ModalInfoSubtite>
    )}

    {item.type !== undefined && (
      <ModalInfoSubtite>
        Weapon type: <span>{item.type}</span>
      </ModalInfoSubtite>
    )}

    {item.description !== undefined && (
      <ModalInfoSubtite>
        Weapon Description: <span>{item.description}</span>
      </ModalInfoSubtite>
    )}

    {item.attacks && (
      <>
        {item.attacks.map((element, idx) => (
          <div key={generateUniqueKey(idx)}>
            {item.attacks.length > 1 && (
              <ModalInfoAttackSubtite>
                Attack Name: <span>{element.name}</span>
              </ModalInfoAttackSubtite>
            )}

            {element.speed !== undefined && (
              <ModalInfoSubtite>
                Attack Speed: <span>{element.speed}</span>
              </ModalInfoSubtite>
            )}

            {element.crit_chance !== undefined && (
              <ModalInfoSubtite>
                Critical Chance: <span>{element.crit_chance}%</span>
              </ModalInfoSubtite>
            )}

            {element.crit_mult !== undefined && (
              <ModalInfoSubtite>
                Critical Multiplier: <span>{element.crit_mult}x</span>
              </ModalInfoSubtite>
            )}

            {item.range !== undefined && (
              <ModalInfoSubtite>
                Range: <span>{item.range}m</span>
              </ModalInfoSubtite>
            )}

            {item.disposition !== undefined && (
              <ModalInfoSubtite>
                Riven Disposition: <span>{item.disposition}</span>
              </ModalInfoSubtite>
            )}

            {element.status_chance !== undefined && (
              <ModalInfoSubtite>
                Status Chance: <span>{element.status_chance}%</span>
              </ModalInfoSubtite>
            )}

            <ModalInfoSubtite>Damage</ModalInfoSubtite>
            <ModalInfoSubtite>
              {Object.entries(element.damage).map(([key, value], idx) => (
                <ModalInfoSubtite key={generateUniqueKey(idx)}>
                  <DamageIcons damage={key} /> {Capitalize(key)}:{' '}
                  <span>{value}</span>
                </ModalInfoSubtite>
              ))}
            </ModalInfoSubtite>

            {item.totalDamage !== undefined && (
              <ModalInfoSubtite>
                Total Damage: <span>{item.totalDamage}</span>
              </ModalInfoSubtite>
            )}

            {item.followThrough !== undefined && (
              <ModalInfoSubtite>
                Follow Through: <span>{item.followThrough}</span>
              </ModalInfoSubtite>
            )}

            {element.slide !== undefined && (
              <ModalInfoSubtite>
                Slide Attack: <span>{element.slide}</span>
              </ModalInfoSubtite>
            )}

            {element.slam && (
              <>
                {element.slam.damage !== undefined && (
                  <ModalInfoSubtite>
                    Slam Attack: <span>{element.slam.damage}</span>
                  </ModalInfoSubtite>
                )}
                {element.slam.radial && (
                  <ModalInfoSubtite>
                    Slam Radial:{' '}
                    <span>
                      {element.slam.radial.damage} (
                      {element.slam.radial.element})
                    </span>
                  </ModalInfoSubtite>
                )}
              </>
            )}

            {element.heavy && (
              <>
                {element.heavy.damage !== undefined && (
                  <ModalInfoSubtite>
                    Heavy Attack: <span>{element.heavy.damage}</span>
                  </ModalInfoSubtite>
                )}
                {element.heavy.speed !== undefined && (
                  <ModalInfoSubtite>
                    Heavy Attack Speed: <span>{element.heavy.speed}</span>
                  </ModalInfoSubtite>
                )}
              </>
            )}
          </div>
        ))}
      </>
    )}

    {item.releaseDate !== undefined && (
      <ModalInfoSubtite>
        Release Date: <span>{item.releaseDate}</span>
      </ModalInfoSubtite>
    )}

    {item.vaultDate !== 'n/a' && item.vaultDate !== undefined && (
      <ModalInfoSubtite>
        Vault Date: <span>{item.vaultDate}</span>
      </ModalInfoSubtite>
    )}

    {item.vaultDate === 'n/a' && (
      <ModalInfoSubtite>
        Estimated Vault Date: <span>{item.estimatedVaultDate}</span>
      </ModalInfoSubtite>
    )}

    {item.introduced && (
      <ModalInfoSubtite>
        Introduced:{' '}
        <Link href={item.introduced.url} target="__blank">
          {item.introduced.name} / Date: {item.introduced.date}
        </Link>
      </ModalInfoSubtite>
    )}

    {item.wikiaUrl && (
      <ModalInfoSubtite>
        <Link href={item.wikiaUrl} target="__blank">
          Wiki Link
        </Link>
      </ModalInfoSubtite>
    )}
  </>
));

// Enemy-specific modal content
export const EnemyModalContent = React.memo(({item}) => (
  <>
    {item.description && (
      <ModalInfoSubtite>
        Description: <span>{item.description}</span>
      </ModalInfoSubtite>
    )}

    {item.type && (
      <ModalInfoSubtite>
        Type: <span>{item.type}</span>
      </ModalInfoSubtite>
    )}

    {item.health && (
      <ModalInfoSubtite>
        Health:{' '}
        <span>
          {item.health} ({Number(item.health) * 3} at R30)
        </span>
      </ModalInfoSubtite>
    )}

    {item.shield && (
      <ModalInfoSubtite>
        Shield:{' '}
        <span>
          {item.shield} ({Number(item.shield) * 3} at R30)
        </span>
      </ModalInfoSubtite>
    )}

    {item.armor && (
      <ModalInfoSubtite>
        Armor: <span>{item.armor}</span>
      </ModalInfoSubtite>
    )}

    {item.resistances && item.resistances.length > 0 && (
      <>
        <ModalInfoSubtiteAbilitie>Resistances</ModalInfoSubtiteAbilitie>
        <ModalInfoAbilities>
          {item.resistances.map((resistance, idx) => (
            <ModalInfoAbilitie key={idx}>
              <ModalInfoSubtite>{resistance.type}</ModalInfoSubtite>
              {resistance.affectors?.map((affector, affectorIdx) => (
                <Fragment key={generateUniqueKey(affectorIdx)}>
                  <ModalInfoSubtite>
                    <DamageIcons damage={affector.element} /> {affector.element}
                    {': '}
                    <span>{affector.modifier}</span>
                  </ModalInfoSubtite>
                </Fragment>
              ))}
            </ModalInfoAbilitie>
          ))}
        </ModalInfoAbilities>
      </>
    )}

    {item.drops && item.drops.length > 0 && (
      <>
        <ModalInfoSubtiteAbilitie>Drops</ModalInfoSubtiteAbilitie>
        <ModalInfoAbilities>
          {item.drops.map((drop, idx) => (
            <ModalInfoAbilitie key={idx}>
              {drop.rarity &&
                drop.chance !== undefined &&
                drop.chance !== null &&
                drop.type && (
                  <>
                    <ModalInfoSubtite>{drop.location}</ModalInfoSubtite>
                    {drop.rarity && (
                      <ModalInfoSubtite>
                        <span>Rarity: {drop.rarity}</span>
                      </ModalInfoSubtite>
                    )}
                    {drop.chance !== undefined && drop.chance !== null && (
                      <ModalInfoSubtite>
                        <span>Drop Chance: {drop.chance.toFixed(2)}</span>
                      </ModalInfoSubtite>
                    )}
                    {drop.type && (
                      <ModalInfoSubtite>
                        <span>Drop Type: {drop.type}</span>
                      </ModalInfoSubtite>
                    )}
                  </>
                )}
            </ModalInfoAbilitie>
          ))}
        </ModalInfoAbilities>
      </>
    )}
  </>
));

// Necramech-specific modal content
export const NecramechModalContent = React.memo(({item}) => (
  <>
    {item.masteryReq && (
      <ModalInfoSubtite>
        Mastery Rank: <span>{item.masteryReq}</span>
      </ModalInfoSubtite>
    )}

    {item.health && (
      <ModalInfoSubtite>
        Health:{' '}
        <span>
          {item.health} ({Number(item.health) * 3} at R30)
        </span>
      </ModalInfoSubtite>
    )}

    {item.shield && (
      <ModalInfoSubtite>
        Shield:{' '}
        <span>
          {item.shield} ({Number(item.shield) * 3} at R30)
        </span>
      </ModalInfoSubtite>
    )}

    {item.armor && (
      <ModalInfoSubtite>
        Armor: <span>{item.armor}</span>
      </ModalInfoSubtite>
    )}

    {item.power && (
      <ModalInfoSubtite>
        Energy:{' '}
        <span>
          {item.power} ({Number(item.power) * Number(1.5)} at R30)
        </span>
      </ModalInfoSubtite>
    )}

    {item.sprintSpeed && (
      <ModalInfoSubtite>
        Speed: <span>{item.sprintSpeed}</span>
      </ModalInfoSubtite>
    )}

    {item.description && (
      <ModalInfoSubtite>
        Description: <span>{item.description}</span>
      </ModalInfoSubtite>
    )}

    {item.passiveDescription && (
      <ModalInfoSubtite>
        Passive: <span>{item.passiveDescription}</span>
      </ModalInfoSubtite>
    )}

    {item.abilities && item.abilities.length > 0 && (
      <>
        <ModalInfoSubtiteAbilitie>Abilities</ModalInfoSubtiteAbilitie>
        <ModalInfoAbilities>
          {item.abilities.map((ability, idx) => (
            <ModalInfoAbilitie key={idx}>
              <AbilitieIcons
                warframe={item.name}
                abilitie={ability.name}
                description={ability.description}
              />
              <ModalInfoSubtite>{ability.name}</ModalInfoSubtite>
              <ModalInfoSubtite>
                <span>{ability.description}</span>
              </ModalInfoSubtite>
            </ModalInfoAbilitie>
          ))}
        </ModalInfoAbilities>
      </>
    )}

    {item.releaseDate && (
      <ModalInfoSubtite>
        Release Date: <span>{item.releaseDate}</span>
      </ModalInfoSubtite>
    )}

    {item.vaultDate && item.vaultDate !== 'n/a' && (
      <ModalInfoSubtite>
        Vault Date: <span>{item.vaultDate}</span>
      </ModalInfoSubtite>
    )}

    {item.vaultDate === 'n/a' && item.estimatedVaultDate && (
      <ModalInfoSubtite>
        Estimated Vault Date: <span>{item.estimatedVaultDate}</span>
      </ModalInfoSubtite>
    )}
  </>
));

// Mod-specific modal content
export const ModModalContent = React.memo(({item}) => (
  <>
    {item.description && (
      <ModalInfoSubtite>
        Description: <span>{item.description}</span>
      </ModalInfoSubtite>
    )}

    {item.type && (
      <ModalInfoSubtite>
        Mod Type: <span>{item.type}</span>
      </ModalInfoSubtite>
    )}

    {item.isAugment !== undefined && item.isAugment !== false && (
      <ModalInfoSubtite>
        Augment: <span>{item.compatName}</span>
      </ModalInfoSubtite>
    )}

    {item.rarity && (
      <ModalInfoSubtite>
        Rarity: <span>{item.rarity}</span>
      </ModalInfoSubtite>
    )}

    {item.polarity !== undefined && (
      <ModalInfoSubtite>
        Polarity: <span>{item.polarity}</span>
      </ModalInfoSubtite>
    )}

    {item.levelStats !== undefined && (
      <>
        <ModalInfoSubtite style={{fontWeight: 'bold', marginTop: '15px'}}>
          Mod Level Stats
        </ModalInfoSubtite>
        <div style={{marginLeft: '10px'}}>
          {item.levelStats.map((element, idx) => (
            <ModalInfoSubtite key={idx}>{element.stats[0]}</ModalInfoSubtite>
          ))}
        </div>
      </>
    )}

    {item.releaseDate !== undefined && (
      <ModalInfoSubtite>
        Release Date: <span>{item.releaseDate}</span>
      </ModalInfoSubtite>
    )}

    {item.introduced !== undefined && (
      <ModalInfoSubtite>
        Introduced:{' '}
        <Link href={item.introduced.url} target="__blank">
          {item.introduced.name} / Date: {item.introduced.date}
        </Link>
      </ModalInfoSubtite>
    )}

    {item.wikiaUrl !== undefined && (
      <ModalInfoSubtite>
        <Link href={item.wikiaUrl} target="__blank">
          Wiki Link
        </Link>
      </ModalInfoSubtite>
    )}
  </>
));

// Arcane-specific modal content
export const ArcaneModalContent = React.memo(({item}) => (
  <>
    {item.description && (
      <ModalInfoSubtite>
        Description: <span>{item.description}</span>
      </ModalInfoSubtite>
    )}

    {item.rarity && (
      <ModalInfoSubtite>
        Rarity: <span>{item.rarity}</span>
      </ModalInfoSubtite>
    )}

    {item.levelStats !== undefined && (
      <>
        <ModalInfoSubtite style={{fontWeight: 'bold', marginTop: '15px'}}>
          Mod Level Stats
        </ModalInfoSubtite>
        <div style={{marginLeft: '10px'}}>
          {item.levelStats.map((element, idx) => (
            <ModalInfoSubtite key={generateUniqueKey(idx)}>
              {element.stats[0]}
            </ModalInfoSubtite>
          ))}
        </div>
      </>
    )}

    {item.releaseDate !== undefined && (
      <ModalInfoSubtite>
        Release Date: <span>{item.releaseDate}</span>
      </ModalInfoSubtite>
    )}

    {item.introduced !== undefined && (
      <ModalInfoSubtite>
        Introduced:{' '}
        <Link href={item.introduced.url} target="__blank">
          {item.introduced.name} / Date: {item.introduced.date}
        </Link>
      </ModalInfoSubtite>
    )}

    {item.wikiaUrl !== undefined && (
      <ModalInfoSubtite>
        <Link href={item.wikiaUrl} target="__blank">
          Wiki Link
        </Link>
      </ModalInfoSubtite>
    )}
  </>
));

// Archwing-specific modal content
export const ArchwingModalContent = React.memo(({item}) => (
  <>
    {item.description && (
      <ModalInfoSubtite>
        Description: <span>{item.description}</span>
      </ModalInfoSubtite>
    )}

    {item.type && (
      <ModalInfoSubtite>
        Type: <span>{item.type}</span>
      </ModalInfoSubtite>
    )}

    {item.sprint && (
      <ModalInfoSubtite>
        Sprint: <span>{item.sprint}</span>
      </ModalInfoSubtite>
    )}

    {item.health && (
      <ModalInfoSubtite>
        Health:{' '}
        <span>
          {item.health} ({Number(item.health) * 3} at R30)
        </span>
      </ModalInfoSubtite>
    )}

    {item.shield && (
      <ModalInfoSubtite>
        Shield:{' '}
        <span>
          {item.shield} ({Number(item.shield) * 3} at R30)
        </span>
      </ModalInfoSubtite>
    )}

    {item.armor && (
      <ModalInfoSubtite>
        Armor: <span>{item.armor}</span>
      </ModalInfoSubtite>
    )}

    {item.abilities &&
      Array.isArray(item.abilities) &&
      item.abilities.length > 0 && (
        <>
          <ModalInfoSubtiteAbilitie>Abilities</ModalInfoSubtiteAbilitie>
          <ModalInfoAbilities>
            {item.abilities.map((ability, idx) => (
              <ModalInfoAbilitie key={idx}>
                <ModalInfoSubtite>{ability.name}</ModalInfoSubtite>
                {ability.description && (
                  <ModalInfoSubtite>
                    <span>{ability.description}</span>
                  </ModalInfoSubtite>
                )}
              </ModalInfoAbilitie>
            ))}
          </ModalInfoAbilities>
        </>
      )}

    {item.passiveDescription && (
      <ModalInfoSubtite>
        Passive: <span>{item.passiveDescription}</span>
      </ModalInfoSubtite>
    )}

    {item.introduced && (
      <ModalInfoSubtite>
        Introduced:{' '}
        <Link href={item.introduced.url} target="__blank">
          {item.introduced.name} / Date: {item.introduced.date}
        </Link>
      </ModalInfoSubtite>
    )}

    {item.wikiaUrl && (
      <ModalInfoSubtite>
        <Link href={item.wikiaUrl} target="__blank">
          Wiki Link
        </Link>
      </ModalInfoSubtite>
    )}
  </>
));

// Companion (Pet/Sentinel) modal content
export const CompanionModalContent = React.memo(({item}) => (
  <>
    {item.description && (
      <ModalInfoSubtite>
        Description: <span>{item.description}</span>
      </ModalInfoSubtite>
    )}

    {item.type && (
      <ModalInfoSubtite>
        Type: <span>{item.type}</span>
      </ModalInfoSubtite>
    )}

    {item.health && (
      <ModalInfoSubtite>
        Health:{' '}
        <span>
          {item.health} ({Number(item.health) * 3} at R30)
        </span>
      </ModalInfoSubtite>
    )}

    {item.shield && (
      <ModalInfoSubtite>
        Shield:{' '}
        <span>
          {item.shield} ({Number(item.shield) * 3} at R30)
        </span>
      </ModalInfoSubtite>
    )}

    {item.armor && (
      <ModalInfoSubtite>
        Armor: <span>{item.armor}</span>
      </ModalInfoSubtite>
    )}

    {item.abilities &&
      Array.isArray(item.abilities) &&
      item.abilities.length > 0 && (
        <>
          <ModalInfoSubtiteAbilitie>Abilities</ModalInfoSubtiteAbilitie>
          <ModalInfoAbilities>
            {item.abilities.map((ability, idx) => (
              <ModalInfoAbilitie key={idx}>
                <ModalInfoSubtite>{ability.name}</ModalInfoSubtite>
                {ability.description && (
                  <ModalInfoSubtite>
                    <span>{ability.description}</span>
                  </ModalInfoSubtite>
                )}
              </ModalInfoAbilitie>
            ))}
          </ModalInfoAbilities>
        </>
      )}

    {item.passiveDescription && (
      <ModalInfoSubtite>
        Passive: <span>{item.passiveDescription}</span>
      </ModalInfoSubtite>
    )}

    {item.polarities &&
      Array.isArray(item.polarities) &&
      item.polarities.length > 0 && (
        <ModalInfoSubtite>
          Polarities: <span>{item.polarities.join(', ')}</span>
        </ModalInfoSubtite>
      )}

    {item.introduced && (
      <ModalInfoSubtite>
        Introduced:{' '}
        <Link href={item.introduced.url} target="__blank">
          {item.introduced.name} / Date: {item.introduced.date}
        </Link>
      </ModalInfoSubtite>
    )}

    {item.wikiaUrl && (
      <ModalInfoSubtite>
        <Link href={item.wikiaUrl} target="__blank">
          Wiki Link
        </Link>
      </ModalInfoSubtite>
    )}
  </>
));
