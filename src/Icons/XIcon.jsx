import {createElement} from 'react';

const XIcon = ({color = '#1a1516', size = '24', ...otherProps}) => {
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
      createElement('line', {
        x1: '18',
        y1: '6',
        x2: '6',
        y2: '18',
      }),
      createElement('line', {
        x1: '6',
        y1: '6',
        x2: '18',
        y2: '18',
      }),
    ),
  );
};

export default XIcon;
