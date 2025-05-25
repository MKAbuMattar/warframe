import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import {ArchwingModalContent} from '../BaseCard/ModalContentRenderers';

const ArchwingCard = ({result, idx}) => {
  const altTextTemplate = `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`;

  return (
    <BaseCard
      item={result}
      index={idx}
      renderModalContent={(item) => <ArchwingModalContent item={item} />}
      altTextTemplate={altTextTemplate}
      ariaLabel={`Archwing: ${result.name}`}
    />
  );
};

export default ArchwingCard;
