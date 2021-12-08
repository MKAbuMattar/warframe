import { Fragment, useState } from 'react'

import Link from 'next/link'

import { NavbarItem, IconBtn } from './Style'

const NavItem = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <NavbarItem>
      {props.url !== undefined ? (
        <Fragment>
          <Link href={props.url}>
            <IconBtn onClick={() => setOpen(!open)}>{props.icon}</IconBtn>
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          <IconBtn onClick={() => setOpen(!open)}>{props.icon}</IconBtn>
        </Fragment>
      )}

      {open && props.children}
    </NavbarItem>
  )
}

export default NavItem
