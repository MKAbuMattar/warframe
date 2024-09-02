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
      viewBox: '0 0 452 412.22',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M195.91,412.22,0,162C144.57,149.14,199,214.78,195.91,412.22Z',
      }),
      createElement('path', {
        d: 'M452,160.68,269.05,395.8C228.78,244.42,295.1,155.22,452,160.68Z',
      }),
      createElement('path', {
        d: 'M218.89,83.14c22.2,28.63,66.35,38.88,62.18,71.92-2.93,23.19-29.71,58.62-60.55,53-25.41-4.64-59.8-31.55-56.93-57.79C166.15,126.84,198.2,106.64,218.89,83.14Z',
      }),
      createElement('path', {
        d: 'M261.93,0l85.75,107.84C280.24,103.62,251,66.73,244.85,9.93Z',
      }),
      createElement('path', {
        d: 'M93.34,124.05,187.11,4.29C201.75,67.91,187.37,89.25,93.34,124.05Z',
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
