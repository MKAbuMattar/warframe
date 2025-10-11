import {Fragment} from 'react';
import {removeSpaces, removePrime} from '../../util/Regex/Regex';

const AbilitieIcons = ({warframe, abilitie, description}) => {
  const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;

  const imageSrc = `${IMG_URL}/warframe/abilities/${removePrime(
    warframe.toLowerCase(),
  )}/${removeSpaces(abilitie)}.png`;

  return (
    <Fragment>
      <img
        src={imageSrc}
        title={abilitie}
        alt={description}
        width={50}
        height={50}
      />
    </Fragment>
  );
};

export default AbilitieIcons;
