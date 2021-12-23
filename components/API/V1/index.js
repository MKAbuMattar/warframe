import { Fragment } from 'react'

import TabItem from '../../TabItem/TabItem'
import GetTabs from '../../GetTabs/GetTabs'

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

const index = () => {
  return (
    <Fragment>
      <GetTabs defaultIndex="1" key="1">
        <TabItem
          label="Warframe"
          icon={<WarframeIcon color="#ffffff" size={20} />}
          index="1"
          key="1"
        >
          <Warframe icon={<WarframeIcon color="#ffffff" size={50} />} />
        </TabItem>
        <TabItem
          label="Primary Weapon"
          icon={<PrimaryWeaponIcon color="#ffffff" size={20} />}
          index="2"
          key="2"
        >
          <PrimaryWeapon
            icon={<PrimaryWeaponIcon color="#ffffff" size={50} />}
          />
        </TabItem>
        <TabItem
          label="Secondary Weapon"
          icon={<SecondaryWeaponIcon color="#ffffff" size={20} />}
          index="3"
          key="3"
        >
          <SecondaryWeapon
            icon={<SecondaryWeaponIcon color="#ffffff" size={50} />}
          />
        </TabItem>
        <TabItem
          label="Melee Weapon"
          icon={<MeleeWeaponIcon color="#ffffff" size={20} />}
          index="4"
          key="4"
        >
          <MeleeWeapon icon={<MeleeWeaponIcon color="#ffffff" size={50} />} />
        </TabItem>
        <TabItem
          label="Pet"
          icon={<CompanionIcon color="#ffffff" size={20} />}
          index="5"
          key="5"
        >
          <Pet icon={<CompanionIcon color="#ffffff" size={50} />} />
        </TabItem>
        <TabItem
          label="Sentinel"
          icon={<SentinelIcon color="#ffffff" size={20} />}
          index="6"
          key="6"
        >
          <Sentinel icon={<SentinelIcon color="#ffffff" size={50} />} />
        </TabItem>
        <TabItem
          label="Sentinel Weapon"
          icon={<SentinelIcon color="#ffffff" size={20} />}
          index="7"
          key="7"
        >
          <SentinelWeapon icon={<SentinelIcon color="#ffffff" size={50} />} />
        </TabItem>
        <TabItem
          label="Archwing"
          icon={<ArchwingIcon color="#ffffff" size={20} />}
          index="8"
          key="8"
        >
          <Archwing icon={<ArchwingIcon color="#ffffff" size={50} />} />
        </TabItem>
        <TabItem
          label="ArchGun Weapon"
          icon={<ArchGunWeaponIcon color="#ffffff" size={20} />}
          index="9"
          key="9"
        >
          <ArchGunWeapon
            icon={<ArchGunWeaponIcon color="#ffffff" size={50} />}
          />
        </TabItem>
        <TabItem
          label="ArchMelee Weapon"
          icon={<ArchMeleeWeaponIcon color="#ffffff" size={20} />}
          index="10"
          key="10"
        >
          <ArchMeleeWeapon
            icon={<ArchMeleeWeaponIcon color="#ffffff" size={50} />}
          />
        </TabItem>
        <TabItem
          label="Necramech"
          icon={<NecramechIcon color="#ffffff" size={20} />}
          index="11"
          key="11"
        >
          <Necramech icon={<NecramechIcon color="#ffffff" size={50} />} />
        </TabItem>
        <TabItem
          label="Mod"
          icon={<ModIcon color="#ffffff" size={20} />}
          index="12"
          key="12"
        >
          <Mod icon={<ModIcon color="#ffffff" size={50} />} />
        </TabItem>
        <TabItem
          label="Arcane"
          icon={<ArcaneIcon color="#ffffff" size={20} />}
          index="13"
          key="13"
        >
          <Arcane icon={<ArcaneIcon color="#ffffff" size={50} />} />
        </TabItem>
        <TabItem
          label="Quest"
          icon={<QuestIcon color="#ffffff" size={20} />}
          index="14"
          key="14"
        >
          <Quest icon={<QuestIcon color="#ffffff" size={50} />} />
        </TabItem>
        <TabItem
          label="Enemy"
          icon={<EnemyIcon color="#ffffff" size={20} />}
          index="15"
          key="15"
        >
          <Enemy icon={<EnemyIcon color="#ffffff" size={50} />} />
        </TabItem>
        <TabItem
          label="Miscellaneous"
          icon={<MiscellaneousIcon color="#ffffff" size={20} />}
          index="16"
          key="16"
        >
          <Miscellaneous
            icon={<MiscellaneousIcon color="#ffffff" size={50} />}
          />
        </TabItem>
        <TabItem
          label="Resources"
          icon={<ResourceIcon color="#ffffff" size={20} />}
          index="17"
          key="17"
        >
          <Resources icon={<ResourceIcon color="#ffffff" size={50} />} />
        </TabItem>
        <TabItem
          label="Gear"
          icon={<GearIcon color="#ffffff" size={20} />}
          index="18"
          key="18"
        >
          <Gear icon={<GearIcon color="#ffffff" size={50} />} />
        </TabItem>
        <TabItem
          label="Glyph"
          icon={<GlyphIcon color="#ffffff" size={20} />}
          index="19"
          key="19"
        >
          <Glyph icon={<GlyphIcon color="#ffffff" size={50} />} />
        </TabItem>
      </GetTabs>
    </Fragment>
  )
}

export default index
