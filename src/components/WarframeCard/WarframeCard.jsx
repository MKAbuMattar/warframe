import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import {WarframeModalContent} from '../BaseCard/ModalContentRenderers';

const WarframeCard = ({result, idx}) => {
  const altTextTemplate = `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`;

  return (
    <BaseCard
      item={result}
      index={idx}
      renderModalContent={(item) => <WarframeModalContent item={item} />}
      altTextTemplate={altTextTemplate}
      ariaLabel={`Warframe: ${result.name}`}
    />
  );
};

export default WarframeCard;
