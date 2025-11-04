import Link from 'next/link';

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Handwoven Ceramic Bowl',
      artist: 'Sarah Martinez',
      price: 45.00,
      rating: 5,
      category: 'Pottery',
    },
    {
      id: 2,
      name: 'Sterling Silver Pendant',
      artist: 'Michael Chen',
      price: 89.99,
      rating: 5,
      category: 'Jewelry',
    },
    {
      id: 3,
      name: 'Organic Cotton Scarf',
      artist: 'Emma Thompson',
      price: 32.50,
      rating: 4,
      category: 'Textiles',
    },
    {
      id: 4,
      name: 'Reclaimed Wood Frame',
      artist: 'David Rodriguez',
      price: 56.00,
      rating: 5,
      category: 'Woodwork',
    },
  ];

  const categories = [
    {
      name: 'Jewelry',
      href: '/categories/jewelry',
      icon: '💎',
      description: 'Handcrafted rings, necklaces, and accessories',
    },
    {
      name: 'Home Decor',
      href: '/categories/home-decor',
      icon: '🏠',
      description: 'Beautiful pieces to make your house a home',
    },
    {
      name: 'Art & Prints',
      href: '/categories/art',
      icon: '🎨',
      description: 'Original artwork and custom prints',
    },
    {
      name: 'Clothing',
      href: '/categories/clothing',
      icon: '👕',
      description: 'Sustainable fashion and unique garments',
    },
    {
      name: 'Pottery',
      href: '/categories/pottery',
      icon: '🏺',
      description: 'Functional and decorative ceramic pieces',
    },
    {
      name: 'Woodwork',
      href: '/categories/woodwork',
      icon: '🪵',
      description: 'Furniture and decorative wooden items',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-neutral-50 to-secondary-50">
        <div className="container section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">
              Discover Unique
              <span className="text-gradient block">Handcrafted Treasures</span>
            </h1>
            <p className="body-large mb-8 max-w-2xl mx-auto">
              Connect with talented artisans and discover one-of-a-kind handmade items. 
              Support independent creators and find something truly special for yourself or loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/products" className="btn-primary text-lg px-8 py-4">
                Browse All Products
              </Link>
              <Link href="/become-seller" className="btn-outline text-lg px-8 py-4">
                Become an Artisan
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="heading-3 text-primary-600 mb-1">500+</div>
                <div className="body-small text-neutral-600">Talented Artisans</div>
              </div>
              <div className="text-center">
                <div className="heading-3 text-primary-600 mb-1">2,000+</div>
                <div className="body-small text-neutral-600">Unique Products</div>
              </div>
              <div className="text-center">
                <div className="heading-3 text-primary-600 mb-1">98%</div>
                <div className="body-small text-neutral-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-primary-100 opacity-20"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-secondary-100 opacity-20"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">
              Why Choose Handcrafted Haven?
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              We&apos;re more than just a marketplace – we&apos;re a community celebrating creativity, quality, and authentic craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="heading-4 mb-4">Authentic Stories</h3>
              <p className="body text-neutral-600">
                Every item comes with a unique story. Learn about the artisan, their process, and the inspiration behind their craft.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-4 mb-4">Quality Guaranteed</h3>
              <p className="body text-neutral-600">
                All our artisans are verified and their products undergo quality checks to ensure authenticity and craftsmanship.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-earth-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-earth-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-earth-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="heading-4 mb-4">Community Driven</h3>
              <p className="body text-neutral-600">
                Join a passionate community of creators and customers who value sustainability, uniqueness, and supporting small businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Shop by Category</h2>
            <p className="body-large max-w-2xl mx-auto">
              Explore our diverse collection of handcrafted items across various categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="card card-padding group hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="heading-4 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <p className="body-small text-neutral-600">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Featured Handcrafted Items</h2>
            <p className="body-large max-w-2xl mx-auto">
              Discover some of our most popular and recently added treasures from talented artisans
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-t-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-2">🎨</div>
                      <span className="body-small text-neutral-500">Product Image</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <svg className="w-5 h-5 text-neutral-400 hover:text-primary-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="heading-4 mb-2">{product.name}</h3>
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
                    <button className="btn-ghost text-sm px-4 py-2">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary text-lg px-8 py-4">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="container text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Start Your Journey?</h2>
          <p className="body-large mb-8 max-w-2xl mx-auto opacity-90">
            Whether you&apos;re looking for unique items or want to share your craft with the world,
            Handcrafted Haven is the perfect place to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-white text-primary-600 hover:bg-neutral-100 px-8 py-4 rounded-lg font-medium transition-colors">
              Start Shopping
            </Link>
            <Link href="/become-seller" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-medium transition-colors">
              Become a Seller
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}