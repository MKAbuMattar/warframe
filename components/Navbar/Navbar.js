import Link from 'next/link'

import Nav from './Nav'
import NavItem from './NavItem'
import DropdownMenu from './DropdownMenu'

import LogoIcon from '../../Icons/LogoIcon'
import WarframeLogoIcon from '../../Icons/WarframeLogoIcon'

import { LogoLink } from './Style'

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
      <NavItem icon={<WarframeLogoIcon color="#ffffff" />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Nav>
  )
}

export default Navbar
