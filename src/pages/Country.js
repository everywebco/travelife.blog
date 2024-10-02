import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CountrySectionHeaders1 from '../components/headers/CountrySectionHeaders1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Country() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <CountrySectionHeaders1 />
    </React.Fragment>
  );
}

