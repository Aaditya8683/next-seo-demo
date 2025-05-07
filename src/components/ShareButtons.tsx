"use client"

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

interface ShareButtonsProps {
  url: string;
  title: string;
  description: string;
}

const ShareButtons = ({ url, title, description }: ShareButtonsProps) => {
  return (
    <div className="flex space-x-4">
      <FacebookShareButton
        url={url}
        hashtag="#shop" // You can pass hashtag if supported
        className="flex items-center justify-center"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        className="flex items-center justify-center"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton
        url={url}
        className="flex items-center justify-center"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
};

export default ShareButtons;
