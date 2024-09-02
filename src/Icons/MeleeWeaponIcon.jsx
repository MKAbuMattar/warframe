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
      viewBox: '0 0 58.42 59.04',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M43.5,53.44l-2.77-4c.57-.81,1.07-1.51,1.56-2.22a23,23,0,0,0-1.23-27.87c-5.14-6-11.76-8.58-19.52-7.16C13.48,13.64,8.2,18.72,5.36,26.31A22.53,22.53,0,0,0,4.5,38.83c.09.46.13.93.19,1.4,0,.05-.07.11-.11.17-7.06-9.83-1.9-28.14,10.13-35.89a28.39,28.39,0,0,1,39.84,9.56C62.62,27.83,57.65,46,43.5,53.44Z',
      }),
      createElement('path', {
        d: 'M11,19.32l1.73-1.81L32,42.22l-1.48,2.2C29.05,43.38,13.66,23.64,11,19.32Z',
      }),
      createElement('path', {
        d: 'M43.16,57.56a4.91,4.91,0,0,1-.43.75,7.19,7.19,0,0,1-.81.73L32.65,48.27l1.51-2.79C35.61,46.5,41.08,53.88,43.16,57.56Z',
      }),
      createElement('path', {
        d: 'M28.24,43.81c2.08,1.08-1.29,2.63,1.09,3.64l4.58-6.64-2.33-.19c-.44-1.11.55-1.47,1.21-2.28l2.9,2.11L29.6,49.57,25.93,47.2C26.77,46,27.51,44.89,28.24,43.81Z',
      }),
      createElement('path', {
        d: 'M.08,1.05,6.67,9.61c-.43.65-.79,1.22-1.3,2C2.74,8.57-.56,6.18.08,1.05Z',
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
