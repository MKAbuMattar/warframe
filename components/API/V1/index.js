import { Fragment } from 'react'

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
      <Warframe icon={<WarframeIcon color="#ffffff" size={50} />} />
      <PrimaryWeapon icon={<PrimaryWeaponIcon color="#ffffff" size={50} />} />
      <SecondaryWeapon
        icon={<SecondaryWeaponIcon color="#ffffff" size={50} />}
      />
      <MeleeWeapon icon={<MeleeWeaponIcon color="#ffffff" size={50} />} />
      <Pet icon={<CompanionIcon color="#ffffff" size={50} />} />
      <Sentinel icon={<SentinelIcon color="#ffffff" size={50} />} />
      <SentinelWeapon icon={<SentinelIcon color="#ffffff" size={50} />} />
      <Archwing icon={<ArchwingIcon color="#ffffff" size={50} />} />
      <ArchGunWeapon icon={<ArchGunWeaponIcon color="#ffffff" size={50} />} />
      <ArchMeleeWeapon
        icon={<ArchMeleeWeaponIcon color="#ffffff" size={50} />}
      />
      <Necramech icon={<NecramechIcon color="#ffffff" size={50} />} />
      <Mod icon={<ModIcon color="#ffffff" size={50} />} />
      <Quest icon={<QuestIcon color="#ffffff" size={50} />} />
      <Arcane icon={<ArcaneIcon color="#ffffff" size={50} />} />
      <Enemy icon={<EnemyIcon color="#ffffff" size={50} />} />
      <Miscellaneous icon={<MiscellaneousIcon color="#ffffff" size={50} />} />
      <Resources icon={<ResourceIcon color="#ffffff" size={50} />} />
      <Gear icon={<GearIcon color="#ffffff" size={50} />} />
      <Glyph icon={<GlyphIcon color="#ffffff" size={50} />} />
    </Fragment>
  )
}

export default index
