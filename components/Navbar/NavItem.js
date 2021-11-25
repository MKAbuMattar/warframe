import { useState } from 'react'

import Link from 'next/link'

import { NavbarItem, IconBtn } from './Style'

const NavItem = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <NavbarItem>
      <Link href={props.url || '#'}>
        <IconBtn onClick={() => setOpen(!open)}>{props.icon}</IconBtn>
      </Link>

      {open && props.children}
    </NavbarItem>
  )
}

export default NavItem
