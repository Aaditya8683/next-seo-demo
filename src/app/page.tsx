// src/app/page.tsx

export const dynamic = 'force-dynamic'; // 👈 Makes this page dynamic to allow no-store fetch

import Link from "next/link";
import { getProducts } from "@/lib/products";
import ClientShareButtons from "@/components/ClientShareButtons";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain p-4 bg-white"
              />
            </Link>
            <div className="p-4">
              <Link href={`/product/${product.id}`}>
                <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">
                  {product.title}
                </h2>
              </Link>
              <p className="text-gray-600 mb-3 line-clamp-2">
                {product.description}
              </p>
              <p className="text-lg font-bold mb-4">${product.price}</p>

              <ClientShareButtons
                url={`https://next-seo-demo-eight.vercel.app/product/${product.id}`}
                title={product.title}
                description={`${product.description} Only $${product.price}`}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
