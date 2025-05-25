import {useState, useEffect, useCallback, useRef} from 'react';

const useMenuTransition = (initialMenu = 'main', timeout = 500) => {
  const [activeMenu, setActiveMenu] = useState(initialMenu);
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  // Calculate height when menu changes
  useEffect(() => {
    if (dropdownRef.current?.firstChild) {
      setMenuHeight(dropdownRef.current.firstChild.offsetHeight + 30);
    }
  }, [activeMenu]);

  const calcHeight = useCallback((element) => {
    if (element) {
      const height = element.offsetHeight;
      setMenuHeight(height + 30);
    }
  }, []);

  const changeMenu = useCallback(
    (newMenu) => {
      if (newMenu === activeMenu) return;
      setActiveMenu(newMenu);
    },
    [activeMenu],
  );

  return {
    activeMenu,
    menuHeight,
    dropdownRef,
    calcHeight,
    changeMenu,
  };
};

export default useMenuTransition;
