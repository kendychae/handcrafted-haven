import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Handcrafted Haven',
  description: 'Learn about Handcrafted Haven, our mission to connect artisans with customers who appreciate unique, handmade goods.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            About Handcrafted Haven
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We&apos;re passionate about connecting talented artisans with customers who appreciate 
            the beauty and authenticity of handmade goods.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Mission</h2>
            <p className="text-lg text-neutral-700 mb-4">
              At Handcrafted Haven, we believe that every handmade item tells a story. Our mission 
              is to create a marketplace where skilled artisans can showcase their unique creations 
              and connect directly with customers who value craftsmanship and authenticity.
            </p>
            <p className="text-lg text-neutral-700">
              We&apos;re committed to supporting small businesses and preserving traditional crafts 
              while providing a platform for modern artisans to thrive in the digital age.
            </p>
          </div>
          <div className="bg-primary-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary-800 mb-4">Why Choose Handcrafted Haven?</h3>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Curated selection of quality handmade goods
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Direct support for independent artisans
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Unique, one-of-a-kind items you won&apos;t find elsewhere
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Sustainable and ethical shopping choices
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Craftsmanship</h3>
              <p className="text-neutral-600">
                We celebrate the skill, creativity, and dedication that goes into every handmade piece.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Community</h3>
              <p className="text-neutral-600">
                Building connections between artisans and customers creates a stronger, more supportive community.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Sustainability</h3>
              <p className="text-neutral-600">
                Handmade goods are inherently more sustainable, supporting local economies and reducing waste.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">Join Our Community</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto mb-8">
            Whether you&apos;re an artisan looking to share your craft or a customer seeking unique, 
            handmade treasures, we invite you to be part of the Handcrafted Haven community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products" 
              className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Browse Products
            </a>
            <a 
              href="/become-seller" 
              className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors"
            >
              Become a Seller
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}