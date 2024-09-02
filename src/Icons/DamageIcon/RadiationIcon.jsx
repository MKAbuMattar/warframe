import { createElement } from 'react'
import PropTypes from 'prop-types'

const RadiationIcon = (props) => {
  const { color, size, ...otherProps } = props
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 74.09 70.39',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M54.14,66.5c-10.89,4.92-21.25,5.16-31.68.8-.75-.31-1.48-2.61-1.08-3.41q4-8,8.63-15.67c.48-.79,2.12-1,3.28-1.25C40.83,45.48,45,49.4,47.83,55.84,49.37,59.29,51.67,62.4,54.14,66.5Z',
      }),
      createElement('path', {
        d: 'M21.38,0c2.76,7,5.36,13.38,7.74,19.85.26.73-.61,2-1.22,2.88a27.82,27.82,0,0,1-3.82,4.48c-1.07,1-2.63,2.16-3.87,2.05C14.27,28.74,8.36,27.81,2.44,27c-3.1-.4-2.65-2.23-1.86-4.34C4.27,12.79,10.78,5.42,21.38,0Z',
      }),
      createElement('path', {
        d: 'M74.09,26.62c-7.71,1-14.72,2.1-21.76,2.61-1.2.09-2.38-2.77-3.92-3.68-6.19-3.67-3.37-8.22-1.5-12.73q2-4.85,4-9.68c1-2.41,2.39-2.83,4.65-1.43A40.29,40.29,0,0,1,74.09,26.62Z',
      }),
      createElement('path', {
        d: 'M43.66,33.26a7.46,7.46,0,0,1-14.92-.44,7.46,7.46,0,0,1,14.92.44Z',
      }),
    ),
  )
}

RadiationIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

RadiationIcon.defaultProps = {
  color: '#1a1516',
  size: '24',
}

export default RadiationIcon
