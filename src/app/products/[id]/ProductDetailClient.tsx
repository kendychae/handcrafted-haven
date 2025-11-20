'use client';

import Link from 'next/link';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { productsData } from '@/data/products';
interface ProductDetailClientProps {
  productId: string;
}

export default function ProductDetailClient({ productId }: ProductDetailClientProps) {
  const product = productsData.find(p => p.id === parseInt(productId));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();
  
  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        artist: product.artist,
        price: product.price,
        image: product.images[0],
        category: product.category,
      });
    }
    
    // Show success feedback
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
    setQuantity(1); // Reset quantity
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-neutral-600 hover:text-primary-700">Home</Link></li>
            <li><span className="text-neutral-400">›</span></li>
            <li><Link href="/products" className="text-neutral-600 hover:text-primary-700">Products</Link></li>
            <li><span className="text-neutral-400">›</span></li>
            <li><Link href={`/categories/${product.category.toLowerCase()}`} className="text-neutral-600 hover:text-primary-700">{product.category}</Link></li>
            <li><span className="text-neutral-400">›</span></li>
            <li><span className="text-neutral-800 font-medium">{product.name}</span></li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-sm">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? 'border-primary-700' 
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="inline-block bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full mb-4">
                {product.category}
              </div>
              <h1 className="heading-1 mb-4">{product.name}</h1>
              <Link 
                href={`/artisans/${product.artistId}`}
                className="text-lg text-primary-700 hover:text-primary-800 font-medium"
              >
                by {product.artist}
              </Link>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < product.rating ? 'fill-current' : 'text-neutral-300'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-neutral-700">({product.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-primary-700">
              ${product.price.toFixed(2)}
            </div>

            {/* Description */}
            <div className="prose prose-neutral">
              <p className="text-neutral-800 text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Story */}
            {product.story && (
              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">Artisan's Story</h3>
                <p className="text-neutral-700">{product.story}</p>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="font-medium text-neutral-800">Quantity:</label>
                <div className="flex items-center border border-neutral-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-neutral-100 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                    className="p-2 hover:bg-neutral-100 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                <span className="text-sm text-neutral-600">
                  {product.stockCount} in stock
                </span>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="btn-primary flex-1 py-4 text-lg"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`btn-outline p-4 transition-all duration-300 ${
                    isWishlisted ? 'bg-red-50 border-red-500 text-red-500 scale-105' : ''
                  }`}
                >
                  <svg 
                    className={`w-6 h-6 transition-colors duration-300 ${
                      isWishlisted ? 'fill-current' : ''
                    }`} 
                    fill={isWishlisted ? 'currentColor' : 'none'} 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t border-neutral-200 pt-6 space-y-4">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Materials</h3>
                <ul className="list-disc list-inside text-neutral-700 space-y-1">
                  {product.materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Dimensions</h3>
                <p className="text-neutral-700">{product.dimensions}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Care Instructions</h3>
                <p className="text-neutral-700">{product.careInstructions}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Shipping</h3>
                <p className="text-neutral-700">{product.shippingInfo}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t border-neutral-200 pt-12">
          <h2 className="heading-2 mb-8 text-center">More from {product.artist}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* This would show other products from the same artist */}
            <div className="text-center py-12 col-span-full">
              <p className="text-neutral-600">More products from this artisan coming soon!</p>
              <Link href={`/artisans/${product.artistId}`} className="btn-primary mt-4">
                View Artisan Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailClient;