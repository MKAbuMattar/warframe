import { createElement } from 'react'
import PropTypes from 'prop-types'

const GasIcon = (props) => {
  const { color, size, ...otherProps } = props
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 70.87 55.23',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M52,35.73c-.63,3.54-1.13,7.1-1.94,10.59a6.34,6.34,0,0,1-2.07,3.54c-9.52,6.87-14.61,7.19-24.06.71-2.2-1.52-3.09-4.94-4.59-7.48l2-.16a30,30,0,0,1-4,4.84c-.45.38-2.24-.86-3.14-1.25C13.72,48.76,15.21,53,10.37,54c-1,.21-2.37-1.37-3.28-1.95-1.3-.11-4,0-4.15-.43C1.65,45.9-.2,40,0,34.23c.19-4.95,7.05-6.31,11-2.94.77.67,2.27.48,2.67.55-1.78-3.29-5.64-7.12-5-10,1-5,3.79-10.68,7.63-14C28.1-2.33,40.52-2.48,52.59,6.66c3.94,3,6.66,8.16,8.76,12.85,2.89,6.48-3.23,9.23-6.77,12.89C53.7,33.5,52.83,34.62,52,35.73ZM17.38,19.82c.62,2.11-2,6.56,3.56,6.92,4.33.28,9.84-4.84,9.77-8.9-.06-3.75-2.74-5.11-8.31-5.61C16.29,11.69,17.19,15.52,17.38,19.82Zm37.09-.14c-1-2.2-1.8-6.14-3.34-6.48-3-.67-7.46-.42-9.54,1.44-3.1,2.77.57,5.48,2.53,7.81a4.7,4.7,0,0,0,1.42,1.36c2.12,1,4.3,1.84,6.46,2.74ZM27.7,44.87c1.05-2,2.55-3.64,2.2-4.51-1.66-4.17-.24-7,2.94-9.6.51-.42.37-1.65.56-2.71C25.53,30.27,23.13,36.42,27.7,44.87Zm16.2-1.5c2.55-3.94,2.43-7.41.53-10.73-1.52-2.66-3.54-5-6.75-4.57ZM31.09,48l10.48-.84C38,41.93,34.31,42.11,31.09,48Zm4.75-7.17c1.34-2,2.89-3.23,2.79-4.36s-1.84-2.11-2.86-3.16c-1.11,1.14-2.82,2.16-3.1,3.49C32.48,37.65,34.32,39,35.84,40.8Z',
      }),
      createElement('path', {
        d: 'M52,35.73c.88-1.11,1.75-2.23,2.63-3.33,2.19-1,5.35.35,6.81-3,.26-.61,3.16-.08,5-.08-1.09,4.46-2.43,8.39-2.94,12.43s-.1,7.88-.1,11.73c-6.27,1.05-6.32,1-6.83-12.64-.26,2.59-.48,4.69-.71,7-3.49.68-5.46-.26-5.14-3.86C50.86,41.2,51.49,38.47,52,35.73Z',
      }),
      createElement('path', {
        d: 'M67.39,46.47l3.11-3c-1.37,4.15-2.31,7-3.39,10.24-4.21-4.56-3-17,1.43-21.8,3.32,2.92,2.88,3.42,0,6.35-1.72,1.78-1.9,5.06-2.77,7.67Z',
      }),
    ),
  )
}

GasIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

GasIcon.defaultProps = {
  color: '#1a1516',
  size: '24',
}

export default GasIcon