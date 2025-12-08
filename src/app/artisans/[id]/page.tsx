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
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces',
    coverImage: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=400&fit=crop&crop=center',
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
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces',
    coverImage: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=400&fit=crop&crop=center',
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
  {
    id: 3,
    name: 'Emma Thompson',
    specialty: 'Textile Artist',
    location: 'Portland, OR',
    bio: 'Emma specializes in hand-woven textiles and sustainable fashion using organic materials.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces',
    coverImage: 'https://images.unsplash.com/photo-1558769132-cb1aea53f1e8?w=800&h=400&fit=crop&crop=center',
    yearsExperience: 8,
    productsCount: 28,
    rating: 4.9,
    reviews: 112,
    joinDate: 'January 2020',
    featured: true,
    socialMedia: {
      instagram: '@emmaweavess',
      website: 'www.emmathompson.com'
    },
    story: 'I create textiles that tell stories. Each piece is woven with intention, using traditional techniques passed down through generations.',
    techniques: ['Weaving', 'Natural dyeing', 'Pattern design'],
    materials: ['Organic cotton', 'Natural dyes', 'Sustainable fibers']
  },
  {
    id: 4,
    name: 'David Rodriguez',
    specialty: 'Woodworker',
    location: 'Austin, TX',
    bio: 'David creates beautiful furniture and home decor from reclaimed and sustainable wood.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces',
    coverImage: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=400&fit=crop&crop=center',
    yearsExperience: 18,
    productsCount: 45,
    rating: 5.0,
    reviews: 156,
    joinDate: 'May 2017',
    featured: true,
    socialMedia: {
      instagram: '@davidwood',
      website: 'www.rodriguezwood.com'
    },
    story: 'Working with wood is a spiritual practice for me. I honor each tree by creating pieces that will last generations.',
    techniques: ['Hand carving', 'Joinery', 'Natural finishing'],
    materials: ['Reclaimed wood', 'Sustainable cherry', 'Natural oils']
  },
  {
    id: 5,
    name: 'Maria Santos',
    specialty: 'Glass Artist',
    location: 'Seattle, WA',
    bio: 'Maria creates stunning blown glass art pieces inspired by Pacific Northwest nature.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=faces',
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=400&fit=crop&crop=center',
    yearsExperience: 14,
    productsCount: 32,
    rating: 4.8,
    reviews: 98,
    joinDate: 'September 2018',
    featured: false,
    socialMedia: {
      instagram: '@mariaglass',
      website: 'www.santosglassart.com'
    },
    story: 'Glass blowing allows me to capture light and color in ways that never cease to amaze me.',
    techniques: ['Glass blowing', 'Fusing', 'Lampworking'],
    materials: ['Recycled glass', 'Natural pigments', 'Precious metals']
  },
  {
    id: 6,
    name: 'James Wilson',
    specialty: 'Leather Craftsman',
    location: 'Denver, CO',
    bio: 'James specializes in traditional leatherworking, creating durable and beautiful accessories.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces',
    coverImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=400&fit=crop&crop=center',
    yearsExperience: 16,
    productsCount: 38,
    rating: 4.9,
    reviews: 142,
    joinDate: 'April 2018',
    featured: false,
    socialMedia: {
      instagram: '@wilsonleather',
      website: 'www.wilsoncraft.com'
    },
    story: 'I learned leatherworking from my grandfather. Every stitch carries forward our family tradition.',
    techniques: ['Hand stitching', 'Tooling', 'Dyeing'],
    materials: ['Vegetable-tanned leather', 'Brass hardware', 'Natural dyes']
  },
  {
    id: 7,
    name: 'Olivia Park',
    specialty: 'Painter',
    location: 'Brooklyn, NY',
    bio: 'Olivia creates vibrant paintings and prints inspired by urban landscapes and nature.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces',
    coverImage: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=400&fit=crop&crop=center',
    yearsExperience: 10,
    productsCount: 52,
    rating: 4.7,
    reviews: 87,
    joinDate: 'November 2019',
    featured: false,
    socialMedia: {
      instagram: '@oliviapark_art',
      website: 'www.oliviaparkart.com'
    },
    story: 'My art explores the intersection of urban life and natural beauty, finding harmony in contrast.',
    techniques: ['Acrylics', 'Watercolor', 'Mixed media'],
    materials: ['Canvas', 'Archival paper', 'Natural pigments']
  },
  {
    id: 8,
    name: 'Rachel Green',
    specialty: 'Candle Maker',
    location: 'Charleston, SC',
    bio: 'Rachel hand-pours artisanal candles using natural soy wax and essential oils.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=faces',
    coverImage: 'https://images.unsplash.com/photo-1602874801006-e24aa4a93e41?w=800&h=400&fit=crop&crop=center',
    yearsExperience: 7,
    productsCount: 46,
    rating: 4.9,
    reviews: 203,
    joinDate: 'February 2020',
    featured: true,
    socialMedia: {
      instagram: '@greenlightcandles',
      website: 'www.greenlightcandles.com'
    },
    story: 'I believe in creating candles that transform spaces into sanctuaries of peace and calm.',
    techniques: ['Hand pouring', 'Scent blending', 'Natural dyeing'],
    materials: ['Soy wax', 'Essential oils', 'Cotton wicks']
  },
  {
    id: 9,
    name: 'Alex Turner',
    specialty: 'Print Artist',
    location: 'Portland, OR',
    bio: 'Alex creates stunning art prints and illustrations with contemporary and abstract styles.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop&crop=faces',
    coverImage: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&h=400&fit=crop&crop=center',
    yearsExperience: 9,
    productsCount: 41,
    rating: 4.8,
    reviews: 124,
    joinDate: 'June 2019',
    featured: false,
    socialMedia: {
      instagram: '@alexturnerart',
      website: 'www.turnerprints.com'
    },
    story: 'My prints capture moments of beauty and emotion, bringing art into everyday spaces.',
    techniques: ['Digital illustration', 'Screen printing', 'Lithography'],
    materials: ['Archival paper', 'Eco-friendly inks', 'Canvas']
  },
  {
    id: 10,
    name: 'Sophie Laurent',
    specialty: 'Botanical Artist',
    location: 'Asheville, NC',
    bio: 'Sophie creates beautiful botanical prints and nature-inspired artwork.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=faces',
    coverImage: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=400&fit=crop&crop=center',
    yearsExperience: 11,
    productsCount: 37,
    rating: 4.9,
    reviews: 95,
    joinDate: 'August 2018',
    featured: false,
    socialMedia: {
      instagram: '@sophiebotanical',
      website: 'www.laurentbotanicals.com'
    },
    story: 'I find endless inspiration in the natural world, translating botanical beauty into timeless art.',
    techniques: ['Watercolor', 'Botanical drawing', 'Print making'],
    materials: ['Watercolor paper', 'Natural pigments', 'Archival inks']
  },
];

// Sample products for the artisan
const getArtisanProducts = (artisanId: number) => [
  {
    id: 1,
    name: 'Handwoven Ceramic Bowl',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=250&h=250&fit=crop&crop=center',
    rating: 5,
    category: 'Pottery'
  },
  {
    id: 2,
    name: 'Ceramic Coffee Mug Set',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=250&h=250&fit=crop&crop=center',
    rating: 5,
    category: 'Pottery'
  },
  {
    id: 3,
    name: 'Decorative Vase',
    price: 68.00,
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=250&h=250&fit=crop&crop=center',
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