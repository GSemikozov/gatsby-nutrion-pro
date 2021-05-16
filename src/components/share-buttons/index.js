import React from 'react';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

import styles from './share-buttons.module.css';

export const ShareButtons = ({ title, url, twitterHandle, tags }) => (
  <div className={styles.shareButtons}>
    <FacebookShareButton url={url}>
      <FacebookIcon size={40} round={true} />
    </FacebookShareButton>

    <TwitterShareButton
      url={url}
      title={title}
      via={twitterHandle}
      hashtags={tags}
    >
      <TwitterIcon size={40} round={true} />
    </TwitterShareButton>
  </div>
)
