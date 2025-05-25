import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import {RailjackModalContent} from '../BaseCard/ModalContentRenderers';

const RailjackCard = ({result, idx}) => {
  const altTextTemplate = `Name: ${result.name}\nDescription: ${result.description || 'N/A'}`;

  return (
    <BaseCard
      item={result}
      index={idx}
      renderModalContent={(item) => <RailjackModalContent item={item} />}
      altTextTemplate={altTextTemplate}
      ariaLabel={`Railjack: ${result.name}`}
      useCdnImages={true}
    />
  );
};

export default RailjackCard;
