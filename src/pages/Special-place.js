import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SpecialPlaceSectionHeaders5 from '../components/headers/SpecialPlaceSectionHeaders5';
import SpecialPlaceSectionLogoClouds9 from '../components/logo-clouds/SpecialPlaceSectionLogoClouds9';
import SpecialPlaceSectionFeatures7 from '../components/features/SpecialPlaceSectionFeatures7';
import SpecialPlaceSectionStats11 from '../components/stats/SpecialPlaceSectionStats11';
import SpecialPlaceSectionContent6 from '../components/content/SpecialPlaceSectionContent6';
import SpecialPlaceSectionFeatures8 from '../components/features/SpecialPlaceSectionFeatures8';
import SpecialPlaceSectionContacts3 from '../components/contacts/SpecialPlaceSectionContacts3';
import SpecialPlaceSectionPortfolio4 from '../components/portfolio/SpecialPlaceSectionPortfolio4';
import SpecialPlaceSectionFaqs10 from '../components/faqs/SpecialPlaceSectionFaqs10';
import SpecialPlaceSectionFooters12 from '../components/footers/SpecialPlaceSectionFooters12';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function SpecialPlace() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <SpecialPlaceSectionHeaders5 />
      <SpecialPlaceSectionLogoClouds9 />
      <SpecialPlaceSectionFeatures7 />
      <SpecialPlaceSectionStats11 />
      <SpecialPlaceSectionContent6 />
      <SpecialPlaceSectionFeatures8 />
      <SpecialPlaceSectionContacts3 />
      <SpecialPlaceSectionPortfolio4 />
      <SpecialPlaceSectionFaqs10 />
      <SpecialPlaceSectionFooters12 />
    </React.Fragment>
  );
}

