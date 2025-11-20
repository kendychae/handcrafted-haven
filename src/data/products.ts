// Sample product data - in a real app, this would come from a database
export const productsData = [
  {
    id: 1,
    name: 'Ceramic Bowl',
    artist: 'Sarah Martinez',
    artistId: 1,
    price: 45.00,
    rating: 5,
    reviewCount: 23,
    category: 'Pottery',
    images: [
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop&crop=center',
    ],
    description: 'Beautiful handcrafted ceramic bowl with natural earth tones and unique glaze patterns. Each piece is individually crafted and fired, making every bowl truly one-of-a-kind. Perfect for serving salads, fruits, or as a decorative centerpiece.',
    materials: ['Stoneware clay', 'Natural glaze', 'Lead-free finish'],
    dimensions: '8" diameter × 3.5" height',
    careInstructions: 'Dishwasher safe, microwave safe, avoid sudden temperature changes',
    shippingInfo: 'Ships within 3-5 business days, carefully packaged to ensure safe delivery',
    inStock: true,
    stockCount: 8,
    featured: true,
    story: 'This bowl is part of my "Earth & Fire" collection, inspired by the natural landscapes of the Southwest. Each piece captures the essence of desert sunsets and canyon walls through carefully selected glazes and firing techniques.',
  },
  {
    id: 2,
    name: 'Sterling Silver Pendant',
    artist: 'Michael Chen',
    artistId: 2,
    price: 89.99,
    rating: 5,
    reviewCount: 15,
    category: 'Jewelry',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=600&fit=crop&crop=center',
    ],
    description: 'Elegant sterling silver pendant with intricate hand-engraved details. Features a classic design that complements both casual and formal attire.',
    materials: ['Sterling silver (925)', 'Rhodium plating'],
    dimensions: '1.2" × 0.8" pendant, 18" chain included',
    careInstructions: 'Clean with soft cloth, store in dry place, avoid chemicals',
    shippingInfo: 'Ships within 1-2 business days in elegant gift box',
    inStock: true,
    stockCount: 12,
    story: 'Inspired by ancient Celtic knotwork, this pendant represents the interconnectedness of all things. Each line is carefully engraved by hand using traditional techniques.',
  },
  {
    id: 3,
    name: 'Organic Cotton Scarf',
    artist: 'Emma Thompson',
    artistId: 3,
    price: 32.50,
    rating: 4,
    reviewCount: 18,
    category: 'Textiles',
    images: [
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=600&fit=crop&crop=center',
    ],
    description: 'Soft organic cotton scarf with hand-woven patterns in natural dyes. Perfect for any season and sustainably made.',
    materials: ['100% Organic Cotton', 'Natural dyes'],
    dimensions: '70" length × 28" width',
    careInstructions: 'Hand wash cold, air dry',
    shippingInfo: 'Ships within 2-3 business days',
    inStock: true,
    stockCount: 15,
    story: 'Made using traditional weaving techniques passed down through generations.',
  },
  {
    id: 4,
    name: 'Reclaimed Wood Frame',
    artist: 'David Rodriguez',
    artistId: 4,
    price: 56.00,
    rating: 5,
    reviewCount: 12,
    category: 'Woodwork',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&crop=center',
    ],
    description: 'Rustic picture frame crafted from reclaimed barn wood with natural finish.',
    materials: ['Reclaimed barn wood', 'Natural finish'],
    dimensions: '8" × 10" frame opening',
    careInstructions: 'Dust with dry cloth, avoid moisture',
    shippingInfo: 'Ships within 3-5 business days',
    inStock: true,
    stockCount: 6,
    story: 'Each frame tells the story of the old barn it came from.',
  },
  {
    id: 5,
    name: 'Hand-blown Glass Vase',
    artist: 'Lisa Park',
    artistId: 5,
    price: 78.00,
    rating: 5,
    reviewCount: 9,
    category: 'Glass',
    images: [
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=600&fit=crop&crop=center',
    ],
    description: 'Stunning hand-blown glass vase with unique swirl patterns and vibrant colors.',
    materials: ['Borosilicate glass', 'Natural pigments'],
    dimensions: '12" height × 6" diameter',
    careInstructions: 'Hand wash with warm soapy water',
    shippingInfo: 'Ships within 1-2 business days, carefully packaged',
    inStock: true,
    stockCount: 4,
    story: 'Each vase is blown individually, making every piece unique.',
  },
  {
    id: 6,
    name: 'Leather Journal Cover',
    artist: 'James Wilson',
    artistId: 6,
    price: 42.00,
    rating: 4,
    reviewCount: 21,
    category: 'Leather',
    images: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=600&fit=crop&crop=center',
    ],
    description: 'Premium leather journal cover with hand-tooled designs and brass accents.',
    materials: ['Full-grain leather', 'Brass hardware'],
    dimensions: '5.5" × 8.5" (fits standard notebook)',
    careInstructions: 'Condition with leather cream monthly',
    shippingInfo: 'Ships within 2-4 business days',
    inStock: true,
    stockCount: 10,
    story: 'Hand-tooled using traditional leather working techniques.',
  },
  {
    id: 7,
    name: 'Woven Basket Set',
    artist: 'Maria Santos',
    artistId: 7,
    price: 68.00,
    rating: 5,
    reviewCount: 16,
    category: 'Textiles',
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600&h=600&fit=crop&crop=center',
    ],
    description: 'Set of three handwoven baskets made from sustainable materials.',
    materials: ['Natural reed', 'Organic cotton trim'],
    dimensions: 'Small: 8", Medium: 10", Large: 12" diameter',
    careInstructions: 'Wipe clean with damp cloth',
    shippingInfo: 'Ships within 3-5 business days',
    inStock: true,
    stockCount: 7,
    story: 'Traditional basket weaving techniques from indigenous artisans.',
  },
  {
    id: 8,
    name: 'Ceramic Mug Collection',
    artist: 'Sarah Martinez',
    artistId: 1,
    price: 56.00,
    rating: 5,
    reviewCount: 28,
    category: 'Pottery',
    images: [
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=600&fit=crop&crop=center',
    ],
    description: 'Set of four unique ceramic mugs with hand-painted glazes.',
    materials: ['Stoneware clay', 'Food-safe glazes'],
    dimensions: '4" height × 3.5" diameter each',
    careInstructions: 'Dishwasher and microwave safe',
    shippingInfo: 'Ships within 3-5 business days',
    inStock: true,
    stockCount: 12,
    story: 'Each mug in the set has a unique glaze pattern.',
  },
];

export interface Product {
  id: number;
  name: string;
  artist: string;
  artistId: number;
  price: number;
  rating: number;
  reviewCount: number;
  category: string;
  images: string[];
  description: string;
  materials: string[];
  dimensions: string;
  careInstructions: string;
  shippingInfo: string;
  inStock: boolean;
  stockCount: number;
  featured?: boolean;
  story?: string;
}