import { createElement } from 'react'
import PropTypes from 'prop-types'

const CompanionIcon = (props) => {
  const { color, size, ...otherProps } = props
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 85.97 82.5',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M75.54,20.31c5.18,0,10.37.05,15.56,0,2.33,0,3.38,1.1,2.59,3.1C91.47,29,89.44,34.89,84.48,38.86a56,56,0,0,1-6.81,4.27c-2.72,1.6-4.89,3.48-6,6.67-.78,2.13-2.64,3.86-3.94,5.82a38.59,38.59,0,0,0-2.75,4.56c-2,4.14-4.67,7.6-9,9.53A45.66,45.66,0,0,0,51,72.54c-2.24,1.34-4.55,2.07-7,.65-3-1.74-6.27-3.21-8.82-5.47s-4.32-5.31-6.45-8c-1.23-1.55-2.64-3-3.73-4.59a20.52,20.52,0,0,1-2.82-5.22,10.1,10.1,0,0,0-6-6.66C7.33,39.61,3.39,32,.23,23.76A13,13,0,0,1,0,20.34c3.64,0,7.09,0,10.55,0s7.31-3.87,7.38-7.39c.06-3.3,0-6.61.21-9.89C18.22,2,19.09,1,19.6,0a15.23,15.23,0,0,1,2.67,1.63q4,3.81,7.88,7.8a6.08,6.08,0,0,1,1.79,2.68c.82,4,4.08,4.35,7.07,4.5a158.5,158.5,0,0,0,15.87,0c3-.16,6-.63,7.07-4.54.45-1.64,2.42-2.87,3.71-4.27C66.41,7,67.16,6.17,68,5.42a10.41,10.41,0,0,1,2.09-1.61c4.78-2.62,5.84-2,5.81,3.39,0,4.39-.18,8.78-.27,13.18-1.5,1.09-1.38,3.66-4.19,3.7-4.61.05-7.79,2.57-9.52,6.92-1.39,3.47-3.8,4.46-7.17,2.64a15.78,15.78,0,0,0-15.32-.25c-4,2-5.74,1.2-7.75-2.85a10.94,10.94,0,0,0-3.14-4.25c-3-2-6.34-3.57-10.45-5.82.29,3.71-.22,7.21,1,10,1.63,3.73,3.11,7.28,2.91,11.4-.12,2.29,1,3.56,3.31,3.68C29,45.69,32.62,46,36,43.86a14.08,14.08,0,0,1,3.48-1.15c-.32,1.24-.77,2.3-1.54,2.65-2,1-1.77,2.45-1.14,4a18.49,18.49,0,0,0,9.47,9.92,2.47,2.47,0,0,0,2.13,0,94.64,94.64,0,0,0,7.26-7,4.38,4.38,0,0,0,.52-5.75c-.75-1.19-.92-2.75-1.54-4.75,6.13,4.19,9.23,4.76,17.26,3.44a19.88,19.88,0,0,1,0-3.18c.51-3.11.47-6.56,1.9-9.2C76,28.64,75.61,24.53,75.54,20.31Z',
      }),
    ),
  )
}

CompanionIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

CompanionIcon.defaultProps = {
  color: '#1a1516',
  size: '24',
}

export default CompanionIcon