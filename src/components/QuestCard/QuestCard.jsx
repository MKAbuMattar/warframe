import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import {QuestModalContent} from '../BaseCard/ModalContentRenderers';

const QuestCard = ({result, idx}) => {
  const altTextTemplate = `Name: ${result.name}\nDescription: ${result.description || 'N/A'}`;

  return (
    <BaseCard
      item={result}
      index={idx}
      renderModalContent={(item) => <QuestModalContent item={item} />}
      altTextTemplate={altTextTemplate}
      ariaLabel={`Quest: ${result.name}`}
    />
  );
};

export default QuestCard;
