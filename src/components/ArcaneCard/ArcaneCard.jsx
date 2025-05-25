import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import {ArcaneModalContent} from '../BaseCard/ModalContentRenderers';

const ArcaneCard = ({result, idx}) => {
  const altTextTemplate = `Name: ${result.name}\nDescription: ${result.description || 'N/A'}`;

  return (
    <BaseCard
      item={result}
      index={idx}
      renderModalContent={(item) => <ArcaneModalContent item={item} />}
      altTextTemplate={altTextTemplate}
      ariaLabel={`Arcane: ${result.name}`}
      useCdnImages={true}
    />
  );
};

export default ArcaneCard;
