import {memo} from 'react';
import useMenuTransition from '../../hooks/useMenuTransition';
import MenuSection from './MenuSection';
import {MENU_CONFIG} from './menuConfig';
import {MENU_TRANSITION} from './constants';
import {Dropdown} from './Style';

const DropdownMenu = memo(({handleOpen}) => {
  const {activeMenu, menuHeight, dropdownRef, calcHeight, changeMenu} =
    useMenuTransition(MENU_TRANSITION.DEFAULT_MENU, MENU_TRANSITION.TIMEOUT);

  // Get all available menu keys from config
  const menuKeys = Object.keys(MENU_CONFIG);

  return (
    <Dropdown style={{height: menuHeight}} ref={dropdownRef}>
      {menuKeys.map((menuKey) => (
        <MenuSection
          key={menuKey}
          menuKey={menuKey}
          activeMenu={activeMenu}
          calcHeight={calcHeight}
          changeMenu={changeMenu}
          handleOpen={handleOpen}
        />
      ))}
    </Dropdown>
  );
});

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
