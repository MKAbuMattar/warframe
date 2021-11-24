export const imgURL = (url) =>
  url !== undefined ? url.replace(/^(.+?\.(png|jpe?g)).*$/i, '$1') : ''

export const removeGlyph = (str) => {
  str = str.replace(' Glyph', '')
  str = str.replace(' Discord', '')
  return str
}
