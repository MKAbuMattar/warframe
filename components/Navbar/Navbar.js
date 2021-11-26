import Link from 'next/link'

import Nav from './Nav'
import NavItem from './NavItem'
import DropdownMenu from './DropdownMenu'

import InstallPWA from '../../util/InstallPWA/InstallPWA'

import LogoIcon from '../../Icons/LogoIcon'
import WarframeLogoIcon from '../../Icons/WarframeLogoIcon'

import { LogoLink, RightSide } from './Style'

const Navbar = () => {
  return (
    <Nav>
      <Link href="/">
        <LogoLink>
          <i>
            <LogoIcon size="35" />
          </i>
          Warframe Info.
        </LogoLink>
      </Link>
      <RightSide>
        <NavItem icon={<WarframeLogoIcon color="#ffffff" />}>
          <DropdownMenu />
        </NavItem>
        <InstallPWA />
      </RightSide>
    </Nav>
  )
}

export default Navbar
