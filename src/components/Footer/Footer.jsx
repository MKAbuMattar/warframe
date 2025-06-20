import {Fragment} from 'react';
import Link from 'next/link';
import {FooterSection} from './Style';

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Fragment>
      <FooterSection>
        All Copyrights Reserved © &nbsp;
        {getYear() >= '2019' ? `2019 - ${getYear()}` : getYear()}, Made With ❤
        & a lot ☕ By &nbsp;
        <Link href="https://mkabumattar.github.io/" target="__blank">
          Mohammad Abu Mattar
        </Link>
      </FooterSection>
    </Fragment>
  );
};

export default Footer;
