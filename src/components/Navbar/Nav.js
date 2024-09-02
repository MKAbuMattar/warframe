import {Navbar, NavItems} from './Style';

const Nav = (props) => {
  return (
    <Navbar className="sticky">
      <NavItems>{props.children}</NavItems>
    </Navbar>
  );
};

export default Nav;
