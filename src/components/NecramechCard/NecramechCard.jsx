import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import {NecramechModalContent} from '../BaseCard/ModalContentRenderers';

const NecramechCard = ({result, idx}) => {
  const altTextTemplate = `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`;

  return (
    <BaseCard
      item={result}
      index={idx}
      renderModalContent={(item) => <NecramechModalContent item={item} />}
      altTextTemplate={altTextTemplate}
      ariaLabel={`Necramech: ${result.name}`}
      useCdnImages={true}
    />
  );
};

export default NecramechCard;
