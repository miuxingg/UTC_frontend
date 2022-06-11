import React from 'react';
import { TwitterShareButton } from 'react-share';
import { IShareProps } from '../type';

const ShareTwitter: React.FC<IShareProps> = ({ url }) => {
  return (
    <TwitterShareButton
      title={'Share'}
      url={url}
      hashtags={['BookStore', 'UTC']}
    >
      <i className="icon-social-twitter icons" />
    </TwitterShareButton>
  );
};

export default ShareTwitter;
