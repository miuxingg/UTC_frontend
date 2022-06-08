import Head from 'next/head';
import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/templates/Layout';
import CartContainer from '../../containers/CartContainers';
import { getServerSideWithPublicRoute } from '../../libs/hocs/getServerSideWithPublicRoute';
import { authSelector } from '../../redux/auth/selectors';
import { getAllCart } from '../../redux/cart';

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isAuthenticated = useSelector(authSelector);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getAllCart({ limit: 20 }));
    }
  }, [dispatch, isAuthenticated]);
  return (
    <>
      <Head>
        <title>{t('header.cart')}</title>
      </Head>
      <Layout>
        <CartContainer />
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
export default CartPage;
