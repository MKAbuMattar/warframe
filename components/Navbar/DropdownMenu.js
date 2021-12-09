import { useState, useEffect, useRef, Fragment } from 'react'
import Link from 'next/link'

import { CSSTransition } from 'react-transition-group'

import HomeIcon from '../../Icons/HomeIcon'
import WarframeLogoIcon from '../../Icons/WarframeLogoIcon'

import WarframeIcon from '../../Icons/WarframeIcon'

import WeaponIcon from '../../Icons/WeaponIcon'
import PrimaryWeaponIcon from '../../Icons/PrimaryWeaponIcon'
import SecondaryWeaponIcon from '../../Icons/SecondaryWeaponIcon'
import MeleeWeaponIcon from '../../Icons/MeleeWeaponIcon'

import ArchwingIcon from '../../Icons/ArchwingIcon'
import ArchGunWeaponIcon from '../../Icons/ArchGunWeaponIcon'
import ArchMeleeWeaponIcon from '../../Icons/ArchMeleeWeaponIcon'

import CompanionIcon from '../../Icons/CompanionIcon'
import SentinelIcon from '../../Icons/SentinelIcon'

import NecramecheIcon from '../../Icons/NecramecheIcon'

import ModIcon from '../../Icons/ModIcon'

import EnemyIcon from '../../Icons/EnemyIcon'

import ResourceIcon from '../../Icons/ResourceIcon'

import QuestIcon from '../../Icons/QuestIcon'

import GearIcon from '../../Icons/GearIcon'

import GlyphIcon from '../../Icons/GlyphIcon'

import RightIcon from '../../Icons/RightIcon'
import LeftIcon from '../../Icons/LeftIcon'

import { MenuItem, IconLeft, IconRight } from './Style'
import { Menu, Dropdown } from './Style'

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 30)
  }, [])

  const calcHeight = (el) => {
    const height = el.offsetHeight
    setMenuHeight(height + 30)
  }

  const DropdownItem = (props) => {
    return (
      <Fragment>
        {props.url !== undefined ? (
          <Fragment>
            <Link href={props.url}>
              <MenuItem
                onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
              >
                <IconLeft>{props.leftIcon}</IconLeft>
                {props.children}
                <IconRight>{props.rightIcon}</IconRight>
              </MenuItem>
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <MenuItem
              onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
            >
              <IconLeft>{props.leftIcon}</IconLeft>
              {props.children}
              <IconRight>{props.rightIcon}</IconRight>
            </MenuItem>
          </Fragment>
        )}
      </Fragment>
    )
  }

  return (
    <Dropdown style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <Menu>
          <DropdownItem leftIcon={<HomeIcon color="#ffffff" />} url="/">
            Home
          </DropdownItem>
          <DropdownItem
            leftIcon={<WarframeIcon color="#ffffff" />}
            url="/warframe"
          >
            Warframe
          </DropdownItem>
          <DropdownItem
            leftIcon={<WeaponIcon color="#ffffff" />}
            rightIcon={<RightIcon color="#ffffff" />}
            goToMenu="weapons"
          >
            Weapons
          </DropdownItem>
          <DropdownItem
            leftIcon={<CompanionIcon color="#ffffff" />}
            rightIcon={<RightIcon color="#ffffff" />}
            goToMenu="companions"
          >
            Companions
          </DropdownItem>
          <DropdownItem
            leftIcon={<ArchwingIcon color="#ffffff" />}
            rightIcon={<RightIcon color="#ffffff" />}
            goToMenu="archwing"
          >
            Archwing
          </DropdownItem>
          <DropdownItem
            leftIcon={<NecramecheIcon color="#ffffff" />}
            url="/warframe/necrameche"
          >
            Necrameche
          </DropdownItem>
          <DropdownItem
            leftIcon={<ModIcon color="#ffffff" />}
            url="/warframe/mod"
          >
            Mod
          </DropdownItem>
          <DropdownItem
            leftIcon={<ModIcon color="#ffffff" />}
            url="/warframe/arcane"
          >
            Arcane
          </DropdownItem>
          <DropdownItem leftIcon={<QuestIcon color="#ffffff" />} url="/quest">
            Quest
          </DropdownItem>
          <DropdownItem leftIcon={<EnemyIcon color="#ffffff" />} url="/enemy">
            Enemy
          </DropdownItem>
          <DropdownItem
            leftIcon={<ResourceIcon color="#ffffff" />}
            url="/resource"
          >
            Resource
          </DropdownItem>
          <DropdownItem leftIcon={<GearIcon color="#ffffff" />} url="/gear">
            Gear
          </DropdownItem>
          <DropdownItem leftIcon={<GlyphIcon color="#ffffff" />} url="/glyph">
            Glyph
          </DropdownItem>
        </Menu>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'weapons'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <Menu>
          <DropdownItem
            goToMenu="main"
            leftIcon={<WeaponIcon color="#ffffff" />}
            rightIcon={<LeftIcon color="#ffffff" />}
          >
            <h2>Weapons</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<PrimaryWeaponIcon color="#ffffff" />}
            url="/weapons/primary"
          >
            Primary Weapons
          </DropdownItem>
          <DropdownItem
            leftIcon={<SecondaryWeaponIcon color="#ffffff" />}
            url="/weapons/secondary"
          >
            Secondary Weapons
          </DropdownItem>
          <DropdownItem
            leftIcon={<MeleeWeaponIcon color="#ffffff" />}
            url="/weapons/melee"
          >
            Melee Weapons
          </DropdownItem>
        </Menu>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'archwing'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <Menu>
          <DropdownItem
            goToMenu="main"
            leftIcon={<ArchwingIcon color="#ffffff" />}
            rightIcon={<LeftIcon color="#ffffff" />}
          >
            <h2>Archwing</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<ArchwingIcon color="#ffffff" />}
            url="/archwing/"
          >
            Archwing
          </DropdownItem>
          <DropdownItem
            goToMenu="arch-weapon"
            leftIcon={<ArchGunWeaponIcon color="#ffffff" />}
            rightIcon={<RightIcon color="#ffffff" />}
          >
            Arch-Weapon
          </DropdownItem>
        </Menu>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'arch-weapon'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <Menu>
          <DropdownItem
            goToMenu="archwing"
            leftIcon={<ArchGunWeaponIcon color="#ffffff" />}
            rightIcon={<LeftIcon color="#ffffff" />}
          >
            <h2>Arch-Weapon</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<ArchGunWeaponIcon color="#ffffff" />}
            url="/archwing/weapon/arch-gun"
          >
            Arch-Gun Weapons
          </DropdownItem>
          <DropdownItem
            leftIcon={<ArchMeleeWeaponIcon color="#ffffff" />}
            url="/archwing/weapon/arch-melee"
          >
            Arch-Melee Weapons
          </DropdownItem>
        </Menu>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'companions'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <Menu>
          <DropdownItem
            goToMenu="main"
            leftIcon={<CompanionIcon color="#ffffff" />}
            rightIcon={<LeftIcon color="#ffffff" />}
          >
            <h2>Companions</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<CompanionIcon color="#ffffff" />}
            url="/companion/pet"
          >
            Pet
          </DropdownItem>
          <DropdownItem
            leftIcon={<SentinelIcon color="#ffffff" />}
            url="/companion/sentinel"
          >
            Sentinel
          </DropdownItem>
          <DropdownItem
            leftIcon={<SentinelIcon color="#ffffff" />}
            url="/companion/sentinel/weapon"
          >
            Sentinel Weapon
          </DropdownItem>
        </Menu>
      </CSSTransition>
    </Dropdown>
  )
}

export default DropdownMenu
