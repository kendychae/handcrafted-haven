import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register - Handcrafted Haven",
  description:
    "Sign up to your Handcrafted Haven account to access your orders, wishlist, and seller dashboard.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12">
      <div className="container max-w-xl">
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">
              Register Here
            </h1>
            <p className="text-neutral-600">
              Sign up to your Handcrafted Haven account today!
            </p>
          </div>

          {/* Register Form */}
          <form className="space-y-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                id="firstName"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                id="lastName"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter your last name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="emailAddress"
                id="email"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div>
              <label
                htmlFor="interest"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Area of Interest
              </label>
              <select
                id="interest"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select your area of interest</option>
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

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-neutral-300"></div>
            <span className="px-4 text-sm text-neutral-500">or</span>
            <div className="flex-1 border-t border-neutral-300"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors">
              <span className="mr-2">🔍</span>
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center px-4 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors">
              <span className="mr-2">📘</span>
              Continue with Facebook
            </button>
          </div>

          {/* Seller Account */}
          <div className="mt-4 text-center">
            <p className="text-sm text-neutral-600">
              Want to sell your crafts?{" "}
              <Link
                href="/become-seller"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Become a seller
              </Link>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500">
            By signing up, you agree to our{" "}
            <Link
              href="/terms"
              className="text-primary-600 hover:text-primary-700"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-primary-600 hover:text-primary-700"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
