import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import {PrimaryWeaponModalContent} from '../BaseCard/ModalContentRenderers';

const SentinelWeaponCard = ({result, idx}) => {
  const altTextTemplate = `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`;

  return (
    <BaseCard
      item={result}
      index={idx}
      renderModalContent={(item) => <PrimaryWeaponModalContent item={item} />}
      altTextTemplate={altTextTemplate}
      ariaLabel={`Sentinel weapon: ${result.name}`}
      useCdnImages={true}
    />
  );
};

export default SentinelWeaponCard;
