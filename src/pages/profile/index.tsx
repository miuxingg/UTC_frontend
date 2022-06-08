import Head from 'next/head';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/templates/Layout';
import ProfileContainer from '../../containers/ProfileContainer';
import { apiSdk } from '../../libs/apis';
import { getServerSideWithProtectedRoute } from '../../libs/hocs/getServerSideWithProtectedRoute';
import {
  getProvices,
  getDistrictsThunk,
  getWardsThunk,
} from '../../redux/address';
import { setProfile } from '../../redux/auth';

const Profile: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProvices());
    dispatch(getDistrictsThunk(1));
    dispatch(getWardsThunk(1));
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>{t('header.profile.profile')}</title>
      </Head>
      <Layout>
        <ProfileContainer />
      </Layout>
    </>
  );
};

export const getServerSideProps = getServerSideWithProtectedRoute(
  async (ctx, store) => {
    const profile = await apiSdk.authApis.getProfile();
    store.dispatch(setProfile(profile));
    return {
      props: {},
    };
  },
);

export default Profile;
