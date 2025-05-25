import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import {EnemyModalContent} from '../BaseCard/ModalContentRenderers';

const EnemyCard = ({result, idx}) => {
  const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;

  const myLoader = ({src, width, quality}) =>
    `${IMG_URL}/warframe/enemy/${src}?w=${width}&q=${quality || 75}`;

  return (
    <BaseCard
      key={idx}
      item={result}
      title={result.name}
      imageSrc={`${result.name}.png`}
      imageLoader={myLoader}
      altText={`Name: ${result.name}\n\rDescription:${result.description}\n\rPassive${result.passiveDescription}`}
      renderModalContent={(item) => <EnemyModalContent item={item} />}
    />
  );
};

export default EnemyCard;
