import { Fragment } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Warframe from './Warframe'

import PrimaryWeapon from './PrimaryWeapon'
import SecondaryWeapon from './SecondaryWeapon'
import MeleeWeapon from './MeleeWeapon'

import Pet from './Pet'
import Sentinel from './Sentinel'
import SentinelWeapon from './SentinelWeapon'

import Archwing from './Archwing'
import ArchGunWeapon from './ArchGunWeapon'
import ArchMeleeWeapon from './ArchMeleeWeapon'

import Necramech from './Necramech'

import Mod from './Mod'

import Arcane from './Arcane'

import Quest from './Quest'

import Enemy from './Enemy'

import Miscellaneous from './Miscellaneous'

import Resources from './Resources'

import Gear from './Gear'

import Glyph from './Glyph'

import WarframeIcon from '../../../Icons/WarframeIcon'
import PrimaryWeaponIcon from '../../../Icons/PrimaryWeaponIcon'
import SecondaryWeaponIcon from '../../../Icons/SecondaryWeaponIcon'
import MeleeWeaponIcon from '../../../Icons/MeleeWeaponIcon'
import CompanionIcon from '../../../Icons/CompanionIcon'
import SentinelIcon from '../../../Icons/SentinelIcon'
import ArchwingIcon from '../../../Icons/ArchwingIcon'
import ArchGunWeaponIcon from '../../../Icons/ArchGunWeaponIcon'
import ArchMeleeWeaponIcon from '../../../Icons/ArchMeleeWeaponIcon'
import NecramechIcon from '../../../Icons/NecramechIcon'
import ModIcon from '../../../Icons/ModIcon'
import ArcaneIcon from '../../../Icons/ArcaneIcon'
import QuestIcon from '../../../Icons/QuestIcon'
import EnemyIcon from '../../../Icons/EnemyIcon'
import MiscellaneousIcon from '../../../Icons/MiscellaneousIcon'
import ResourceIcon from '../../../Icons/ResourceIcon'
import GearIcon from '../../../Icons/GearIcon'
import GlyphIcon from '../../../Icons/GlyphIcon'

import { TabListCounter, TabCounter, TabPanelCounter } from './Style'

const index = () => {
  return (
    <Fragment>
      <Tabs>
        <TabListCounter>
          <TabCounter>
            <WarframeIcon color="#ffffff" size={25} />
            Warframe
          </TabCounter>
          <TabCounter>
            <PrimaryWeaponIcon color="#ffffff" size={25} />
            Primary Weapon
          </TabCounter>
          <TabCounter>
            <SecondaryWeaponIcon color="#ffffff" size={25} />
            Secondary Weapon
          </TabCounter>
          <TabCounter>
            <MeleeWeaponIcon color="#ffffff" size={25} />
            Melee Weapon
          </TabCounter>
          <TabCounter>
            <CompanionIcon color="#ffffff" size={25} />
            Pet
          </TabCounter>
          <TabCounter>
            <SentinelIcon color="#ffffff" size={25} />
            Sentinel
          </TabCounter>
          <TabCounter>
            <SentinelIcon color="#ffffff" size={25} />
            Sentinel Weapon
          </TabCounter>
          <TabCounter>
            <ArchwingIcon color="#ffffff" size={25} />
            Archwing
          </TabCounter>
          <TabCounter>
            <ArchGunWeaponIcon color="#ffffff" size={25} />
            ArchGun Weapon
          </TabCounter>
          <TabCounter>
            <ArchMeleeWeaponIcon color="#ffffff" size={25} />
            ArchMelee Weapon
          </TabCounter>
          <TabCounter>
            <NecramechIcon color="#ffffff" size={25} />
            Necramech
          </TabCounter>
          <TabCounter>
            <ModIcon color="#ffffff" size={25} />
            Mod
          </TabCounter>
          <TabCounter>
            <ArcaneIcon color="#ffffff" size={25} />
            Arcane
          </TabCounter>
          <TabCounter>
            <QuestIcon color="#ffffff" size={25} />
            Quest
          </TabCounter>
          <TabCounter>
            <EnemyIcon color="#ffffff" />
            Enemy
          </TabCounter>
          <TabCounter>
            <MiscellaneousIcon color="#ffffff" size={25} />
            Miscellaneous
          </TabCounter>
          <TabCounter>
            <ResourceIcon color="#ffffff" size={25} />
            Resources
          </TabCounter>
          <TabCounter>
            <GearIcon color="#ffffff" size={25} />
            Gear
          </TabCounter>
          <TabCounter>
            <GlyphIcon color="#ffffff" size={25} />
            Glyph
          </TabCounter>
        </TabListCounter>

        <TabPanelCounter>
          <Warframe icon={<WarframeIcon color="#ffffff" size={50} />} />
        </TabPanelCounter>
        <TabPanelCounter>
          <PrimaryWeapon
            icon={<PrimaryWeaponIcon color="#ffffff" size={50} />}
          />
        </TabPanelCounter>
        <TabPanelCounter>
          <SecondaryWeapon
            icon={<SecondaryWeaponIcon color="#ffffff" size={50} />}
          />
        </TabPanelCounter>
        <TabPanelCounter>
          <MeleeWeapon icon={<MeleeWeaponIcon color="#ffffff" size={50} />} />
        </TabPanelCounter>
        <TabPanelCounter>
          <Pet icon={<CompanionIcon color="#ffffff" size={50} />} />
        </TabPanelCounter>
        <TabPanelCounter>
          <Sentinel icon={<SentinelIcon color="#ffffff" size={50} />} />
        </TabPanelCounter>
        <TabPanelCounter>
          <SentinelWeapon icon={<SentinelIcon color="#ffffff" size={50} />} />
        </TabPanelCounter>
        <TabPanelCounter>
          <Archwing icon={<ArchwingIcon color="#ffffff" size={50} />} />
        </TabPanelCounter>
        <TabPanelCounter>
          <ArchGunWeapon
            icon={<ArchGunWeaponIcon color="#ffffff" size={50} />}
          />
        </TabPanelCounter>
        <TabPanelCounter>
          <ArchMeleeWeapon
            icon={<ArchMeleeWeaponIcon color="#ffffff" size={50} />}
          />
        </TabPanelCounter>
        <TabPanelCounter>
          <Necramech icon={<NecramechIcon color="#ffffff" size={50} />} />
        </TabPanelCounter>
        <TabPanelCounter>
          <Mod icon={<ModIcon color="#ffffff" size={50} />} />
        </TabPanelCounter>
        <TabPanelCounter>
          <Arcane icon={<ArcaneIcon color="#ffffff" size={50} />} />
        </TabPanelCounter>
        <TabPanelCounter>
          <Quest icon={<QuestIcon color="#ffffff" size={50} />} />
        </TabPanelCounter>
        <TabPanelCounter>
          <Enemy icon={<EnemyIcon color="#ffffff" size={50} />} />
        </TabPanelCounter>
        <TabPanelCounter>
          <Miscellaneous
            icon={<MiscellaneousIcon color="#ffffff" size={50} />}
          />
        </TabPanelCounter>
        <TabPanelCounter>
          <Resources icon={<ResourceIcon color="#ffffff" size={50} />} />
        </TabPanelCounter>
        <TabPanelCounter>
          <Gear icon={<GearIcon color="#ffffff" size={50} />} />
        </TabPanelCounter>
        <TabPanelCounter>
          <Glyph icon={<GlyphIcon color="#ffffff" size={50} />} />
        </TabPanelCounter>
      </Tabs>
    </Fragment>
  )
}

export default index
