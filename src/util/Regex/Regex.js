export const imgURL = (url) =>
  url !== undefined ? url.replace(/^(.+?\.(png|jpe?g)).*$/i, '$1') : ''

export const removeGlyph = (str) =>
  str.replace(' Glyph', '').replace(' Discord', '')

export const removeSpaces = (str) => str.replace(/\s/g, '')

export const removePrime = (str) =>
  str.replace(' prime', '').replace(' umbra', '')
