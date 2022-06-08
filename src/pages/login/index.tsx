import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/templates/Layout';
import LoginContainer from '../../containers/AuthContainer/auth/login';
import { getServerSideWithPublicRoute } from '../../libs/hocs/getServerSideWithPublicRoute';

const Register: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('header.profile.login')}</title>
      </Head>
      <Layout>
        {/* <LoginContainer /> */}
        <LoginContainer />
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
