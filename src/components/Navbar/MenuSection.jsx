import {memo} from 'react';
import NativeTransition from '../NativeTransition';
import DropdownItem from './DropdownItem';
import {Menu, Button} from './Style';
import {MENU_CONFIG} from './menuConfig';
import {MENU_TRANSITION, MENU_TYPES, ITEM_TYPES} from './constants';

const MenuSection = memo(
  ({menuKey, activeMenu, calcHeight, changeMenu, handleOpen}) => {
    const menuConfig = MENU_CONFIG[menuKey];

    if (!menuConfig) return null;

    const isActive = activeMenu === menuKey;
    const isSubMenu = menuConfig.parentMenu;

    const renderBackButton = () => {
      if (!isSubMenu) return null;

      return (
        <Button>
          <DropdownItem
            goToMenu={menuConfig.parentMenu}
            leftIcon={menuConfig.parentIcon}
            rightIcon="LEFT"
            changeMenu={changeMenu}
          >
            <h2>{menuConfig.title}</h2>
          </DropdownItem>
        </Button>
      );
    };

    const renderMenuItems = () => {
      return menuConfig.items.map((item, index) => (
        <Button
          key={`${menuKey}-${index}`}
          onClick={item.type === ITEM_TYPES.LINK ? handleOpen : undefined}
        >
          <DropdownItem
            leftIcon={item.leftIcon}
            rightIcon={item.rightIcon}
            url={item.url}
            goToMenu={item.goToMenu}
            changeMenu={changeMenu}
            handleOpen={handleOpen}
          >
            {item.label}
          </DropdownItem>
        </Button>
      ));
    };

    return (
      <NativeTransition
        show={isActive}
        timeout={MENU_TRANSITION.TIMEOUT}
        type={isSubMenu ? MENU_TYPES.SECONDARY : MENU_TYPES.PRIMARY}
        onEnter={calcHeight}
      >
        <Menu>
          {renderBackButton()}
          {renderMenuItems()}
        </Menu>
      </NativeTransition>
    );
  },
);

MenuSection.displayName = 'MenuSection';

export default MenuSection;
