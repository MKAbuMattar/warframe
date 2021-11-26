import { Fragment } from 'react'

import Image from 'next/image'

import { removeSpaces, removePrime } from '../../util/Regex/Regex'

const AbilitieIcons = ({ warframe, abilitie, description }) => {
  const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL

  const myLoader = ({ src, width, quality }) =>
    `${IMG_URL}/warframe/abilities/${removePrime(
      warframe.toLowerCase(),
    )}/${src}?w=${width}&q=${quality || 75}`

  return (
    <Fragment>
      <Image
        loader={myLoader}
        src={`${removeSpaces(abilitie)}.png`}
        title={abilitie}
        alt={description}
        width={50}
        height={50}
      />
    </Fragment>
  )
}

export default AbilitieIcons
