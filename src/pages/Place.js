import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PlaceSectionHeaders5 from '../components/headers/PlaceSectionHeaders5';
import PlaceSectionLogoClouds9 from '../components/logo-clouds/PlaceSectionLogoClouds9';
import PlaceSectionFeatures7 from '../components/features/PlaceSectionFeatures7';
import PlaceSectionStats11 from '../components/stats/PlaceSectionStats11';
import PlaceSectionContent6 from '../components/content/PlaceSectionContent6';
import PlaceSectionFeatures8 from '../components/features/PlaceSectionFeatures8';
import PlaceSectionContacts3 from '../components/contacts/PlaceSectionContacts3';
import PlaceSectionPortfolio4 from '../components/portfolio/PlaceSectionPortfolio4';
import PlaceSectionFaqs10 from '../components/faqs/PlaceSectionFaqs10';
import PlaceSectionFooters12 from '../components/footers/PlaceSectionFooters12';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Place() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <PlaceSectionHeaders5 />
      <PlaceSectionLogoClouds9 />
      <PlaceSectionFeatures7 />
      <PlaceSectionStats11 />
      <PlaceSectionContent6 />
      <PlaceSectionFeatures8 />
      <PlaceSectionContacts3 />
      <PlaceSectionPortfolio4 />
      <PlaceSectionFaqs10 />
      <PlaceSectionFooters12 />
    </React.Fragment>
  );
}

