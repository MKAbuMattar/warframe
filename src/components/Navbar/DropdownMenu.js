import {useState, useEffect, useRef, Fragment} from 'react';
import Link from 'next/link';

import {CSSTransition} from 'react-transition-group';

import HomeIcon from '../../Icons/HomeIcon';
import WarframeLogoIcon from '../../Icons/WarframeLogoIcon';

import WarframeIcon from '../../Icons/WarframeIcon';

import WeaponIcon from '../../Icons/WeaponIcon';
import PrimaryWeaponIcon from '../../Icons/PrimaryWeaponIcon';
import SecondaryWeaponIcon from '../../Icons/SecondaryWeaponIcon';
import MeleeWeaponIcon from '../../Icons/MeleeWeaponIcon';

import ArchwingIcon from '../../Icons/ArchwingIcon';
import ArchGunWeaponIcon from '../../Icons/ArchGunWeaponIcon';
import ArchMeleeWeaponIcon from '../../Icons/ArchMeleeWeaponIcon';

import CompanionIcon from '../../Icons/CompanionIcon';
import SentinelIcon from '../../Icons/SentinelIcon';

import NecramechIcon from '../../Icons/NecramechIcon';

import ArcaneIcon from '../../Icons/ArcaneIcon';
import ModIcon from '../../Icons/ModIcon';

import EnemyIcon from '../../Icons/EnemyIcon';

import ResourceIcon from '../../Icons/ResourceIcon';
import MiscellaneousIcon from '../../Icons/MiscellaneousIcon';

import QuestIcon from '../../Icons/QuestIcon';

import GearIcon from '../../Icons/GearIcon';

import GlyphIcon from '../../Icons/GlyphIcon';

import RightIcon from '../../Icons/RightIcon';
import LeftIcon from '../../Icons/LeftIcon';

import {MenuItem, IconLeft, IconRight} from './Style';
import {Menu, Dropdown, Button} from './Style';

const DropdownMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 30);
  }, []);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height + 30);
  };

  const DropdownItem = (props) => {
    return (
      <Fragment>
        {props.url !== undefined ? (
          <Fragment>
            <Link legacyBehavior href={props.url}>
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
    );
  };

  return (
    <Dropdown style={{height: menuHeight}} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <Menu>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem leftIcon={<HomeIcon color="#ffffff" />} url="/">
              Home
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem
              leftIcon={<WarframeIcon color="#ffffff" />}
              url="/warframe"
            >
              Warframe
            </DropdownItem>
          </Button>
          <Button>
            <DropdownItem
              leftIcon={<WeaponIcon color="#ffffff" />}
              rightIcon={<RightIcon color="#ffffff" />}
              goToMenu="weapons"
            >
              Weapons
            </DropdownItem>
          </Button>
          <Button>
            <DropdownItem
              leftIcon={<CompanionIcon color="#ffffff" />}
              rightIcon={<RightIcon color="#ffffff" />}
              goToMenu="companions"
            >
              Companions
            </DropdownItem>
          </Button>
          <Button>
            <DropdownItem
              leftIcon={<ArchwingIcon color="#ffffff" />}
              rightIcon={<RightIcon color="#ffffff" />}
              goToMenu="archwing"
            >
              Archwing
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem
              leftIcon={<NecramechIcon color="#ffffff" />}
              url="/warframe/necramech"
            >
              Necramech
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem
              leftIcon={<ModIcon color="#ffffff" />}
              url="/warframe/mod"
            >
              Mod
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem
              leftIcon={<ArcaneIcon color="#ffffff" />}
              url="/warframe/arcane"
            >
              Arcane
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem leftIcon={<QuestIcon color="#ffffff" />} url="/quest">
              Quest
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem leftIcon={<EnemyIcon color="#ffffff" />} url="/enemy">
              Enemy
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem
              leftIcon={<MiscellaneousIcon color="#ffffff" />}
              url="/miscellaneous"
            >
              Miscellaneous
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem
              leftIcon={<ResourceIcon color="#ffffff" />}
              url="/resource"
            >
              Resource
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem leftIcon={<GearIcon color="#ffffff" />} url="/gear">
              Gear
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem leftIcon={<GlyphIcon color="#ffffff" />} url="/glyph">
              Glyph
            </DropdownItem>
          </Button>
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
          <Button>
            <DropdownItem
              goToMenu="main"
              leftIcon={<WeaponIcon color="#ffffff" />}
              rightIcon={<LeftIcon color="#ffffff" />}
            >
              <h2>Weapons</h2>
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem
              leftIcon={<PrimaryWeaponIcon color="#ffffff" />}
              url="/weapons/primary"
            >
              Primary Weapons
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem
              leftIcon={<SecondaryWeaponIcon color="#ffffff" />}
              url="/weapons/secondary"
            >
              Secondary Weapons
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem
              leftIcon={<MeleeWeaponIcon color="#ffffff" />}
              url="/weapons/melee"
            >
              Melee Weapons
            </DropdownItem>
          </Button>
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
          <Button>
            <DropdownItem
              goToMenu="main"
              leftIcon={<ArchwingIcon color="#ffffff" />}
              rightIcon={<LeftIcon color="#ffffff" />}
            >
              <h2>Archwing</h2>
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem
              leftIcon={<ArchwingIcon color="#ffffff" />}
              url="/archwing/"
            >
              Archwing
            </DropdownItem>
          </Button>
          <Button>
            <DropdownItem
              goToMenu="arch-weapon"
              leftIcon={<ArchGunWeaponIcon color="#ffffff" />}
              rightIcon={<RightIcon color="#ffffff" />}
            >
              Arch-Weapon
            </DropdownItem>
          </Button>
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
          <Button>
            <DropdownItem
              goToMenu="archwing"
              leftIcon={<ArchGunWeaponIcon color="#ffffff" />}
              rightIcon={<LeftIcon color="#ffffff" />}
            >
              <h2>Arch-Weapon</h2>
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem
              leftIcon={<ArchGunWeaponIcon color="#ffffff" />}
              url="/archwing/weapon/arch-gun"
            >
              Arch-Gun Weapons
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem
              leftIcon={<ArchMeleeWeaponIcon color="#ffffff" />}
              url="/archwing/weapon/arch-melee"
            >
              Arch-Melee Weapons
            </DropdownItem>
          </Button>
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
          <Button>
            <DropdownItem
              goToMenu="main"
              leftIcon={<CompanionIcon color="#ffffff" />}
              rightIcon={<LeftIcon color="#ffffff" />}
            >
              <h2>Companions</h2>
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem
              leftIcon={<CompanionIcon color="#ffffff" />}
              url="/companion/pet"
            >
              Pet
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem
              leftIcon={<SentinelIcon color="#ffffff" />}
              url="/companion/sentinel"
            >
              Sentinel
            </DropdownItem>
          </Button>
          <Button onClick={() => props.handleOpen()}>
            <DropdownItem
              leftIcon={<SentinelIcon color="#ffffff" />}
              url="/companion/sentinel/weapon"
            >
              Sentinel Weapon
            </DropdownItem>
          </Button>
        </Menu>
      </CSSTransition>
    </Dropdown>
  );
};

export default DropdownMenu;
