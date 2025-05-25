import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import {CompanionModalContent} from '../BaseCard/ModalContentRenderers';

const SentinelCard = ({result, idx}) => {
  const altTextTemplate = `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`;

  return (
    <BaseCard
      item={result}
      index={idx}
      renderModalContent={(item) => <CompanionModalContent item={item} />}
      altTextTemplate={altTextTemplate}
      ariaLabel={`Sentinel: ${result.name}`}
    />
  );
};

export default SentinelCard;
