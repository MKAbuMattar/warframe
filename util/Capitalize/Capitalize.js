export const Capitalize = (str) =>
  typeof str !== 'string'
    ? ''
    : str
        .split(' ')
        .map((result) => result.charAt(0).toUpperCase() + result.slice(1))
        .join(' ')
