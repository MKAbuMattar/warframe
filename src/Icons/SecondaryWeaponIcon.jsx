import {createElement} from 'react';

const SecondaryWeaponIcon = ({
  color = '#1a1516',
  size = '24',
  ...otherProps
}) => {
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 59.96 50.72',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M34.55.48,31.3,4.08c1.47-.31,1.92-1.21,2.57-1.8,1.37-1.24,2.05-1.15,2.9.53.4.78.69,1.61,1.1,2.59-.45.47-.93,1-1.43,1.47a15.46,15.46,0,0,0-3.95,5.92A6.63,6.63,0,0,1,31.11,15C29.59,16.6,28,18.13,26.4,19.74c-.87.91-1.64,1.9-2.64,3.06-.19,0-.65,0-1.12,0C13.86,22.51,8.06,29.37,9.78,38c.14.68.29,1.37.47,2.19a8.13,8.13,0,0,1-1.76.26,4.79,4.79,0,0,0-4.55,2,29.8,29.8,0,0,1-2.45,2.45C-.35,44.2,1,43.31,1.1,42.56c-1.73-2.9-1.42-5.33.93-7.65a30.6,30.6,0,0,0,8.23-12.75,6.54,6.54,0,0,1,1.61-2.3c4.34-4.48,8.74-8.9,13.07-13.38C25.63,5.76,26,4.75,26.65,4c1-1.23,2.1-2.38,3.18-3.54.14-.15.53-.31.63-.24,1,.74,1.81-.06,2.7-.18C33.48,0,33.84.22,34.55.48ZM25.61,8c-.38.11-.65.11-.78.24q-6.25,6.22-12.47,12.49a.8.8,0,0,0-.16.55Z',
      }),
      createElement('path', {
        d: 'M8.26,42.53H18.75c.74,1.61,1.62,3.4,2.4,5.22A3.52,3.52,0,0,0,23.38,50a3,3,0,0,1,2.1,3.21c-1.93,1.16-4.39,1.07-6.22,2.42l.14.52,4.31-.94c-.65,1.58-2,1.59-3.14,2a4.27,4.27,0,0,1-2.72.4,7.65,7.65,0,0,1-3.32-2.39,80.58,80.58,0,0,1-5.16-8.36C8.75,45.75,8.69,44.31,8.26,42.53Z',
      }),
      createElement('path', {
        d: 'M28.1,26.39,23.74,30c-2.35-.8-5.22-1-7.47,1.69-2.11,2.5-1.56,5.34-.75,8.39L12,40.27a11.12,11.12,0,0,1,2.66-13.79C18.64,23.4,24.4,23.22,28.1,26.39Z',
      }),
      createElement('path', {
        d: 'M25.53,23.14a7.25,7.25,0,0,1,.71-1c1.51-1.54,3-3.06,4.57-4.58a14.5,14.5,0,0,0,3.76-5.12,14,14,0,0,1,3-4C39,6.78,40,6.7,41.54,8.26s2.71,3.27,3.88,4.71l-7,7.17-1.5-2.52-7.73,7.6-.39-.37c.71-1.76,2.38-2.76,3.62-4.08s2.65-2.52,4.17-3.93l-1.81-1.51c-3.08,2.78-6,5.43-8.91,8.06A1.94,1.94,0,0,1,25.53,23.14ZM41.9,14.77A4.46,4.46,0,0,0,38.79,11,5.42,5.42,0,0,0,41.9,14.77ZM40.59,9.48c.67,2,1.8,3.29,3.25,3.58C43.23,11.08,42,9.77,40.59,9.48Zm-3.67,2.84c.87,2.69,2,3.9,3.52,3.9A8.31,8.31,0,0,0,36.92,12.32Z',
      }),
      createElement('path', {
        d: 'M25.54,35.63a4.65,4.65,0,1,1-4.44-4.91A4.56,4.56,0,0,1,25.54,35.63ZM21,32.28a3,3,0,0,0-3.14,2.92,3.15,3.15,0,0,0,3.05,3.3A3.12,3.12,0,0,0,24,35.3,3,3,0,0,0,21,32.28Z',
      }),
    ),
  );
};

export default SecondaryWeaponIcon;
