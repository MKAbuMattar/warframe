import Link from 'next/link'

import Nav from './Nav'
import NavItem from './NavItem'
import DropdownMenu from './DropdownMenu'

import InstallPWA from '../../util/useInstallPWA/useInstallPWA'

import LogoIcon from '../../Icons/LogoIcon'
import WarframeLogoIcon from '../../Icons/WarframeLogoIcon'

import { LogoLink, RightSide } from './Style'

const Navbar = () => {
  return (
    <Nav>
      <Link legacyBehavior href="/">
        <LogoLink>
          <i style={{ display: 'flex' }}>
            <LogoIcon size="35" />
          </i>
          Warframe Info.
        </LogoLink>
      </Link>
      <RightSide>
        <NavItem icon={<WarframeLogoIcon color="#ffffff" />}>
          <DropdownMenu />
        </NavItem>
        <InstallPWA initSupportsPWA={false} initPromptInstall={null} />
      </RightSide>
    </Nav>
  )
}

export default Navbar
