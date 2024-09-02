import styled from 'styled-components';

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: x-large;
`;

export const Navbar = styled.nav`
  height: var(--nav-size);
  background-color: var(--bg);
  padding: 0 1rem;
  /* border-bottom: var(--border); */
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  user-select: none;
`;

export const RightSide = styled.ul`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const NavItems = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
export const NavbarItem = styled.li`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconBtn = styled.a`
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;

  && :hover {
    filter: brightness(1.2);
  }

  && svg {
    fill: var(--text-color);
    width: 20px;
    height: 20px;
  }
`;

export const MenuItem = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;
`;

export const IconLeft = styled.span`
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;

  && :hover {
    filter: brightness(1.2);
  }

  && svg {
    fill: var(--text-color);
    width: 20px;
    height: 20px;
  }

  ${MenuItem} && {
    margin-right: 0.5rem;

    :hover {
      filter: none;
    }
  }
`;

export const IconRight = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 58px;
  width: 17.5rem;
  transform: translateX(-45%);
  background-color: var(--bg);
  /* border: var(--border); */
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: var(--border-radius);
  padding: 1rem;
  overflow: hidden;
  transition: height var(--speed) ease;
  overflow: auto;
  max-height: 20rem;
`;

export const Menu = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  width: 100%;
`;
