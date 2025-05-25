import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import {SimpleModalContent} from '../BaseCard/ModalContentRenderers';

const SkinCard = ({result, idx}) => {
  const altTextTemplate = `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`;

  return (
    <BaseCard
      item={result}
      index={idx}
      renderModalContent={(item) => <SimpleModalContent item={item} />}
      altTextTemplate={altTextTemplate}
      ariaLabel={`Skin: ${result.name}`}
      useCdnImages={true}
    />
  );
};

export default SkinCard;
