import Link from "next/link";

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "All Products", href: "/products" },
        { name: "Jewelry", href: "/categories/jewelry" },
        { name: "Home Decor", href: "/categories/home-decor" },
        { name: "Art & Prints", href: "/categories/art" },
        { name: "Clothing", href: "/categories/clothing" },
      ],
    },
    {
      title: "Sell",
      links: [
        { name: "Become a Seller", href: "/become-seller" },
        { name: "Seller Dashboard", href: "/seller/dashboard" },
        { name: "Seller Handbook", href: "/seller/handbook" },
        { name: "Fee Structure", href: "/seller/fees" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Returns", href: "/returns" },
        { name: "Size Guide", href: "/size-guide" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Artisan Stories", href: "/artisan-stories" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Press", href: "/press" },
        { name: "Careers", href: "/careers" },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg hidden items-center justify-center">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-neutral-900">
                    Handcrafted Haven
                  </h3>
                  <p className="text-sm text-neutral-900">
                    Artisan Marketplace
                  </p>
                </div>
              </div>
              <p className="text-neutral-600 mb-6 max-w-md">
                Connecting talented artisans with customers who appreciate
                authentic, handcrafted products. Discover unique items made with
                passion and skill.
              </p>

              {/* Newsletter Signup */}
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">
                  Stay Updated
                </h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input flex-1"
                  />
                  <button className="btn-primary px-4">Subscribe</button>
                </div>
                <p className="text-xs text-neutral-900 mt-2">
                  Get updates on new artisans and exclusive products.
                </p>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-neutral-900 mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-neutral-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              <span className="text-sm font-medium text-neutral-700">
                Follow Us:
              </span>
              <div className="flex space-x-4">
                <Link
                  href="https://instagram.com/handcraftedhaven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.97 14.532l.156-.156c.805-.805 1.297-1.915 1.297-3.146s-.492-2.341-1.297-3.146L3.97 7.928l1.156-1.159c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297l1.159 1.159-.156.156c-.805.805-1.297 1.915-1.297 3.146s.492 2.341 1.297 3.146l.156.156-1.159 1.159c-.875.807-2.026 1.297-3.323 1.297z" />
                  </svg>
                </Link>
                <Link
                  href="https://facebook.com/handcraftedhaven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  href="https://pinterest.com/handcraftedhaven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-600 transition-colors duration-200"
                  aria-label="Pinterest"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624.001 11.99-5.365 11.99-11.988C24.007 5.36 18.641.001 12.017.001z" />
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com/handcraftedhaven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-600 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Copyright & Legal */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-neutral-600">
              <p>&copy; 2025 Handcrafted Haven. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/privacy" className="hover:text-primary-600">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-primary-600">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-primary-600">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;