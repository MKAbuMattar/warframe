import {useState, useEffect, useRef} from 'react';

const NativeTransition = ({
  show,
  children,
  onEnter,
  timeout = 500,
  className = '',
  type = 'primary', // 'primary' or 'secondary'
}) => {
  const [shouldRender, setShouldRender] = useState(show);
  const [animationState, setAnimationState] = useState('exited');
  const elementRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (show) {
      setShouldRender(true);
      setAnimationState('entering');

      // Call onEnter callback if provided
      if (onEnter && elementRef.current) {
        onEnter(elementRef.current);
      }

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set to entered after a short delay to trigger CSS transition
      const enterTimeout = setTimeout(() => {
        setAnimationState('entered');
      }, 10);

      return () => clearTimeout(enterTimeout);
    } else {
      setAnimationState('exiting');

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Remove from DOM after transition completes
      timeoutRef.current = setTimeout(() => {
        setShouldRender(false);
        setAnimationState('exited');
      }, timeout);
    }
  }, [show, timeout, onEnter]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!shouldRender) return null;

  const getTransitionClass = () => {
    const baseClass = type === 'primary' ? 'menu-primary' : 'menu-secondary';

    switch (animationState) {
      case 'entering':
        return `${baseClass}-enter`;
      case 'entered':
        return `${baseClass}-enter-active`;
      case 'exiting':
        return `${baseClass}-exit-active`;
      default:
        return '';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getTransitionClass()} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default NativeTransition;
