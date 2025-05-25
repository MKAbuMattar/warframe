import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import {ModModalContent} from '../BaseCard/ModalContentRenderers';

const ModCard = ({result, idx}) => {
  const altTextTemplate = `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`;

  return (
    <BaseCard
      item={result}
      index={idx}
      renderModalContent={(item) => <ModModalContent item={item} />}
      altTextTemplate={altTextTemplate}
      ariaLabel={`Mod: ${result.name}`}
    />
  );
};

export default ModCard;
