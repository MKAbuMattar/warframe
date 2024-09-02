import {Fragment} from 'react';

import Link from 'next/link';

import {NavbarItem, IconBtn} from './Style';

const NavItem = (props) => {
  const {open, handleOpen, url, icon, children} = props;

  return (
    <NavbarItem>
      {url !== undefined ? (
        <Fragment>
          <Link legacyBehavior href={url}>
            <IconBtn onClick={() => handleOpen()}>{icon}</IconBtn>
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          <IconBtn onClick={() => handleOpen()}>{icon}</IconBtn>
        </Fragment>
      )}

      {open && children}
    </NavbarItem>
  );
};

export default NavItem;
