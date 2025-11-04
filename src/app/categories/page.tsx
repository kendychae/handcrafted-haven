import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Categories - Handcrafted Haven',
  description: 'Explore our diverse categories of handmade goods, from jewelry and ceramics to textiles and woodwork.',
};

const categories = [
  {
    id: 1,
    name: 'Jewelry & Accessories',
    description: 'Handcrafted rings, necklaces, earrings, and unique accessories',
    image: '/api/placeholder/400/300',
    productCount: 145,
    color: 'from-rose-400 to-pink-500'
  },
  {
    id: 2,
    name: 'Ceramics & Pottery',
    description: 'Beautiful handmade bowls, vases, mugs, and decorative pieces',
    image: '/api/placeholder/400/300',
    productCount: 89,
    color: 'from-amber-400 to-orange-500'
  },
  {
    id: 3,
    name: 'Textiles & Fiber Arts',
    description: 'Woven goods, knitted items, quilts, and fabric creations',
    image: '/api/placeholder/400/300',
    productCount: 67,
    color: 'from-blue-400 to-indigo-500'
  },
  {
    id: 4,
    name: 'Woodwork & Furniture',
    description: 'Custom furniture, cutting boards, decorative wood pieces',
    image: '/api/placeholder/400/300',
    productCount: 52,
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 5,
    name: 'Art & Paintings',
    description: 'Original artwork, prints, illustrations, and wall art',
    image: '/api/placeholder/400/300',
    productCount: 123,
    color: 'from-purple-400 to-violet-500'
  },
  {
    id: 6,
    name: 'Home & Garden',
    description: 'Decorative items, planters, candles, and home essentials',
    image: '/api/placeholder/400/300',
    productCount: 78,
    color: 'from-teal-400 to-cyan-500'
  },
  {
    id: 7,
    name: 'Leather Goods',
    description: 'Handcrafted bags, wallets, belts, and leather accessories',
    image: '/api/placeholder/400/300',
    productCount: 34,
    color: 'from-yellow-400 to-amber-500'
  },
  {
    id: 8,
    name: 'Glass & Metalwork',
    description: 'Blown glass, stained glass, metal sculptures, and jewelry',
    image: '/api/placeholder/400/300',
    productCount: 41,
    color: 'from-slate-400 to-gray-500'
  }
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Browse Categories
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover unique handmade goods across our diverse categories. Each piece tells a story of craftsmanship and creativity.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${encodeURIComponent(category.name)}`}
              className="group block"
            >
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
                {/* Category Image with Gradient Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold text-center px-4">
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Category Info */}
                <div className="p-6">
                  <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-500">
                      {category.productCount} products
                    </span>
                    <span className="text-primary-600 text-sm font-medium group-hover:text-primary-700">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Popular Categories Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-neutral-900 text-center mb-8">
            Most Popular This Month
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.slice(0, 3).map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${encodeURIComponent(category.name)}`}
                className="group block bg-white rounded-lg shadow-sm border border-neutral-200 p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex-shrink-0`}></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600">
                      {category.name}
                    </h3>
                    <p className="text-sm text-neutral-500">{category.productCount} products</p>
                  </div>
                  <span className="text-primary-600 group-hover:text-primary-700">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-neutral-600 mb-6">
            Browse all our products or contact our artisans directly for custom requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Browse All Products
            </Link>
            <Link
              href="/artisans"
              className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors"
            >
              Meet Our Artisans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}