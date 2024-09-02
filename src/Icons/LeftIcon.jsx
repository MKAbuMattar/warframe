import {createElement} from 'react';
import PropTypes from 'prop-types';

const WeaponIcon = (props) => {
  const {color, size, ...otherProps} = props;
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: 'none',
        stroke: color,
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      createElement('path', {
        d: 'M15 18l-6-6 6-6',
      }),
    ),
  );
};

WeaponIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

WeaponIcon.defaultProps = {
  color: '#1a1516',
  size: '24',
};

export default WeaponIcon;
