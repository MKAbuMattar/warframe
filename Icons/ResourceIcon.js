import { createElement } from 'react'
import PropTypes from 'prop-types'

const WeaponIcon = (props) => {
  const { color, size, ...otherProps } = props
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 60.09 53.57',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M32,10.82c-.95,2.95.31,4.36,2.59,5.57,4.36,2.33,8.57,4.93,12.9,7.45V41.7l3.32,1.94c3.91-1.57,6.35-1.26,8.14,1a5.53,5.53,0,0,1-6.1,8.67C50.27,52.44,49,50.34,49,46.52l-3.22-1.83L33.66,51.57a13,13,0,0,0-1.66,1c-1.32,1-2.48.89-3.89,0-3.74-2.31-7.64-4.36-11.36-6.71-1.65-1-3-1.19-4.52,0-.31.25-.67.43-1.09.7,0,.69,0,1.4-.09,2.1a5.54,5.54,0,1,1-11-1.61,5.49,5.49,0,0,1,6.65-4.33,25.62,25.62,0,0,1,2.58.93l3.53-2.07V27.87a8,8,0,0,0,0-1.2c-.35-2.18.53-3.47,2.53-4.48,3.64-1.84,7.06-4.09,10.69-5.94,1.86-.95,2.62-2.15,2.23-4.15A9.27,9.27,0,0,1,28.23,11C24.91,8.36,24,6.16,25,3.48A5.5,5.5,0,0,1,30.46,0a5.43,5.43,0,0,1,5,4.08C36.16,6.9,35.11,8.85,32,10.82ZM44,25.71c-4.29-2.49-8.61-5-13-7.49a2.46,2.46,0,0,0-2,.18c-3.92,2.15-7.78,4.41-11.68,6.59a1.92,1.92,0,0,0-1.13,1.89q0,6.72-.05,13.43a2,2,0,0,0,1.21,2.09c1.68.91,3.31,1.92,5,2.88l5.81,3.33V43c-2-1.14-3.92-2.35-5.93-3.48a2.08,2.08,0,0,1-1.2-2.11c.08-2.48.1-4.95.06-7.43a2.24,2.24,0,0,1,1.37-2.26Q25.78,26,29,24.07a2.25,2.25,0,0,1,2.65.07q3,1.91,6.18,3.65a2.41,2.41,0,0,1,1.46,2.46q-.18,3.6-.12,7.19a2.43,2.43,0,0,1-1.54,2.42c-1.56.8-3.1,1.66-4.6,2.58-.49.3-1.13.83-1.18,1.31-.15,1.53,0,3.09,0,5l12.25-7ZM30.09,40.32c1.45-.8,3-1.67,4.52-2.48a2.06,2.06,0,0,0,1.14-1.91c.39-5.05.41-5.05-4.07-7.61-.21-.12-.4-.32-.62-.35a3.56,3.56,0,0,0-1.74,0c-1.64.8-3.2,1.75-4.7,2.6C24,37.1,24,37.1,29.52,40.09,29.66,40.16,29.81,40.21,30.09,40.32ZM54.58,51.39a3.23,3.23,0,1,0,.1-6.46,3.23,3.23,0,0,0-.1,6.46ZM33.43,5.26A3.24,3.24,0,1,0,27,5.5a3.24,3.24,0,0,0,6.48-.24ZM8.63,48.07a3.24,3.24,0,0,0-3.27-3.14,3.23,3.23,0,0,0,.19,6.46A3.2,3.2,0,0,0,8.63,48.07Z',
      }),
    ),
  )
}

WeaponIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

WeaponIcon.defaultProps = {
  color: '#1a1516',
  size: '24',
}

export default WeaponIcon
