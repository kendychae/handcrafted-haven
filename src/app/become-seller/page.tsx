import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Become a Seller - Handcrafted Haven',
  description: 'Join our marketplace and start selling your handcrafted goods to customers who appreciate unique, artisan-made products.',
};

export default function BecomeSellerPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Become a Seller
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Share your craft with the world. Join thousands of artisans who are building their businesses on Handcrafted Haven.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Why Sell With Us?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Targeted Audience</h3>
                  <p className="text-neutral-700">
                    Connect with customers who specifically seek handmade, unique products and appreciate craftsmanship.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Competitive Fees</h3>
                  <p className="text-neutral-700">
                    Keep more of your earnings with our low seller fees and transparent pricing structure.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Growth Support</h3>
                  <p className="text-neutral-700">
                    Access tools, resources, and community support to help grow your artisan business.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Getting Started is Easy</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                <span className="text-neutral-700">Create your seller account</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                <span className="text-neutral-700">Set up your artisan profile</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                <span className="text-neutral-700">Upload your first products</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                <span className="text-neutral-700">Start receiving orders!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Seller Requirements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Handmade Only</h3>
              <p className="text-sm text-neutral-600">All products must be genuinely handcrafted by you</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Quality Photos</h3>
              <p className="text-sm text-neutral-600">High-resolution images showcasing your work</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Detailed Descriptions</h3>
              <p className="text-sm text-neutral-600">Clear, honest product descriptions and materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Reliable Shipping</h3>
              <p className="text-sm text-neutral-600">Timely fulfillment and good communication</p>
            </div>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Ready to Start Selling?</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-neutral-700 mb-2">
                Business/Artisan Name
              </label>
              <input
                type="text"
                id="businessName"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your business or artisan name"
              />
            </div>

            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-neutral-700 mb-2">
                Your Specialty
              </label>
              <select
                id="specialty"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select your main craft</option>
                <option value="jewelry">Jewelry & Accessories</option>
                <option value="pottery">Ceramics & Pottery</option>
                <option value="textiles">Textiles & Fiber Arts</option>
                <option value="woodwork">Woodwork & Furniture</option>
                <option value="art">Art & Paintings</option>
                <option value="glass">Glass & Metalwork</option>
                <option value="leather">Leather Goods</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-neutral-700 mb-2">
                Years of Experience
              </label>
              <select
                id="experience"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select experience level</option>
                <option value="1-2">1-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-2">
                Tell Us About Your Craft
              </label>
              <textarea
                id="description"
                rows={4}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Describe your crafting style, techniques, and what makes your work unique..."
              ></textarea>
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
              />
              <label htmlFor="terms" className="text-sm text-neutral-700">
                I agree to the <a href="/terms" className="text-primary-600 hover:text-primary-700">Terms of Service</a> and 
                <a href="/seller-policy" className="text-primary-600 hover:text-primary-700 ml-1">Seller Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              Submit Application
            </button>
          </form>

          <p className="text-center text-sm text-neutral-600 mt-6">
            Already have an account? <a href="/login" className="text-primary-600 hover:text-primary-700">Sign in here</a>
          </p>
        </div>
      </div>
    </div>
  );
}