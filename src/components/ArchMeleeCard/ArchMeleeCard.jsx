import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import {MeleeWeaponModalContent} from '../BaseCard/ModalContentRenderers';

const ArchMeleeCard = ({result, idx}) => {
  const altTextTemplate = `Name: ${result.name}\nDescription: ${result.description || 'N/A'}\nPassive: ${result.passiveDescription || 'N/A'}`;

  return (
    <BaseCard
      item={result}
      index={idx}
      renderModalContent={(item) => <MeleeWeaponModalContent item={item} />}
      altTextTemplate={altTextTemplate}
      ariaLabel={`Archwing melee: ${result.name}`}
    />
  );
};

export default ArchMeleeCard;
