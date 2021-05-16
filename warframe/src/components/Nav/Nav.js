import React, { Component } from 'react'
import { NavContainer, Logo, Navigation, Dropdown, DropdownContent } from './Style'

export default class Nav extends Component {
  render() {
    return (
      <>
        <NavContainer>
          <Logo><a href="/">Warframe</a></Logo>
          <Navigation>
            <Dropdown>
              <a href>Warframe <span></span></a>
              <DropdownContent>
                <a href="/warframe">Warframe</a>
                <a href="/primary">Primary Weapons</a>
                <a href="/secondary">Secondary Weapons</a>
                <a href="/melee">Melee Weapons</a>
                <a href="/arcane">Arcane</a>
              </DropdownContent>
            </Dropdown>
            <Dropdown>
              <a href>Archwing <span></span></a>
              <DropdownContent>
                <a href="/archwing">Archwing</a>
                <a href="/archGun">Arch Gun Weapons</a>
                <a href="/archMelee">Arch Melee Weapons</a>
              </DropdownContent>
            </Dropdown>
            <li><a href="/necrameche">Necrameche</a></li>
            <Dropdown>
              <a href>Companions <span></span></a>
              <DropdownContent>
                <a href="/pet">Pet</a>
                <a href="/sentinel">Sentinel</a>
                <a href="/sentinelWeapon">Sentinel Weapon</a>
              </DropdownContent>
            </Dropdown>
            <li><a href="/mod">Mod</a></li>
            <li><a href="/enemy">Enemy</a></li>
            <li><a href="/quest">Quest</a></li>
            <li><a href="/gear">Gear</a></li>
            <li><a href="/glyph">Glyph</a></li>
            <li><a href="/resource">Resource</a></li>
          </Navigation>
        </NavContainer>
      </>
    )
  }
}
