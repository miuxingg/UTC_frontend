import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../../components/templates/Layout';
import { REVIEW_COUNT } from '../../../configs';
import ProductDetailContainer from '../../../containers/ProductDetails';
import { apiSdk } from '../../../libs/apis';
import { getServerSideWithPublicRoute } from '../../../libs/hocs/getServerSideWithPublicRoute';
import { bookById, cloudtag, getBookById } from '../../../redux/book';
import { bookDetailSelector } from '../../../redux/book/selectors';
import { getAllCategory } from '../../../redux/categories';
import { getAllReviewOnBook } from '../../../redux/review';

const ProductDetail: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { id } = router.query;
  const bookDetail = useSelector(bookDetailSelector);

  useEffect(() => {
    if (id) {
      dispatch(bookById(id as string));
      dispatch(getAllCategory());
      dispatch(cloudtag());
      dispatch(
        getAllReviewOnBook({
          idBook: String(id),
          queries: { limit: REVIEW_COUNT },
        }),
      );
    }
  }, [dispatch, id]);
  return (
    <>
      <Head>
        <title>{t('header.shop')}</title>
        <meta property="og:title" content={bookDetail.thumbnail} />
      </Head>
      <Layout>
        <ProductDetailContainer />
      </Layout>
    </>
  );
};

export const getServerSideProps = getServerSideWithPublicRoute(
  async (ctx, store) => {
    const { id } = ctx.query;
    const bookById = await apiSdk.bookApis.getBookById(id as string);
    store.dispatch(getBookById(bookById));
    return {
      props: {},
    };
  },
);

export default ProductDetail;
