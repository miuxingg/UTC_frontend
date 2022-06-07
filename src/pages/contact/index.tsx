import { NextPage } from 'next';
import React from 'react';
import Layout from '../../components/templates/Layout';
import ContactContainer from '../../containers/ContactContainer';

const Contact: NextPage = () => {
  return (
    <Layout>
      <ContactContainer />
    </Layout>
  );
};

export default Contact;
