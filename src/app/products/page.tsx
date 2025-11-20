'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: 'Ceramic Bowl',
      artist: 'Sarah Martinez',
      price: 45.00,
      rating: 5,
      category: 'Pottery',
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop&crop=center',
      featured: true,
      description: 'Beautiful handcrafted ceramic bowl with natural earth tones and unique glaze patterns.',
    },
    {
      id: 2,
      name: 'Sterling Silver Pendant',
      artist: 'Michael Chen',
      price: 89.99,
      rating: 5,
      category: 'Jewelry',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop&crop=center',
      description: 'Elegant sterling silver pendant with intricate hand-engraved details.',
    },
    {
      id: 3,
      name: 'Organic Cotton Scarf',
      artist: 'Emma Thompson',
      price: 32.50,
      rating: 4,
      category: 'Textiles',
      image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=300&fit=crop&crop=center',
      description: 'Soft organic cotton scarf with hand-woven patterns in natural dyes.',
    },
    {
      id: 4,
      name: 'Reclaimed Wood Frame',
      artist: 'David Rodriguez',
      price: 56.00,
      rating: 5,
      category: 'Woodwork',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center',
      description: 'Rustic picture frame crafted from reclaimed barn wood with natural finish.',
    },
    {
      id: 5,
      name: 'Hand-blown Glass Vase',
      artist: 'Lisa Park',
      price: 78.00,
      rating: 5,
      category: 'Glass',
      image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop&crop=center',
      description: 'Stunning hand-blown glass vase with unique swirl patterns and vibrant colors.',
    },
    {
      id: 6,
      name: 'Leather Journal Cover',
      artist: 'James Wilson',
      price: 42.00,
      rating: 4,
      category: 'Leather',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=300&fit=crop&crop=center',
      description: 'Premium leather journal cover with hand-tooled designs and brass accents.',
    },
    {
      id: 7,
      name: 'Guatemalan Woven Fabric',
      artist: 'Maria Santos',
      price: 68.00,
      rating: 5,
      category: 'Textiles',
      image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=400&h=300&fit=crop&crop=center',
      description: 'Beautiful handwoven fabric from Guatemala created on traditional backstrap looms with vibrant patterns.',
    },
    {
      id: 8,
      name: 'Ceramic Mug Collection',
      artist: 'Sarah Martinez',
      price: 56.00,
      rating: 5,
      category: 'Pottery',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop&crop=center',
      description: 'Set of four unique ceramic mugs with hand-painted glazes.',
    },
  ];

  const categories = ['All', 'Pottery', 'Jewelry', 'Textiles', 'Woodwork', 'Glass', 'Leather'];
  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest', 'Best Rated'];

  // State for filtering and search
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Featured');
  const [displayCount, setDisplayCount] = useState(8);
  const [wishlist, setWishlist] = useState<number[]>([]);
  
  const ITEMS_PER_LOAD = 4;

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.artist.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sort products
    switch (sortBy) {
      case 'Price: Low to High':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'Best Rated':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'Featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [products, selectedCategory, searchTerm, sortBy]);

  // Get products to display based on current display count
  const displayedProducts = filteredProducts.slice(0, displayCount);
  const hasMoreProducts = displayCount < filteredProducts.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + ITEMS_PER_LOAD);
  };

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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  category === selectedCategory
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
            <select 
              className="select min-w-[200px]"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-neutral-600">
          Showing {displayedProducts.length} of {filteredProducts.length} products
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="product-card group"
          >
            <div className="relative">
              <div className="w-full h-64 bg-neutral-100 rounded-t-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              {/* Featured Badge */}
              {product.featured && (
                <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                  Featured
                </div>
              )}
              
              {/* Wishlist Button */}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  toggleWishlist(product.id);
                }}
                className={`absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 ${
                  wishlist.includes(product.id) ? 'scale-110' : ''
                }`}
              >
                <svg 
                  className={`w-5 h-5 transition-colors duration-300 ${
                    wishlist.includes(product.id) 
                      ? 'text-red-500 fill-current' 
                      : 'text-neutral-400 hover:text-red-500'
                  }`} 
                  fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
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
        ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">No products found</h3>
            <p className="text-neutral-600 mb-6">
              {searchTerm 
                ? `No products match "${searchTerm}"`
                : `No products in ${selectedCategory} category`}
            </p>
            <button 
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
                setDisplayCount(8);
              }}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Load More */}
      {hasMoreProducts && (
        <div className="text-center">
          <button 
            onClick={handleLoadMore}
            className="btn-outline px-8 py-3"
          >
            Load More Products
          </button>
          <p className="body-small text-neutral-600 mt-4">
            Showing {displayedProducts.length} of {filteredProducts.length} products
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;