import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AutoPlay from '../../components/elements/SliderBanner';
import { BookStoreInfomation } from '../../configs';

const ContactContainer: React.FC = () => {
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <div>
      <AutoPlay src={['images/bg/banner-checkout.png']} />
      <section className="wn_contact_area bg--white pt--80 pb--80">
        <div className="google__map pb--80">
          <div className="container">
            <div className="row">
              <div className="col-md-12"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="contact-form-wrap">
                <h2 className="contact__title">{t('contact.get-in-touch')}</h2>
                <div className="single-contact-form">
                  <input
                    type="text"
                    name="subject"
                    placeholder={t('contact.subject')}
                    onChange={(e: any) => setTitle(e.target.value)}
                  />
                </div>
                <div className="single-contact-form message">
                  <textarea
                    name="message"
                    placeholder={t('contact.message')}
                    defaultValue={''}
                    onChange={(e: any) => setContent(e.target.value)}
                    style={{ resize: 'none' }}
                  />
                </div>
                <div className="contact-btn">
                  <a
                    href={`mailto:${BookStoreInfomation.email}?subject=${title}&body=${content}`}
                    style={{
                      background: 'rgba(0, 0, 0, 0) none repeat scroll 0 0',
                      border: '2px solid #333',
                      boxShadow: 'none',
                      color: '#333',
                      display: 'inline-block',
                      fontSize: '12px',
                      fontWeight: 700,
                      lineHeight: '34px',
                      padding: '2px 20px 0',
                      textShadow: 'none',
                      textTransform: 'uppercase',
                      transition: 'all 0.4s ease 0s',
                    }}
                  >
                    {t('login.forgot-password-button')}
                  </a>
                </div>
              </div>
              <div className="form-output">
                <p className="form-messege"></p>
              </div>
            </div>
            <div className="col-lg-4 col-12 md-mt-40 sm-mt-40">
              <div className="wn__address">
                <div className="wn__addres__wreapper">
                  <div className="single__address">
                    <i className="icon-location-pin icons" />
                    <div className="content">
                      <span>{t('checkout-history.table.address')}:</span>
                      <p>{BookStoreInfomation.address}</p>
                    </div>
                  </div>
                  <div className="single__address">
                    <i className="icon-phone icons" />
                    <div className="content">
                      <span>{t('check-out.shipping.phone')}:</span>
                      <p>{BookStoreInfomation.phone}</p>
                    </div>
                  </div>
                  <div className="single__address">
                    <i className="icon-envelope icons" />
                    <div className="content">
                      <span>{t('check-out.shipping.emails')}:</span>
                      <p>{BookStoreInfomation.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactContainer;
