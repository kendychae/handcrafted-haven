import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Sample artisan data - in a real app, this would come from a database
const artisansData = [
  {
    id: 1,
    name: 'Sarah Martinez',
    specialty: 'Ceramic Artist',
    location: 'Portland, Oregon',
    bio: 'Sarah has been crafting beautiful ceramic pieces for over 15 years. Inspired by natural forms and traditional techniques, she creates functional pottery that brings warmth to everyday life.',
    image: '/api/placeholder/300/300',
    coverImage: '/api/placeholder/800/400',
    yearsExperience: 15,
    productsCount: 47,
    rating: 4.9,
    reviews: 127,
    joinDate: 'March 2018',
    featured: true,
    socialMedia: {
      instagram: '@sarahceramics',
      website: 'www.sarahceramics.com'
    },
    story: 'I discovered my passion for ceramics during college and never looked back. Each piece I create is a meditation on form, function, and beauty. I source my clay locally and fire my pieces in a kiln I built myself.',
    techniques: ['Wheel throwing', 'Hand building', 'Glazing', 'Firing'],
    materials: ['Stoneware clay', 'Natural glazes', 'Local minerals']
  },
  {
    id: 2,
    name: 'Michael Chen',
    specialty: 'Metal & Jewelry',
    location: 'San Francisco, CA',
    bio: 'Michael specializes in contemporary jewelry design using sustainable metals and ethically sourced gemstones.',
    image: '/api/placeholder/300/300',
    coverImage: '/api/placeholder/800/400',
    yearsExperience: 12,
    productsCount: 34,
    rating: 4.8,
    reviews: 89,
    joinDate: 'July 2019',
    featured: false,
    socialMedia: {
      instagram: '@chenjewelry',
      website: 'www.chenjewelry.com'
    },
    story: 'My journey in metalworking began with a fascination for ancient jewelry techniques. I combine traditional methods with modern design to create pieces that are both timeless and contemporary.',
    techniques: ['Forging', 'Soldering', 'Stone setting', 'Engraving'],
    materials: ['Recycled silver', 'Conflict-free diamonds', 'Natural gemstones']
  },
  // Add more artisans as needed
];

// Sample products for the artisan
const getArtisanProducts = (artisanId: number) => [
  {
    id: 1,
    name: 'Handwoven Ceramic Bowl',
    price: 45.00,
    image: '/api/placeholder/250/250',
    rating: 5,
    category: 'Pottery'
  },
  {
    id: 2,
    name: 'Ceramic Coffee Mug Set',
    price: 32.00,
    image: '/api/placeholder/250/250',
    rating: 5,
    category: 'Pottery'
  },
  {
    id: 3,
    name: 'Decorative Vase',
    price: 68.00,
    image: '/api/placeholder/250/250',
    rating: 4,
    category: 'Pottery'
  }
];

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const artisan = artisansData.find(a => a.id === parseInt(id));
  
  if (!artisan) {
    return {
      title: 'Artisan Not Found - Handcrafted Haven'
    };
  }

  return {
    title: `${artisan.name} - ${artisan.specialty} | Handcrafted Haven`,
    description: artisan.bio,
  };
}

export default async function ArtisanProfilePage({ params }: Props) {
  const { id } = await params;
  const artisan = artisansData.find(a => a.id === parseInt(id));

  if (!artisan) {
    notFound();
  }

  const products = getArtisanProducts(artisan.id);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Cover Image */}
      <div className="relative h-80 bg-gradient-to-r from-primary-600 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container h-full flex items-end pb-8">
          <div className="flex items-end space-x-6">
            {/* Profile Image */}
            <div className="w-32 h-32 bg-white rounded-full p-2 flex-shrink-0">
              <div className="w-full h-full bg-neutral-200 rounded-full overflow-hidden">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Basic Info */}
            <div className="text-white">
              {artisan.featured && (
                <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                  Featured Artisan
                </span>
              )}
              <h1 className="text-4xl font-bold mb-2">{artisan.name}</h1>
              <p className="text-xl text-white/90 mb-1">{artisan.specialty}</p>
              <p className="text-white/80">📍 {artisan.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">About {artisan.name}</h2>
              <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                {artisan.bio}
              </p>
              <p className="text-neutral-700 leading-relaxed">
                {artisan.story}
              </p>
            </div>

            {/* Techniques & Materials */}
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Craft Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3">Techniques</h4>
                  <ul className="space-y-2">
                    {artisan.techniques.map((technique, index) => (
                      <li key={index} className="flex items-center text-neutral-700">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                        {technique}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3">Materials</h4>
                  <ul className="space-y-2">
                    {artisan.materials.map((material, index) => (
                      <li key={index} className="flex items-center text-neutral-700">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                        {material}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-neutral-900">
                  Products by {artisan.name}
                </h3>
                <Link
                  href={`/products?artisan=${artisan.id}`}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  View All ({artisan.productsCount})
                </Link>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group block"
                  >
                    <div className="bg-neutral-50 rounded-lg overflow-hidden mb-3 group-hover:shadow-md transition-shadow">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-1 group-hover:text-primary-600">
                      {product.name}
                    </h4>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary-600">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-neutral-500">
                        {'★'.repeat(product.rating)} ({product.rating})
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 sticky top-24">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{artisan.productsCount}</div>
                  <div className="text-sm text-neutral-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{artisan.rating}★</div>
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
                <button className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
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

              {/* Member Since */}
              <div className="border-t border-neutral-200 pt-6 mt-6">
                <p className="text-sm text-neutral-500">
                  Member since {artisan.joinDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}