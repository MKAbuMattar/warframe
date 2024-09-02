import {Fragment} from 'react';
import {NextSeo} from 'next-seo';

const MeatDecorator = ({title, description}) => {
  return (
    <Fragment>
      <NextSeo title={title} description={description} />
    </Fragment>
  );
};

export default MeatDecorator;
