import React from 'react';
import { useTranslation } from 'react-i18next';

const NewsLetter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      className="wn__newsletter__area"
      style={{
        backgroundImage: `url(images/bg/bg2.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="container">
        <div
          className="row"
          style={{
            justifyContent: 'center',
          }}
        >
          <div
            className="col-lg-7 offset-lg-5 col-md-12 col-12 ptb--150"
            style={{ margin: '0px' }}
          >
            <div className="section__title text-center">
              <h2>BookStore</h2>
            </div>
            <div className="newsletter__block text-center">
              <p>{t('thank-to')}</p>
              {/* <form action="#">
                <div className="newsletter__box">
                  <input type="email" placeholder="Enter your e-mail" />
                  <button>Subscribe</button>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
