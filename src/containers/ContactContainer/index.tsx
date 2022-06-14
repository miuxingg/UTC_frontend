import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AutoPlay from '../../components/elements/SliderBanner';
import { BookStoreInfomation } from '../../configs';
import GoogleMap from './GoogleMap';

const key = 'AIzaSyD9rLRWMcSrWloMWSVYRW9uiooequJQWSk';

// const Mailto = ({ email, subject, body, children }) => {
//   return (
//     <a
//       href={`mailto:${email}?subject=${
//         encodeURIComponent(subject) || ''
//       }&body=${encodeURIComponent(body) || ''}`}
//     >
//       {children}
//     </a>
//   );
// };

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
              <div className="col-md-12">
                {/* <div id="googleMap" /> */}
                {/* <GoogleMap
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={
                    <div
                      style={{
                        height: `90vh`,
                        margin: `auto`,
                        border: '2px solid black',
                      }}
                    />
                  }
                  mapElement={<div style={{ height: `100%` }} />}
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="contact-form-wrap">
                <h2 className="contact__title">{t('contact.get-in-touch')}</h2>

                {/* <div className="single-contact-form space-between">
                  <input
                    type="text"
                    name="firstname"
                    placeholder={t('check-out.shipping.first-name')}
                  />
                  <input
                    type="text"
                    name="lastname"
                    placeholder={t('check-out.shipping.last-name')}
                  />
                </div>
                <div className="single-contact-form space-between">
                  <input
                    type="email"
                    name="email"
                    placeholder={t('check-out.shipping.emails')}
                  />
                </div> */}
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
                    Feedback
                  </a>
                </div>
              </div>
              <div className="form-output">
                <p className="form-messege"></p>
              </div>
            </div>
            <div className="col-lg-4 col-12 md-mt-40 sm-mt-40">
              <div className="wn__address">
                {/* <h2 className="contact__title">Get office info.</h2>
                <p>
                  Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc putamus parum claram, anteposuerit
                  litterarum formas humanitatis per seacula quarta decima et
                  quinta decima.{' '}
                </p> */}
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
                  {/* <div className="single__address">
                    <i className="icon-globe icons" />
                    <div className="content">
                      <span>website address:</span>
                      <p>716-298-1822</p>
                    </div>
                  </div> */}
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
