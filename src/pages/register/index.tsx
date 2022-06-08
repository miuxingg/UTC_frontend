import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/templates/Layout';
import { RegisterContainer } from '../../containers/AuthContainer/auth/register';
import { getServerSideWithPublicRoute } from '../../libs/hocs/getServerSideWithPublicRoute';

const Register: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('header.profile.register')}</title>
      </Head>
      <Layout>
        {/* <RegisterContainer /> */}
        <RegisterContainer />
      </Layout>
    </>
  );
};

export const getServerSideProps = getServerSideWithPublicRoute(
  async (_, store) => {
    return {
      props: {},
    };
  },
);

export default Register;
