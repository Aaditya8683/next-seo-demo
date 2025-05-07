'use client';

import ShareButtons from './ShareButtons';

interface Props {
  url: string;
  title: string;
  description: string;
}

export default function ClientShareButtons({ url, title, description }: Props) {
  return <ShareButtons url={url} title={title} description={description} />;
}
