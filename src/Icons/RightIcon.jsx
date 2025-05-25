import {createElement} from 'react';

const RightIcon = (props) => {
  const {color = '#1a1516', size = '24', ...otherProps} = props;
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
        d: 'M9 18l6-6-6-6',
      }),
    ),
  );
};

export default RightIcon;
