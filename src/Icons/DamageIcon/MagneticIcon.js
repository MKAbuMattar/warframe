import { createElement } from 'react'
import PropTypes from 'prop-types'

const MagneticIcon = (props) => {
  const { color, size, ...otherProps } = props
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 74.56 57.82',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M30.68.26c3.49,0,7,.06,10.49,0,2.54-.06,3.37,1.05,3.49,3.6.67,13.47.74,13.46-12.8,13.32-3.33,0-6.67-.17-10,.11-6.73.56-11.27,5.24-11.17,11.17s4.28,10.17,11,10.63c6.14.42,12.32.47,18.47.43,3,0,4.16,1.12,4,4.12-.77,17.14,2.57,13.71-13.37,13.69A73.1,73.1,0,0,1,16,56.16C7.55,54.37,1.63,48.73.62,40.35a89.21,89.21,0,0,1,.6-25.17C2.76,6,11.5.38,21.68.05c3-.1,6,0,9,0Z',
      }),
      createElement('path', {
        d: 'M46.68,8.4a33.25,33.25,0,0,0,0-3.46C46.3,1.55,47.6.3,51.13.35S56,1.46,55.59,4.94c-.23,2.12-.05,4.29-.14,6.43-.11,3,1,6.24-4.38,6.16-5.15-.07-4.51-3-4.46-6.16,0-1,0-2,0-3Z',
      }),
      createElement('path', {
        d: 'M55,40.12c0,5.09,0,9.88,0,14.68,0,3.37-2.59,3.25-4.6,2.77-1.51-.36-3.62-1.66-3.91-2.91-.6-2.52-.15-5.29-.12-7.95C46.4,39.12,46.4,39.12,55,40.12Z',
      }),
      createElement('path', {
        d: 'M67.81,12,60.18,9.06l5.69-2.7c-.06-.5-.11-1-.17-1.49l8.5,2.84L68,10.59C67.94,11.06,67.87,11.52,67.81,12Z',
      }),
      createElement('path', {
        d: 'M66.15,43.91l8.41,2.81-6.48,2.72c.07.53.14,1.07.2,1.61l-8-3.08,5.64-2.79Z',
      }),
    ),
  )
}

MagneticIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MagneticIcon.defaultProps = {
  color: '#1a1516',
  size: '24',
}

export default MagneticIcon
