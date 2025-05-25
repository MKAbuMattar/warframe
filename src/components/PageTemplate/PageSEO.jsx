import {Fragment} from 'react';
import MeatDecorator from '../../util/MeatDecorator/MeatDecorator';

/**
 * Reusable SEO wrapper for pages
 */
const PageSEO = ({title, description, children}) => (
  <Fragment>
    <MeatDecorator title={title} description={description} />
    {children}
  </Fragment>
);

export default PageSEO;
