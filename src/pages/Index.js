import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeaders1 from '../components/headers/IndexSectionHeaders1';
import IndexSectionCallToAction2 from '../components/call-to-action/IndexSectionCallToAction2';
import IndexSectionCallToAction3 from '../components/call-to-action/IndexSectionCallToAction3';
import IndexSectionCallToAction4 from '../components/call-to-action/IndexSectionCallToAction4';
import IndexSectionBlog5 from '../components/blog/IndexSectionBlog5';
import IndexSectionTestimonials6 from '../components/testimonials/IndexSectionTestimonials6';
import IndexSectionApplications7 from '../components/applications/IndexSectionApplications7';
import IndexSectionFooters8 from '../components/footers/IndexSectionFooters8';

const meta = {
  title: 'wyjade.pl',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeaders1 />
      <IndexSectionCallToAction2 />
      <IndexSectionCallToAction3 />
      <IndexSectionCallToAction4 />
      <IndexSectionBlog5 />
      <IndexSectionTestimonials6 />
      <IndexSectionApplications7 />
      <IndexSectionFooters8 />
    </React.Fragment>
  );
}

