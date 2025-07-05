export interface SocialShareData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export const getShareData = async (id: string): Promise<SocialShareData> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    id,
    title: `Amazing Content ${id}`,
    description: `This is a demo of how to share content ${id} on social media with proper previews.`,
    imageUrl: `https://picsum.photos/seed/${id}/1200/630`,
    url: `${'https://next-seo-demo-eight.vercel.app/product'}/share/${id}`
  };
};

export const getAllShareItems = async (): Promise<SocialShareData[]> => {
  const items = [];
  for (let i = 1; i <= 5; i++) {
    items.push(await getShareData(i.toString()));
  }
  return items;
};