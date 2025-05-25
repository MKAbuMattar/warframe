import {Navbar, NavItems} from './Style';

const Nav = ({children}) => (
  <Navbar className="sticky">
    <NavItems>{children}</NavItems>
  </Navbar>
);

export default Nav;
