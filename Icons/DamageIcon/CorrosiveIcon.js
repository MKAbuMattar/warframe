import { createElement } from 'react'
import PropTypes from 'prop-types'

const CorrosiveIcon = (props) => {
  const { color, size, ...otherProps } = props
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 73.32 60.96',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M73.05,61H0V51.57c1.2-.11,2.45-.32,3.7-.32,13.31,0,26.63-.06,39.93.19,1.75,0,3.85,1.39,5.12,2.75,4,4.27,8.89,4.59,11.57-.3,2.84-5.19,7.21-3.18,10.94-2.94.83,0,1.43,4.54,2,7A12.05,12.05,0,0,1,73.05,61Z',
      }),
      createElement('path', {
        d: 'M42.35,0V8.24L11.73,18.07l0,.67a23.48,23.48,0,0,0,2.9.25c10.46-.39,20.93-.85,31.4-1.23a5.72,5.72,0,0,1,5.87,6.12A2.88,2.88,0,0,1,50.25,26a10.71,10.71,0,0,1-3.65-.33c-1.67-.25-3.51-1.17-5-.75C32.7,27.52,23.87,30.5,15,33.22,9.27,35,4.45,32.75,2.76,27.86s.64-9.18,6.77-11.3C18,13.63,26.59,11,35.13,8.19c2.35-.76,4.95-1,4.35-4.76C39.34,2.56,41.14,1.39,42.35,0Z',
      }),
      createElement('path', {
        d: 'M55.59,27a69.93,69.93,0,0,1,2.31,9.31c.14,1.26-1,3.14-2.18,3.94-.95.67-3.37.74-4,0a5.64,5.64,0,0,1-.88-4.41,82,82,0,0,1,2.94-8.72Z',
      }),
    ),
  )
}

CorrosiveIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

CorrosiveIcon.defaultProps = {
  color: '#1a1516',
  size: '24',
}

export default CorrosiveIcon
