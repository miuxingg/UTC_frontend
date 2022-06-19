import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/templates/Layout';
import ContactContainer from '../../containers/ContactContainer';
import { apiSdk } from '../../libs/apis';
import { getServerSideWithPublicRoute } from '../../libs/hocs/getServerSideWithPublicRoute';
import { getConfig } from '../../redux/config';

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
export const getServerSideProps = getServerSideWithPublicRoute(
  async (_, store) => {
    const config = await apiSdk.blogApi.getAllBlog();
    store.dispatch(getConfig(config));
    return {
      props: {},
    };
  },
);
export default Contact;
