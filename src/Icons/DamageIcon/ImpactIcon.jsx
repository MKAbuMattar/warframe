import {createElement} from 'react';

const ImpactIcon = (props) => {
  const {color, size, ...otherProps} = props;
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 75.19 64.71',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M36,20.17c-3.35-7.46-14-9.34-12.1-20.17,6.67.3,13.24.53,19.81,1a5.48,5.48,0,0,1,2.87,1.81c9,8.85,17.79,17.86,26.89,26.58,2.33,2.23,2.06,3.86.31,5.88-3,3.5-6.15,7-9.79,11.07C58.1,40.89,53,36.48,48.2,31.76c-2.89-2.86-4.83-2.82-7.68.25-9,9.73-18.38,19.19-27.62,28.74-1.15,1.19-2.39,2.27-4.18,4L0,54.46Z',
      }),
    ),
  );
};

ImpactIcon.defaultProps = {
  color: '#1a1516',
  size: '24',
};

export default ImpactIcon;
