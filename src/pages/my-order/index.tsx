import Head from 'next/head';
import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Layout from '../../components/templates/Layout';
import CheckoutHistoryContainer from '../../containers/CheckoutHistoryContainer';
import { IOrderStatus } from '../../libs/apis/order/types';
import { getOrderByStatus } from '../../redux/order';

const CheckoutHistort: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getOrderByStatus({ status: IOrderStatus.Pending }));
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>{t('header.profile.history')}</title>
      </Head>
      <Layout>
        <CheckoutHistoryContainer />
      </Layout>
    </>
  );
};

export default CheckoutHistort;
