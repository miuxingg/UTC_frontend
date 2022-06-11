import React from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { IShareProps } from '../type';

const ShareFacebook: React.FC<IShareProps> = ({ url }) => {
  return (
    <FacebookShareButton
      url={url}
      quote="hello world"
      hashtag={'#BookStore'}
      // description={'aiueo'}
      className="Demo__some-network__share-button"
    >
      <i className="icon-social-facebook icons" />
    </FacebookShareButton>
  );
};

export default ShareFacebook;
