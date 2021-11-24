import { createElement } from 'react'
import PropTypes from 'prop-types'

const BlastIcon = (props) => {
  const { color, size, ...otherProps } = props
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 73.78 74.2',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M70.7,10.91C66,15.94,61.32,21,56.57,26c-4,4.23-3.92,5.49,1.18,8.06,5.3,2.67,10.69,5.16,16,7.72,0,.48,0,1-.07,1.44L56.3,44.88c2.24,4.47,4.13,8.26,6,12a68.27,68.27,0,0,1,5.13,12c-1-.71-2-1.41-2.92-2.15L47.41,53.43c-1.88,7-3.73,13.81-5.57,20.63l-1,.14L34.45,55.38,12.07,69l-.7-.67c3.41-5.12,6.82-10.24,10.43-15.68H0L20.73,38.29l-7.5-9,.53-.76,6.12,3.27L7.1,8.74c1,.22,1.59.17,1.86.42,6.12,5.77,12.2,11.58,19,18C28.69,17.83,29.4,8.94,30.12,0l.75,0,8,20.37L47.46,6.09c.29,5.76.53,10.6.83,16.52L69.87,9.88Z',
      }),
    ),
  )
}

BlastIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

BlastIcon.defaultProps = {
  color: '#1a1516',
  size: '24',
}

export default BlastIcon
