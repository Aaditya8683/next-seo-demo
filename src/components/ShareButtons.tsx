// src/components/ShareButtons.tsx
'use client';

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

type ShareButtonsProps = {
  url: string;
  title: string;
  description: string;
};

export default function ShareButtons({ url, title, description }: ShareButtonsProps) {
  return (
    <div className="flex gap-3 mt-4">
      <FacebookShareButton
        url={url}
        quote={`${title}\n\n${description}`}
        hashtag="#shop"
        className="flex flex-col items-center"
      >
        <FacebookIcon size={32} round />
        <span className="text-xs mt-1">Facebook</span>
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={`${title} - ${description.substring(0, 100)}`}
        via="yourstore"
        hashtags={['shop', 'deal']}
        className="flex flex-col items-center"
      >
        <TwitterIcon size={32} round />
        <span className="text-xs mt-1">Twitter</span>
      </TwitterShareButton>

      <WhatsappShareButton
        url={url}
        title={`${title} - ${description.substring(0, 100)}`}
        separator="\n\n"
        className="flex flex-col items-center"
      >
        <WhatsappIcon size={32} round />
        <span className="text-xs mt-1">WhatsApp</span>
      </WhatsappShareButton>
    </div>
  );
}