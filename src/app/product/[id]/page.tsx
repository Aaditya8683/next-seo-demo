// src/app/product/[id]/page.tsx
import { getProduct } from '@/lib/products';
import ShareButtons from '@/components/ShareButtons';
import { Metadata } from 'next';
import HelmetProviderWrapper from '@/components/HelmetProviderWrapper';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await getProduct(params.id);

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      url: `https://next-seo-demo-project.vercel.app/product/${product.id}`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  return (
    <HelmetProviderWrapper>
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-80 object-contain"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {product.rating.rate} ★ ({product.rating.count})
              </span>
              <span className="ml-2 text-gray-500">{product.category}</span>
            </div>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <p className="text-3xl font-bold text-gray-900 mb-6">${product.price}</p>

            <ShareButtons
              url={`https://next-seo-demo-project.vercel.app/product/${product.id}`}
              title={product.title}
              description={`${product.description} Get it now for only $${product.price}`}
            />
          </div>
        </div>
      </div>
    </HelmetProviderWrapper>
  );
}
