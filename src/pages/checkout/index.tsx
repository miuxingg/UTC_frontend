import Head from 'next/head';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/templates/Layout';
import CheckoutContainer from '../../containers/CheckoutContainer';
import StripeContainerWrapper from '../../containers/StripeContainer';
import { apiSdk } from '../../libs/apis';
import { getServerSideWithPublicRoute } from '../../libs/hocs/getServerSideWithPublicRoute';
import {
  getAllDistricts,
  getAllProvinces,
  getAllWards,
  getDistrictsThunk,
  getProvices,
  getWardsThunk,
} from '../../redux/address';
import { setProfile } from '../../redux/auth';
import { profileSelector } from '../../redux/auth/selectors';
import { getConfig } from '../../redux/config';
import { getvoucher } from '../../redux/voucher';

const CheckOutPage: React.FC = () => {
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
        <title>{t('header.checkout')}</title>
      </Head>
      <Layout>
        <StripeContainerWrapper>
          <CheckoutContainer />
        </StripeContainerWrapper>
      </Layout>
    </>
  );
};

export const getServerSideProps = getServerSideWithPublicRoute(
  async (_, store) => {
    const [profile, vouchers, provinces, districts, wards, config] =
      await Promise.all([
        apiSdk.authApis.getProfile(),
        apiSdk.voucherApi.getAllVoucher(),
        apiSdk.addressApis.getProvices(),
        apiSdk.addressApis.getDistricts(1),
        apiSdk.addressApis.getWards(1),
        apiSdk.blogApi.getAllBlog(),
      ]);
    store.dispatch(setProfile(profile));
    store.dispatch(getvoucher(vouchers));
    store.dispatch(getAllProvinces(provinces));
    store.dispatch(getAllDistricts(districts));
    store.dispatch(getAllWards(wards));
    store.dispatch(getConfig(config));
    return {
      props: {},
    };
  },
);
export default CheckOutPage;
