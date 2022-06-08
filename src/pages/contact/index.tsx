import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/templates/Layout';
import ContactContainer from '../../containers/ContactContainer';

const Contact: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('header.contact')}</title>
      </Head>
      <Layout>
        <ContactContainer />
      </Layout>
    </>
  );
};

export default Contact;
