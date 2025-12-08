import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArtisanDetailClient from './ArtisanDetailClient';

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
  const { id} = await params;
  const artisan = artisansData.find(a => a.id === parseInt(id));

  if (!artisan) {
    notFound();
  }

  const products = getArtisanProducts(artisan.id);

  return <ArtisanDetailClient artisan={artisan} products={products} />;
}