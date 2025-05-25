import {memo} from 'react';
import Link from 'next/link';
import {MenuItem, IconLeft, IconRight} from './Style';
import {ICONS} from './menuConfig';
import {COLORS} from './constants';

const DropdownItem = memo(
  ({leftIcon, rightIcon, children, url, goToMenu, changeMenu, handleOpen}) => {
    const LeftIconComponent = leftIcon ? ICONS[leftIcon] : null;
    const RightIconComponent = rightIcon ? ICONS[rightIcon] : null;

    const handleClick = () => {
      if (goToMenu && changeMenu) {
        changeMenu(goToMenu);
      }
      if (url && handleOpen) {
        handleOpen();
      }
    };

    const menuItem = (
      <MenuItem onClick={handleClick}>
        <IconLeft>
          {LeftIconComponent && <LeftIconComponent color={COLORS.WHITE} />}
        </IconLeft>
        {children}
        <IconRight>
          {RightIconComponent && <RightIconComponent color={COLORS.WHITE} />}
        </IconRight>
      </MenuItem>
    );

    if (url) {
      return <Link href={url}>{menuItem}</Link>;
    }

    return menuItem;
  },
);

DropdownItem.displayName = 'DropdownItem';

export default DropdownItem;
