import {createElement} from 'react';

const InstallIcon = (props) => {
  const {color = '#1a1516', size = '24', ...otherProps} = props;
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 48 48',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M8 7C8 4.23858 10.2386 2 13 2H35C37.7614 2 40 4.23858 40 7V41C40 43.7614 37.7614 46 35 46H13C10.2386 46 8 43.7614 8 41V7ZM13 6C12.4477 6 12 6.44772 12 7V41C12 41.5523 12.4477 42 13 42H35C35.5523 42 36 41.5523 36 41V7C36 6.44772 35.5523 6 35 6H13ZM18 10C18 9.44772 18.4477 9 19 9H29C29.5523 9 30 9.44772 30 10V12C30 12.5523 29.5523 13 29 13H19C18.4477 13 18 12.5523 18 12V10ZM24 39C25.6569 39 27 37.6569 27 36C27 34.3431 25.6569 33 24 33C22.3431 33 21 34.3431 21 36C21 37.6569 22.3431 39 24 39Z',
      }),
    ),
  );
};

export default InstallIcon;
