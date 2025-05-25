import Link from 'next/link';
import {useState} from 'react';

import Nav from './Nav';
import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';

import InstallPWA from '../../util/useInstallPWA/useInstallPWA';

import LogoIcon from '../../Icons/LogoIcon';
import WarframeLogoIcon from '../../Icons/WarframeLogoIcon';

import {LogoLink, RightSide} from './Style';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Nav>
      <LogoLink>
        <Link href="/">
          <LogoLink>
            <i style={{display: 'flex'}}>
              <LogoIcon size="35" />
            </i>
            Warframe Info.
          </LogoLink>
        </Link>
      </LogoLink>
      <RightSide>
        <NavItem
          icon={<WarframeLogoIcon color="#ffffff" />}
          open={open}
          handleOpen={handleOpen}
        >
          <DropdownMenu handleOpen={handleOpen} />
        </NavItem>
        <InstallPWA initSupportsPWA={false} initPromptInstall={null} />
      </RightSide>
    </Nav>
  );
};

export default Navbar;
