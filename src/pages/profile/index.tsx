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
import { profileSelector } from '../../redux/auth/selectors';

const Profile: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector);

  useEffect(() => {
    dispatch(getProvices());
    dispatch(getDistrictsThunk(profile?.province?.code || 1));
    dispatch(getWardsThunk(profile?.district?.code || 1));
  }, [dispatch, profile]);
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
