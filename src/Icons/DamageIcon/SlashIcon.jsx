import {createElement} from 'react';

const SlashIcon = (props) => {
  const {color, size, ...otherProps} = props;
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 74.11 46.82',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M74.11,38.77c-2.11,4.65-5.75,6.54-10.17,7.38-8.8,1.68-17.29,0-25.55-2.76-12.65-4.24-24.14-10.45-33-20.8-.32-.38-.66-.75-1-1.16-3-4.31-6-8.8-3.61-14.28S8.52.67,13.76.11a61.07,61.07,0,0,1,6.35,0c0,.62.05,1.13-.09,1.2-8.64,4.55-10.09,9.78-3.13,17.07C32.2,34.37,50.75,42.39,74.11,38.77Z',
      }),
    ),
  );
};

SlashIcon.defaultProps = {
  color: '#1a1516',
  size: '24',
};

export default SlashIcon;
