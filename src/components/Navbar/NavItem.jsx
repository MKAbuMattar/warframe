import Link from 'next/link';
import {NavbarItem, IconBtn} from './Style';

const NavItem = ({open, handleOpen, url, icon, children}) => {
  const buttonContent = <IconBtn onClick={handleOpen}>{icon}</IconBtn>;

  return (
    <NavbarItem>
      {url ? <Link href={url}>{buttonContent}</Link> : buttonContent}
      {open && children}
    </NavbarItem>
  );
};

export default NavItem;
