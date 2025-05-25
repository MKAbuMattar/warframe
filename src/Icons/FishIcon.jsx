import {createElement} from 'react';

const FishIcon = ({color = '#1a1516', size = '24', ...otherProps}) => {
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 60 60',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M50 25c-3.5 0-6.8 1.2-9.4 3.2-1.8-1.2-3.9-1.9-6.1-1.9-2.2 0-4.3 0.7-6.1 1.9C25.8 26.2 22.5 25 19 25c-8.3 0-15 6.7-15 15s6.7 15 15 15c3.5 0 6.8-1.2 9.4-3.2 1.8 1.2 3.9 1.9 6.1 1.9 2.2 0 4.3-0.7 6.1-1.9 2.6 2 5.9 3.2 9.4 3.2 8.3 0 15-6.7 15-15S58.3 25 50 25zM19 47c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7S22.9 47 19 47zM34.5 47c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7S38.4 47 34.5 47zM50 47c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7S53.9 47 50 47z',
      }),
      createElement('circle', {
        cx: '19',
        cy: '40',
        r: '2',
      }),
      createElement('circle', {
        cx: '34.5',
        cy: '40',
        r: '2',
      }),
      createElement('circle', {
        cx: '50',
        cy: '40',
        r: '2',
      }),
    ),
  );
};

export default FishIcon;
