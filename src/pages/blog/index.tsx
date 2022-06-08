import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LoginContainer from '../../containers/AuthContainer/auth/login';

const Blog: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('header.blog')}</title>
      </Head>
      <LoginContainer />
    </>
  );
};

export default Blog;
