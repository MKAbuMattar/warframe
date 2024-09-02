import {createElement} from 'react';
import PropTypes from 'prop-types';

const ElectrcityIcon = (props) => {
  const {color, size, ...otherProps} = props;
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 54.85 77.49',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M22.62,37H0c3-5.05,5.37-9.13,7.78-13.21,4-6.74,7.76-13.6,12-20.13A8.52,8.52,0,0,1,25.55.24C32-.19,38.47.08,45.89.08L35.42,29.88,54.27,29l.58,1.17L14.53,77.49l-1.06-.62C16.46,63.81,19.46,50.75,22.62,37Z',
      }),
    ),
  );
};

ElectrcityIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ElectrcityIcon.defaultProps = {
  color: '#1a1516',
  size: '24',
};

export default ElectrcityIcon;
