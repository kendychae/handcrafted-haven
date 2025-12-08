'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Artisan {
  id: number;
  name: string;
  specialty: string;
  location: string;
  bio: string;
  image: string;
  coverImage: string;
  yearsExperience: number;
  productsCount: number;
  rating: number;
  reviews: number;
  joinDate: string;
  featured: boolean;
  socialMedia?: {
    instagram?: string;
    website?: string;
  };
  story: string;
  techniques: string[];
  materials: string[];
}

interface ArtisanDetailClientProps {
  artisan: Artisan;
  products: Array<{
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    category: string;
  }>;
}

export default function ArtisanDetailClient({ artisan, products }: ArtisanDetailClientProps) {
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [messageName, setMessageName] = useState('');
  const [messageEmail, setMessageEmail] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show confirmation
    setShowConfirmation(true);
    setShowMessageModal(false);
    
    // Reset form
    setMessageName('');
    setMessageEmail('');
    setMessageContent('');
    
    // Hide confirmation after 5 seconds
    setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
  };

  return (
    <>
      {/* Success Confirmation Banner */}
      {showConfirmation && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg animate-slide-up">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <p className="font-semibold">Message sent successfully!</p>
              <p className="text-sm">The artisan will respond within 24-48 hours.</p>
            </div>
          </div>
        </div>
      )}

      {/* Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowMessageModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Message {artisan.name}</h3>
            
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={messageName}
                  onChange={(e) => setMessageName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={messageEmail}
                  onChange={(e) => setMessageEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={messageContent}
                  onChange={(e) => setMessageContent(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Write your message to the artisan..."
                ></textarea>
              </div>
              
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowMessageModal(false)}
                  className="flex-1 border border-neutral-300 text-neutral-700 py-3 px-4 rounded-lg hover:bg-neutral-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-neutral-50">
        <div className="container py-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-neutral-600 hover:text-primary-700">Home</Link></li>
              <li><span className="text-neutral-400">›</span></li>
              <li><Link href="/artisans" className="text-neutral-600 hover:text-primary-700">Artisans</Link></li>
              <li><span className="text-neutral-400">›</span></li>
              <li><span className="text-neutral-800 font-medium">{artisan.name}</span></li>
            </ol>
          </nav>

          {/* Cover Image */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            <img
              src={artisan.coverImage}
              alt={`${artisan.name}'s workspace`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            {artisan.featured && (
              <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                ⭐ Featured Artisan
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio Section */}
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
                <div className="flex items-start space-x-6 mb-6">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-neutral-900 mb-2">{artisan.name}</h1>
                    <p className="text-xl text-primary-600 mb-2">{artisan.specialty}</p>
                    <p className="text-neutral-600 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {artisan.location}
                    </p>
                  </div>
                </div>

                <p className="text-neutral-700 text-lg leading-relaxed mb-6">{artisan.bio}</p>

                {/* Artisan's Story */}
                <div className="border-t border-neutral-200 pt-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">My Story</h3>
                  <p className="text-neutral-700 leading-relaxed">{artisan.story}</p>
                </div>
              </div>

              {/* Techniques & Materials */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Techniques</h3>
                  <ul className="space-y-2">
                    {artisan.techniques.map((technique, index) => (
                      <li key={index} className="flex items-center text-neutral-700">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        {technique}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Materials</h3>
                  <ul className="space-y-2">
                    {artisan.materials.map((material, index) => (
                      <li key={index} className="flex items-center text-neutral-700">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        {material}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Products */}
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Products by {artisan.name}</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      className="group"
                    >
                      <div className="aspect-square rounded-lg overflow-hidden mb-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 mb-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-primary-600 font-semibold">${product.price.toFixed(2)}</p>
                        <div className="flex items-center text-yellow-400">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1 text-sm text-neutral-600">{product.rating}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                <h3 className="font-semibold text-neutral-900 mb-4">Artisan Stats</h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{artisan.rating}</div>
                    <div className="text-sm text-neutral-600">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{artisan.reviews}</div>
                    <div className="text-sm text-neutral-600">Reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{artisan.yearsExperience}</div>
                    <div className="text-sm text-neutral-600">Years</div>
                  </div>
                </div>

                {/* Contact/Follow */}
                <div className="space-y-3 mb-6">
                  <button 
                    onClick={() => setShowMessageModal(true)}
                    className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                  >
                    Message Artisan
                  </button>
                  <button className="w-full border border-primary-600 text-primary-600 py-3 px-4 rounded-lg hover:bg-primary-50 transition-colors font-semibold">
                    Follow
                  </button>
                </div>

                {/* Social Links */}
                {artisan.socialMedia && (
                  <div className="border-t border-neutral-200 pt-6">
                    <h4 className="font-semibold text-neutral-900 mb-3">Connect</h4>
                    <div className="space-y-2">
                      {artisan.socialMedia.instagram && (
                        <a
                          href={`https://instagram.com/${artisan.socialMedia.instagram.replace('@', '')}`}
                          className="flex items-center text-neutral-600 hover:text-primary-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          📷 {artisan.socialMedia.instagram}
                        </a>
                      )}
                      {artisan.socialMedia.website && (
                        <a
                          href={`https://${artisan.socialMedia.website}`}
                          className="flex items-center text-neutral-600 hover:text-primary-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          🌐 {artisan.socialMedia.website}
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Member Since */}
              <div className="bg-primary-50 rounded-lg p-6">
                <div className="text-sm text-primary-800 mb-1">Member Since</div>
                <div className="text-lg font-semibold text-primary-900">{artisan.joinDate}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
