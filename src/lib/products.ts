// src/lib/products.ts
export async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Failed to fetch products');
    return await res.json();
  } catch (error) {
    console.error('getProducts error:', error);
    return []; // Return empty list as fallback
  }
}

export async function getProduct(id: string) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error('Failed to fetch product');
    return await res.json();
  } catch (error) {
    console.error(`getProduct error for ID ${id}:`, error);
    // Return a fallback product
    return {
      id: parseInt(id, 10),
      title: 'Product Not Found',
      price: 0,
      description: 'No description available.',
      category: 'unknown',
      image: '/fallback-image.jpg', // Optional: add a default image to public folder
      rating: {
        rate: 0,
        count: 0,
      },
    };
  }
}

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
