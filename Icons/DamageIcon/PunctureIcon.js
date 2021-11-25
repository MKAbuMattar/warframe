import { createElement } from 'react'
import PropTypes from 'prop-types'

const PunctureIcon = (props) => {
  const { color, size, ...otherProps } = props
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 64.06 67.48',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M20.8,33.39,3.93,54l1.3,2.3c3-.55,6.19-.6,8.94-1.73A84.57,84.57,0,0,0,42.79,34.93,94.37,94.37,0,0,0,53.08,22.15c1.1-1.61.69-4.25,1-6.42-2,.24-4.27-.08-5.89.82-5.64,3.12-11.06,6.67-16.49,10C35.2,19.27,51.31,11.17,59.17,12.8c3.92.81,6.06,3.91,4.21,7.9a67.1,67.1,0,0,1-9.22,15.23,97.55,97.55,0,0,1-36.45,27.3A35.17,35.17,0,0,1,6.67,66C1.3,66.34-1.2,63.11.55,58,4,47.81,11,40.27,20.8,33.39Z',
      }),
      createElement('path', {
        d: 'M1.86,4.66,8.57,0,35.89,37c-.17.53-.35,1.06-.52,1.59-1.48-.23-3.56.08-4.34-.78C21.4,27.07,12,16.18,1.86,4.66Z',
      }),
      createElement('path', {
        d: 'M45.5,50.09,57.83,66.55l-1.11.93L43.32,52C44,51.33,44.77,50.71,45.5,50.09Z',
      }),
    ),
  )
}

PunctureIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

PunctureIcon.defaultProps = {
  color: '#1a1516',
  size: '24',
}

export default PunctureIcon
