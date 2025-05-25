import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import {SimpleModalContent} from '../BaseCard/ModalContentRenderers';

const GlyphCard = ({result, idx}) => {
  const altTextTemplate = `Name: ${result.name}\nDescription: ${result.description || 'N/A'}`;

  return (
    <BaseCard
      item={result}
      index={idx}
      renderModalContent={(item) => <SimpleModalContent item={item} />}
      altTextTemplate={altTextTemplate}
      ariaLabel={`Glyph: ${result.name}`}
    />
  );
};

export default GlyphCard;
