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
      viewBox: '0 0 350 300',
      ...otherProps,
    },
    createElement(
      'g',
      {
        fill: color,
      },
      createElement('path', {
        d: 'M339.58,129.54c-2.83,8.64-11.28,10.45-17.77,14.64.35-1.73.7-3.47,1.1-5.4-2.56,2.22-4.36,4.27-6.58,5.64-5.21,3.2-10.64,6.05-15.93,9.11-1.41.82-2.67,1.91-4,2.87l.53.85,4.55-1.34c-1.17,1.88-2.06,4-3.56,5.56a73.28,73.28,0,0,1-6.89,5.58c-1.47,1.18-3.63,2.11-4.24,3.64-3.09,7.86-5.79,15.87-8.82,24.4a27.09,27.09,0,0,1-4.33-2.32c-3.54-3-6.79-.81-8.71,1.49-2.23,2.68.05,5.15,2.67,6.87,3.8,2.49,7.52,5.11,11.26,7.66-.43.64-.55.89-.6.87-7.31-1.85-9.92,3.22-12.87,8.34-2.69,4.68-6,9-9.06,13.52-4.38-3.32-3.37-10.6-10.26-10.75-6.3,11.59,3.84,18.22,6.48,27.43-1.7-2.76-3.44-5.49-5.07-8.29a49.18,49.18,0,0,0-6.13-9.14L248,245.44c-2.5,1.22-5,1.93-6.8,3.44-4.45,3.67-8.59,7.71-13.09,11.81-2.14-9.45-4.12-18.24-6.11-27l-2,.18q-3.31,19-6.62,38l-18.93,8.32c1.08-10.4,2.12-20.31,3.16-30.23l-1.39-.48c-.66.73-1.63,1.35-1.93,2.21a36.8,36.8,0,0,0-2.32,8.15c-.9,8.85-8.52,13.49-12.36,20.46-1,1.87-2.1,3.72-3.69,6.53C149.57,294,125,288.73,103.69,269.6c-4.63-4.16-5.29-3.94-9.14,0C81.8,282.48,67.09,289,50.88,276.94c-21.32-15.88-37.61-35.41-41.59-62.83C7.93,204.77,6.13,195.25,6.7,186c.38-6.29,3.78-12.87,7.39-18.27,1.61-2.4,7.3-3.59,10.72-3,12.3,2.19,21.34,10.09,28.48,19.76s13.23,20,19.78,30c3.29-3.82,6.87-7.83,10.21-12a4,4,0,0,0,.18-3.43c-1.71-4.16-3.28-8.46-5.65-12.25-3.11-5-6.44-10-10.57-14.14-4.29-4.29-9.64-7.52-14.72-11.35l3.94-4.92c-4.28.35-7.4.82-10.52.76-1.51,0-4.22-.93-4.3-1.65-.31-3-.41-6.33.66-9,.43-1.12,4.05-1.53,6.13-1.32s4,1.63,6,2.46c5.54,2.31,7,1.47,8-4.46.09-.61.29-1.2.7-2.87l1.25,6.47c1.61-3.23,2.54-5.26,3.62-7.2.62-1.13,1.41-2.94,2.26-3,4.54-.43,4.55-4.67,4.7-7a35,35,0,0,1,6.42-18c2.29-3.36,3.37-7.54,5-11.42L80.5,94.66l.37-.49,4.95,2.88c6.81-10.43,13.32-20.4,19.82-30.37l1,.57c-.94,1.66-2,3.26-2.79,5-10,21-19.07,42.33-24.49,65a18.61,18.61,0,0,0,0,3c3.35-10.17,6.34-19.3,9.34-28.43-3.86,16.55-8.94,32.83-9.47,49.92l1.43.49a22.26,22.26,0,0,0,1.61-3c8-22.28,16.27-44.44,28.21-65C124.23,70.44,141,49.34,164.16,33.92c16.85-11.22,35.11-17.5,55.51-16.8a49.63,49.63,0,0,1,6,.55c2.26.34,4.48.9,7.83,1.59l-3.6,1.23c-.67-.06-1.34-.08-2-.18-32.41-5.09-58.38,7.37-79.91,30.36-5.26,5.62-8.11,13.51-12,20.37-.05.09.3.41.32.44,1.47-1.24,3-2.51,4.48-3.79-3,4.75-6,9.55-9.16,14.24-2,3-3.7,5.65.24,8.48,3.64,2.61,6.5,1.68,9.05-1.49q6.4-8,12.74-16a5.24,5.24,0,0,0,.56-1.36l-3.71-1.42,1.2-.56c-1-3-2-5.94-3.17-9.64l-6.6,6.22,7.68-9.59c1,2.74,1.2,5.47,2.61,6.53,7.35,5.5,9.76,14.09,14.09,21.45,2.37,4,4.44,8.23,6.65,12.35l1.06-.55-13.5-27.56.68-.31,23.53,40.78c2.23-3.1,5.48-6.42,5-7.12-2.31-3.29-.85-5.08,1.29-7.26.86-.88,1.25-2.22,2.48-4.5l-7.08,3.09c-1.79-4.14-3.23-7.79-4.93-11.33-3.4-7.06-7.09-14-10.28-21.13-.67-1.51-.39-4.67.67-5.51,6.62-5.24,13.58-10,21.4-15.66C193.94,44,194.63,47,195,50c.73,6.46,1.78,12.94,1.78,19.4s5.46,11.84,2.85,18.69c-.49,1.28.69,3.42,1.56,4.9a3,3,0,0,0,2.88.62c2.32-1.21,4.43-2.82,7.19-4.65,0-6.24.35-13.22-.08-20.14-.66-10.47-2.1-20.9-2.74-31.37-.34-5.61-.25-11-7.49-13.07L201.7,23l28.17-2.55c-.25,2.06-1.27,4.42-.6,6.12,2.21,5.59,1.82,11.07.67,16.71-1.69,8.32-3.44,16.65-4.81,25-.58,3.51-.1,7.19-.45,10.76-.17,1.66-1.36,3.2-1.72,4.88A17.29,17.29,0,0,0,223,88a30.86,30.86,0,0,1,3.46-.19c7.48.38,7.35-5.5,8.49-10.31,3.41-14.37,6.73-28.76,10.25-43.11.4-1.65,1.83-3.05,2.84-4.66-.68-.91-1.88-2.49-3.08-4.07l1.48-1.55L262,34.81c-.41,1.32-1.4,2.77-1,3.59,2.84,6.12-.48,11-3,16-3.23,6.58-6.54,13.12-9.66,19.76-2.17,4.63-4.18,9.35-6,14.12-.7,1.8-.76,3.86-1.29,6.8,1.77-.82,2.64-1.58,3.08-1.38,6.46,2.94,8.27-1.79,10.54-6.12,5.24-10,10.66-19.84,15.93-29.8,3.23-6.11,9.14-8.69,14.27-12.3l.83.88-1.65,3c25.2-3.78,34,15.84,45.75,31.12,8.06-3.13,10.16-2.23,13.07,5.84,4.32,11.94,5.39,24,.84,36.16-1,2.55-2.81,4.76-4.28,7.15-.31-1-.61-2-.81-2.75l-9.58,6.8.64,1.19ZM125,173.58l-4.3,3.74c4.57,2.14,8.51,3.75,12.21,5.81a10.51,10.51,0,0,1,4.33,4.28c3.85,8.44,6.75,9.71,15.07,5.43,12.85-6.61,25.6-13.42,38.37-20.18a16.86,16.86,0,0,0,2.52-2c-2.21-4-5-5.39-9.16-3.56-.76.33-2.18-.83-3.29-1.29,4.85.44,3.93-3.06,3.39-5.59-.22-1-2.28-1.7-3.5-2.53-.57,1.34-1.63,2.7-1.57,4s1.16,2.82,1.81,4.23l-8.07,3.25c-2.28-6.53-.27-13.73,5-19.11,3.9-4,8.25-4.85,13.6-2.1-2.75-3.35-5.52-6.49-9-8.31-4.52-2.39-9.55-3.85-14.43-5.48-5.43-1.81-12.57,1.08-15.35,6.15,3.39,1.74,6.78,3.44,10.14,5.22,2.54,1.34,3.37,3.18,2.4,6.18-1.61,5-2.74,10.14-4.25,15.87-7-3.09-13.92-6.49-21.06-1.12,1.25-1.54,2.51-3.08,4-4.9l-6.07-3,4.22-3-4.26-1.82,5-2c-12.44-1-23.8-2-35.18-2.87-3.44-.26-7.22,1.07-7.08,4.6.14,3.69-2.2,8.8,3.26,11.13,1.33.57,2.73,1.56,4,1.49,8.33-.44,16.64-1.12,25-1.73l.35,1.26-13,7.54.33,1.11Zm47-44.47c-.25-1.43,0-3.43-.84-4.21a157.34,157.34,0,0,0-12.71-10.5c-7.9-5.83-15.94-11.47-24-17a21,21,0,0,0-6.73-3.1c-5.27-1.3-9.07,1.9-9.66,7.22-.74,6.74,3.84,8.83,8.85,10.13a6,6,0,0,1,4.52.14c10.22,5.85,20.43,11.72,30.48,17.85,3.8,2.31,7,3,10.25-.64-.2.89-.41,1.78-.61,2.67l.88,1c2.86-1.69,5.65-3.53,8.62-5,1.57-.78,3.61-1.61,5.16-1.24,2.7.63,5.22,2.12,7.77,3.33,3,1.41,4.06,3.35,2.85,6.83-.61,1.73-.12,4.23.68,6,2.73,6,2.08,8.89-3.35,12.25-6.43,4-6.44,4-1.94,10.35.65.91,1.45,1.72,2.91,3.45,1.42-2.32,2.44-4.2,3.68-5.91,1-1.42,2.07-3.1,3.53-3.89,7.91-4.28,15.77-8.74,24-12.3,5.33-2.3,9.59-7.56,17.25-4.66,3.58,1.36,9.24-2,13.67-3.85,5.81-2.49,11.26-5.8,17-8.47,3.49-1.63,5.49-3.83,6-7.82a53.32,53.32,0,0,1,2.73-11.63c.56-1.57,2.68-2.59,4.09-3.86l.75.86c-.24.74-.48,1.49-.85,2.66,7.8-1.92,2,3,2.58,5.51,1.77-.35,3.44-.34,4.77-1,8.94-4.46,17.84-9,26.63-13.73,1.1-.59,1.48-2.51,2.74-4.81,2.75-1.08,6.83-2.64,10.88-4.27,1.52-.61,3-1.38,4.41-2l-9.4,9.93c6.48-.86,9.07-3.45,9.37-9.93-.62-1-1.74-1.87-1.78-2.85-.19-4.6-2.43-4.6-6-3.36-1.52.53-3.49.09-5.2-.25-4.83-1-9.62-2.12-14.43-3.19l-.14.89,6,3.73c-4.06,2.34-7.49,4.41-11,6.32C298.46,95,290.47,99,282.7,103.43c-3.33,1.9-5.85,1.5-8.78-1.32,1.44-1.91,2.7-3.85,4.21-5.54,5.11-5.71,10.9-10.93,15.21-17.18,2-2.86,1.85-7.86,1.07-11.55-.29-1.39-5.11-2.15-8-2.48-.93-.11-2.47,1.86-3.13,3.18-1.17,2.36-1.3,5.42-2.89,7.34C275,82.5,269,88.76,263.26,95.17L266.68,99l-8.53,5.1.37.82,9.89-3.46c-.42,1.15-.45,1.53-.65,1.72a11.43,11.43,0,0,1-1.23.82c-6.49,4.79-14.07,5.21-21.66,5.16-3.69,0-8,.24-10.91-1.48C227.9,104.11,218,105,213.7,111c2.62,1.15,5.23,2.15,7.71,3.39,3.82,1.93,6.91,4.23,4.42,9.32-.48,1,0,2.5.26,3.73.59,3.28,2.16,6.7,1.64,9.77C227.25,140,217,143.46,214,143c-1.22-.17-3.69.62-3.69,1,0,5-4,4.77-7.84,6.49.4-7.28,3-12.58,7.74-16.8,3.15-2.81,6.75-3.38,10.69.16-3-10.78-13.49-9.35-20.31-14.06l9.08-5-.66-1.42c-4.45.64-9.48.17-13.21,2.14C187.73,119.75,178.23,121.65,172,129.11ZM41.46,213.77c-1.41,3.46-2.9,5.58-3.06,7.79a145.42,145.42,0,0,0-.19,17c.38,8.14,4.25,14.5,11.09,18.89,1.56,1,4,2.09,5.35,1.53,1.17-.46,2-3.25,2-5a123.34,123.34,0,0,0-1.31-12.39c-.29-2.18-.76-4.33-1.15-6.5l1.78-.3,4.21,24.41c4.06-10.23-1.15-19.7-2.81-29.44l1.59-.31c1.7,8.06,3.41,16.12,5.39,25.48a30,30,0,0,0,.34-4.55C62.88,234.44,59.32,219,49.6,205.9a222.39,222.39,0,0,0-16-18.48,10.35,10.35,0,0,0-12.84-1.75c11.64,2.18,16.6,7.15,21.37,21.81a52.6,52.6,0,0,0-4.84-5A170.41,170.41,0,0,0,23,191.87a5.77,5.77,0,0,0-8.32,2c-2.1,3.33-.93,8,3,11,1.06-2.26,2.61-4.31,2.76-6.46.07-.94-2.7-2.09-4.18-3.15L16.17,194c1.7,0,3.57-.46,5.09.07C31.42,197.65,36.75,206.11,41.46,213.77Zm75.39-.49c2.86,4.62,2.85,4.49,8.08,4.18,6.31-.37,12.64-.33,18.94-.77,3.2-.23,6.74-.4,9.45-1.85,32.89-17.62,65.66-35.47,98.45-53.26a121.15,121.15,0,0,0,11.3-6.38c1.12-.76,1.12-3.15,1.63-4.79-1.74.12-3.69-.21-5.17.47-2.06.93-3.64,2.86-5.65,4-19.72,10.79-39.31,21.84-59.31,32.1-11.5,5.9-22.27,13.6-35.36,16.11-.42.08-1.09.64-1.07,1,.14,4.11-3.1,3.26-5.33,3.54-3.77.49-7.56.82-11.36.94-2.2.08-4.9.33-6.54-.76-2.85-1.88-13.3-1.91-13.46.88C121.22,212.38,118.37,211.82,116.85,213.28Zm123.93-39.87c-2.3,2.46-3.92,4.2-5.54,5.92s-2.78,3.74-4.63,4.78c-15.52,8.77-31.09,17.45-46.79,25.87a35.82,35.82,0,0,1-11.73,3.9c-4,.55-6,3.09-6.13,6.05-.13,2.07,1.93,5.3,3.85,6.18s4.92-.33,7-1.43c3.05-1.58,5.61-4.08,8.57-5.88,13.22-8.05,26.38-16.2,39.83-23.85A95.54,95.54,0,0,1,242,188c4.09-1.39,6.88-6.79,5.14-12.15l-3,3.82C243.14,177.75,242.3,176.21,240.78,173.41Zm-37.12-5.47c11.6-6.08,23.06-12.08,34.52-18.11,1-.53,2.56-1,2.84-1.84.49-1.5.21-3.25.25-4.89-1.11.35-2.24.66-3.33,1.06a21.33,21.33,0,0,0-2.73,1.2c-11.41,6-22.81,12-34.33,18.13ZM130,226.84l-.08-1.62c-8.82.77-17.65,1.42-26.42,2.52-.94.11-2.19,2.81-2.21,4.32-.14,8.48,4.74,12.39,14.4,11.37-.37-2.91-.58-5.85-1.14-8.71-.82-4.12.29-6.28,4.89-6.43C123,228.18,126.46,227.35,130,226.84ZM98.34,206.68c3.8,4.52,7.7.72,11.74-1.15,1.2-.55,2.64-1,3.45-1.93,1.32-1.54,3.42-3.79,3-5.15-.85-3.06-3.7-2.75-6.14-1.39-6.05,3.37-12.49,4.83-19.41,5.47-3.28.3-6.31,3.29-9.46,5.05l.48,1.26c4.52.45,9,1,13.56,1.19C96.37,210.05,97.2,208.13,98.34,206.68Zm22.75-18.3c-3.74-4.08-6.7-3.53-10.16-1.71-8.74,4.57-17.38,10-28,6.1,2.17,6.81,4.09,9,10.39,7.12C102.7,197,111.55,192.44,121.09,188.38Zm53,17.28.88,1.66L241.66,171l-.77-1.4ZM154.4,278.49l1.78.62c4.78-2.5,15-23.53,14-29.86a46.29,46.29,0,0,0-2.94,3.62c-3.32,5.15-6.85,10.19-9.73,15.57C155.91,271.48,155.41,275.12,154.4,278.49Zm22.06-49.88,1.13,1.73,64.73-37-.66-1.14Zm147.81-95.5c-3.19-1.25-28.53,11.68-33.12,16.51C295.21,150.7,316.89,140,324.27,133.11ZM133.52,224.48c-2,4.74,0,14.78,3.58,17.8C139.84,238.52,137.75,228.17,133.52,224.48ZM34.06,240.42l1.38.08c2.69-6.82,1.35-13.43-.44-20l-1.86.07Q33.59,230.5,34.06,240.42ZM295,120.74l1,1.87,25.11-13.49c-.28-.53-.56-1.07-.85-1.6Zm-.52,15.15.48.85q12.56-7,25.12-14.06c-.32-.54-.63-1.08-.94-1.62ZM102.68,213.94c5.8,1,15.27-4.5,16.77-8.66ZM77.45,264.05c2-9.46,0-18.49-3.61-27.28Q75.66,250.42,77.45,264.05Z',
      }),
      createElement('path', {
        d: 'M265.05,121.31A42.52,42.52,0,0,1,261.3,124c-3.56,2-7.26,3.88-10.76,6-2.42,1.48-4.44,3-6.53-.49-1.54-2.59-2.68-1.77-4.26.49s-4.13,4-6.89,6.49c-.8-7.39,3.52-15.93,8.34-18.35,3.27-1.63,6.28-1.31,8.15,2,1.37,2.44,2.71,2.54,5.22,1.66,3.12-1.09,6.54-1.33,9.83-1.94Z',
      }),
      createElement('path', {
        d: 'M189.09,27.81l2.07,10.1c-.16,0-.61.16-.7,0-4.82-6.51-4.83-6.54-12.05-2.74-2.29,1.21-4.49,2.57-7.17,3.11Z',
      }),
      createElement('path', {
        d: 'M165.81,163.19l2.84,7.77A112.46,112.46,0,0,1,158,176.31c-1.5.59-3.58-.33-5.39-.56.92-1.36,1.63-3,2.82-4C158.74,168.78,162.24,166.09,165.81,163.19Z',
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
