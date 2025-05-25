import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import {MeleeWeaponModalContent} from '../BaseCard/ModalContentRenderers';

const MeleeCard = ({result, idx}) => {
  const altTextTemplate = `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`;

  return (
    <BaseCard
      item={result}
      index={idx}
      renderModalContent={(item) => <MeleeWeaponModalContent item={item} />}
      altTextTemplate={altTextTemplate}
      ariaLabel={`Melee weapon: ${result.name}`}
    />
  );
};

export default MeleeCard;
