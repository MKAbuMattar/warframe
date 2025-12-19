import {Fragment} from 'react';

const MeatDecorator = ({title, description}) => {
  return (
    <Fragment>
      <title>{title} | Warframe Info</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | Warframe Info`} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={`${title} | Warframe Info`} />
      <meta name="twitter:description" content={description} />
    </Fragment>
  );
};

export default MeatDecorator;
