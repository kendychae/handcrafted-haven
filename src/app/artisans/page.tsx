'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';

const ArtisansPage = () => {
  const artisans = [
    {
      id: 1,
      name: 'Sarah Martinez',
      specialty: 'Ceramic Artist',
      location: 'Santa Fe, NM',
      yearsExperience: 8,
      description: 'Creating functional and beautiful pottery inspired by southwestern landscapes.',
      productsCount: 24,
      rating: 4.9,
      reviewsCount: 127,
      featured: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      specialty: 'Jewelry Designer',
      location: 'San Francisco, CA',
      yearsExperience: 12,
      description: 'Crafting unique jewelry pieces with sustainable materials and ethical practices.',
      productsCount: 18,
      rating: 5.0,
      reviewsCount: 89,
    },
    {
      id: 3,
      name: 'Emma Thompson',
      specialty: 'Textile Artist',
      location: 'Portland, OR',
      yearsExperience: 6,
      description: 'Hand-weaving organic textiles and creating sustainable fashion pieces.',
      productsCount: 32,
      rating: 4.8,
      reviewsCount: 156,
    },
    {
      id: 4,
      name: 'David Rodriguez',
      specialty: 'Woodworker',
      location: 'Austin, TX',
      yearsExperience: 15,
      description: 'Creating custom furniture and home decor from reclaimed and sustainable wood.',
      productsCount: 16,
      rating: 4.9,
      reviewsCount: 203,
      featured: true,
    },
    {
      id: 5,
      name: 'Lisa Park',
      specialty: 'Glass Artist',
      location: 'Seattle, WA',
      yearsExperience: 10,
      description: 'Hand-blown glass art inspired by Pacific Northwest nature and landscapes.',
      productsCount: 22,
      rating: 4.7,
      reviewsCount: 94,
    },
    {
      id: 6,
      name: 'James Wilson',
      specialty: 'Leather Craftsman',
      location: 'Denver, CO',
      yearsExperience: 14,
      description: 'Traditional leatherworking techniques creating durable and beautiful accessories.',
      productsCount: 28,
      rating: 4.8,
      reviewsCount: 167,
    },
  ];

  const specialties = ['All', 'Ceramic Artist', 'Jewelry Designer', 'Textile Artist', 'Woodworker', 'Glass Artist', 'Leather Craftsman'];
  const sortOptions = ['Featured', 'Rating', 'Experience', 'Products', 'Location'];

  // State for filtering and sorting
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');

  // Filter and sort artisans
  const filteredArtisans = useMemo(() => {
    let filtered = artisans.filter(artisan => {
      return selectedSpecialty === 'All' || artisan.specialty === selectedSpecialty;
    });

    // Sort artisans
    switch (sortBy) {
      case 'Rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'Experience':
        filtered.sort((a, b) => b.yearsExperience - a.yearsExperience);
        break;
      case 'Products':
        filtered.sort((a, b) => b.productsCount - a.productsCount);
        break;
      case 'Location':
        filtered.sort((a, b) => a.location.localeCompare(b.location));
        break;
      case 'Featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [artisans, selectedSpecialty, sortBy]);

  return (
    <div className="container section-padding">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="heading-1 mb-4">Meet Our Artisans</h1>
        <p className="body-large max-w-2xl mx-auto">
          Discover the talented creators behind our handcrafted products. Each artisan brings 
          unique skills, passion, and years of experience to their craft.
        </p>
      </div>

      {/* Featured Artisan Banner */}
      <div className="gradient-primary rounded-2xl p-8 mb-12 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="inline-block bg-primary-100 text-primary-900 text-sm px-3 py-1 rounded-full mb-4">
              Featured Artisan
            </div>
            <h2 className="heading-2 mb-4 text-white">Sarah Martinez</h2>
            <p className="body-large mb-6 text-white/90">
              Ceramic artist with 8 years of experience creating beautiful pottery inspired by 
              southwestern landscapes. Her work has been featured in galleries across the region.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="text-center">
                <div className="heading-4 text-white">24</div>
                <div className="body-small text-white/80">Products</div>
              </div>
              <div className="text-center">
                <div className="heading-4 text-white">4.9★</div>
                <div className="body-small text-white/80">Rating</div>
              </div>
              <div className="text-center">
                <div className="heading-4 text-white">127</div>
                <div className="body-small text-white/80">Reviews</div>
              </div>
            </div>
            <Link
              href="/artisans/1"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
            >
              View Profile
            </Link>
          </div>
          <div className="w-64 h-64 bg-white/20 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">👩‍🎨</div>
              <span className="text-white/80">Profile Photo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-soft border border-neutral-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="flex-1">
            <span className="font-medium text-neutral-800 mb-3 block">Filter by specialty:</span>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    specialty === selectedSpecialty
                      ? 'bg-primary-700 text-white'
                      : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
                  }`}
                >
                  {specialty === 'All' ? 'All Artisans' : specialty}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <label className="font-medium text-neutral-800 mb-2 block">Sort by:</label>
            <select 
              className="select min-w-[180px]"
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
        
        {/* Results Count */}
        <div className="mt-4 pt-4 border-t border-neutral-200">
          <p className="text-neutral-700">
            Showing {filteredArtisans.length} of {artisans.length} artisans
            {selectedSpecialty !== 'All' && ` specializing in ${selectedSpecialty}`}
          </p>
        </div>
      </div>

      {/* Artisans Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredArtisans.length > 0 ? (
          filteredArtisans.map((artisan) => (
          <Link
            key={artisan.id}
            href={`/artisans/${artisan.id}`}
            className="card card-padding group hover:scale-105 transition-all duration-300"
          >
            <div className="relative mb-6">
              {/* Featured Badge */}
              {artisan.featured && (
                <div className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs px-2 py-1 rounded-full z-10">
                  Featured
                </div>
              )}
              
              {/* Profile Image */}
              <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-4xl">👨‍🎨</span>
              </div>
              
              <div className="text-center">
                <h3 className="heading-4 mb-1 group-hover:text-primary-600 transition-colors">
                  {artisan.name}
                </h3>
                <p className="body text-primary-600 font-medium mb-2">{artisan.specialty}</p>
                <p className="body-small text-neutral-600 flex items-center justify-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {artisan.location}
                </p>
              </div>
            </div>

            <p className="body-small text-neutral-600 mb-6 text-center line-clamp-3">
              {artisan.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              <div>
                <div className="heading-4 text-primary-600">{artisan.productsCount}</div>
                <div className="body-small text-neutral-600">Products</div>
              </div>
              <div>
                <div className="heading-4 text-primary-600">{artisan.rating}★</div>
                <div className="body-small text-neutral-600">Rating</div>
              </div>
              <div>
                <div className="heading-4 text-primary-600">{artisan.yearsExperience}</div>
                <div className="body-small text-neutral-600">Years</div>
              </div>
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(artisan.rating) ? 'fill-current' : 'text-neutral-300'}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="body-small text-neutral-600">({artisan.reviewsCount} reviews)</span>
            </div>

            <button className="btn-primary w-full group-hover:bg-primary-700 transition-colors">
              View Profile & Products
            </button>
          </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">👨‍🎨</span>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">No artisans found</h3>
            <p className="text-neutral-700 mb-6">
              No artisans match your current filter: {selectedSpecialty}
            </p>
            <button 
              onClick={() => setSelectedSpecialty('All')}
              className="bg-primary-700 text-white px-6 py-3 rounded-lg hover:bg-primary-800 transition-colors"
            >
              View All Artisans
            </button>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8 text-center">
        <h2 className="heading-2 mb-4">Become an Artisan</h2>
        <p className="body-large mb-6 max-w-2xl mx-auto">
          Join our community of talented creators and share your craft with customers who 
          appreciate handmade quality and authentic artisanship.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/become-seller" className="btn-primary">
            Apply to Sell
          </Link>
          <Link href="/about" className="btn-outline">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtisansPage;