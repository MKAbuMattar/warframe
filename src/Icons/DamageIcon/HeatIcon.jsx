import {createElement} from 'react';
import PropTypes from 'prop-types';

const HeatIcon = (props) => {
  const {color, size, ...otherProps} = props;
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 55.54 75.03',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M38.69,75c1.44-6.26,2.88-12.48,4.31-18.7l-1-.69-6.69,5.27c3.42-9.38-.24-15-7.54-19.69a27.79,27.79,0,0,0,0,3.6c.67,4.45.39,8.19-3.43,11.71-4.74,4.36-5.79,11.58-4,18.35C9.12,72.25.6,60.7,2,49.51,3.08,41.39,4,33.4,0,25c5.63,1.78,7.6,5.71,9.21,9.86,1.47,3.82,2.7,7.73,4,11.6L14.93,46c.72-5.23.8-10.65,2.32-15.63,2.17-7.08,4.7-14.23,8.38-20.59S36,.39,44,0c-1.2,5.26-2.46,9.7-3.2,14.22a18.85,18.85,0,0,0,5.25,17,41.5,41.5,0,0,1,6.3,8.93C59.81,53.86,53.68,69.37,38.69,75Z',
      }),
    ),
  );
};

HeatIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HeatIcon.defaultProps = {
  color: '#1a1516',
  size: '24',
};

export default HeatIcon;
