import Link from 'next/link';

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: 'Handwoven Ceramic Bowl',
      artist: 'Sarah Martinez',
      price: 45.00,
      rating: 5,
      category: 'Pottery',
      image: '/api/placeholder/400/300',
      featured: true,
    },
    {
      id: 2,
      name: 'Sterling Silver Pendant',
      artist: 'Michael Chen',
      price: 89.99,
      rating: 5,
      category: 'Jewelry',
      image: '/api/placeholder/400/300',
    },
    {
      id: 3,
      name: 'Organic Cotton Scarf',
      artist: 'Emma Thompson',
      price: 32.50,
      rating: 4,
      category: 'Textiles',
      image: '/api/placeholder/400/300',
    },
    {
      id: 4,
      name: 'Reclaimed Wood Frame',
      artist: 'David Rodriguez',
      price: 56.00,
      rating: 5,
      category: 'Woodwork',
      image: '/api/placeholder/400/300',
    },
    {
      id: 5,
      name: 'Hand-blown Glass Vase',
      artist: 'Lisa Park',
      price: 78.00,
      rating: 5,
      category: 'Glass',
      image: '/api/placeholder/400/300',
    },
    {
      id: 6,
      name: 'Leather Journal Cover',
      artist: 'James Wilson',
      price: 42.00,
      rating: 4,
      category: 'Leather',
      image: '/api/placeholder/400/300',
    },
  ];

  const categories = ['All', 'Pottery', 'Jewelry', 'Textiles', 'Woodwork', 'Glass', 'Leather'];
  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest', 'Best Rated'];

  return (
    <div className="container section-padding">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="heading-1 mb-4">Handcrafted Products</h1>
        <p className="body-large max-w-2xl mx-auto">
          Discover unique, handmade items created by talented artisans from around the world. 
          Each piece tells a story and brings authentic craftsmanship to your life.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-soft border border-neutral-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Search Bar */}
          <div className="flex-1 w-full lg:max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="input pr-10"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="w-full lg:w-auto">
            <select className="select min-w-[200px]">
              {sortOptions.map((option) => (
                <option key={option} value={option.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="product-card group"
          >
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-t-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">🎨</div>
                  <span className="body-small text-neutral-500">Product Image</span>
                </div>
              </div>
              
              {/* Featured Badge */}
              {product.featured && (
                <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                  Featured
                </div>
              )}
              
              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
                <svg className="w-5 h-5 text-neutral-400 hover:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-2">
                <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              
              <h3 className="heading-4 mb-2 group-hover:text-primary-600 transition-colors">
                {product.name}
              </h3>
              
              <p className="body-small text-neutral-600 mb-3">by {product.artist}</p>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < product.rating ? 'fill-current' : 'text-neutral-300'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="body-small text-neutral-600 ml-2">({product.rating}.0)</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="heading-4 text-primary-600">${product.price}</span>
                <button className="btn-ghost text-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Quick View
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="btn-outline px-8 py-3">
          Load More Products
        </button>
        <p className="body-small text-neutral-600 mt-4">
          Showing 6 of 124 products
        </p>
      </div>
    </div>
  );
};

export default ProductsPage;