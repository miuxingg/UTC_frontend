import React from 'react';
import Layout from '../../components/templates/Layout';
import CheckoutContainer from '../../containers/CheckoutContainer';
import StripeContainerWrapper from '../../containers/StripeContainer';
import { apiSdk } from '../../libs/apis';
import { getServerSideWithPublicRoute } from '../../libs/hocs/getServerSideWithPublicRoute';
import {
  getAllDistricts,
  getAllProvinces,
  getAllWards,
} from '../../redux/address';
import { setProfile } from '../../redux/auth';
import { getvoucher } from '../../redux/voucher';

const CheckOutPage: React.FC = () => {
  return (
    <Layout>
      <StripeContainerWrapper>
        <CheckoutContainer />
      </StripeContainerWrapper>
    </Layout>
  );
};

export const getServerSideProps = getServerSideWithPublicRoute(
  async (_, store) => {
    const [profile, vouchers, provinces, districts, wards] = await Promise.all([
      apiSdk.authApis.getProfile(),
      apiSdk.voucherApi.getAllVoucher(),
      apiSdk.addressApis.getProvices(),
      apiSdk.addressApis.getDistricts(1),
      apiSdk.addressApis.getWards(1),
    ]);
    store.dispatch(setProfile(profile));
    store.dispatch(getvoucher(vouchers));
    store.dispatch(getAllProvinces(provinces));
    store.dispatch(getAllDistricts(districts));
    store.dispatch(getAllWards(wards));
    return {
      props: {},
    };
  },
);
export default CheckOutPage;
