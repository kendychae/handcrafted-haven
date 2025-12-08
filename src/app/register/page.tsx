"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  interest: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    interest: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): string | null => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/(?=.*\d)/.test(password)) {
      return "Password must contain at least one number";
    }
    return null;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else {
      const passwordError = validatePassword(formData.password);
      if (passwordError) {
        newErrors.password = passwordError;
      }
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call - replace with actual API endpoint when backend is ready
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // TODO: Replace with actual API call
      // const response = await fetch('/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     firstName: formData.firstName,
      //     lastName: formData.lastName,
      //     email: formData.email,
      //     password: formData.password,
      //     interest: formData.interest,
      //   }),
      // });
      //
      // if (!response.ok) {
      //   throw new Error('Registration failed');
      // }

      setIsSuccess(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        interest: "",
      });

      // Redirect to login after 2 seconds
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      setErrors({
        general:
          "Registration failed. Please try again or contact support if the problem persists.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement social login when backend is ready
    alert(`${provider} login will be implemented when backend is ready`);
  };
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12">
      <div className="container max-w-xl">
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">
              Create Your Account
            </h1>
            <p className="text-neutral-600">
              Join Handcrafted Haven and discover unique artisan treasures
            </p>
          </div>

          {/* Success Message */}
          {isSuccess && (
            <div className="mb-6 p-4 bg-secondary-50 border border-secondary-200 rounded-lg">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-secondary-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-secondary-800 font-medium">
                  Account created successfully! Redirecting to login...
                </p>
              </div>
            </div>
          )}

          {/* General Error Message */}
          {errors.general && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-red-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-red-800 text-sm">{errors.general}</p>
              </div>
            </div>
          )}

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
              value={formData.firstName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                errors.firstName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-neutral-300"
              }`}
              placeholder="Enter your first name"
              disabled={isLoading || isSuccess}
              required
              {...(errors.email && { 
                "aria-invalid": true,
                "aria-describedby": "email-error" 
              })}
/>
              {errors.firstName && (
                <p id="firstName-error" className="mt-1 text-sm text-red-600">
                  {errors.firstName}
                </p>
              )}
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
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                  errors.lastName
                    ? "border-red-500 focus:ring-red-500"
                    : "border-neutral-300"
                }`}
                placeholder="Enter your last name"
                disabled={isLoading || isSuccess}
                required
                {...(errors.lastName && { 
                  "aria-invalid": true,
                  "aria-describedby": "lastName-error" 
                })}
              />
              {errors.lastName && (
                <p id="lastName-error" className="mt-1 text-sm text-red-600">
                  {errors.lastName}
                </p>
              )}
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
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-neutral-300"
                }`}
                placeholder="your.email@example.com"
                disabled={isLoading || isSuccess}
                required
                {...(errors.email && { 
                  "aria-invalid": true,
                  "aria-describedby": "email-error" 
                })}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
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
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-neutral-300"
                }`}
                placeholder="Create a strong password"
                disabled={isLoading || isSuccess}
                required
                {...(errors.password && { 
                  "aria-invalid": true,
                  "aria-describedby": "password-error" 
                })}
              />
              {errors.password && (
                <p id="password-error" className="mt-1 text-sm text-red-600">
                  {errors.password}
                </p>
              )}
              <p id="password-requirements" className="mt-1 text-xs text-neutral-500">
                Must be 8+ characters with uppercase, lowercase, and number
              </p>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                  errors.confirmPassword
                    ? "border-red-500 focus:ring-red-500"
                    : "border-neutral-300"
                }`}
                placeholder="Confirm your password"
                disabled={isLoading || isSuccess}
                required
                {...(errors.confirmPassword && { 
                  "aria-invalid": true,
                  "aria-describedby": "confirmPassword-error" 
                })}
              />
              {errors.confirmPassword && (
                <p id="confirmPassword-error" className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="interest"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Area of Interest <span className="text-neutral-400">(Optional)</span>
              </label>
              <select
                name="interest"
                id="interest"
                value={formData.interest}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                disabled={isLoading || isSuccess}
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
              disabled={isLoading || isSuccess}
              className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
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
            <button
              type="button"
              onClick={() => handleSocialLogin("Google")}
              disabled={isLoading || isSuccess}
              className="w-full flex items-center justify-center px-4 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="mr-2">🔍</span>
              Continue with Google
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin("Facebook")}
              disabled={isLoading || isSuccess}
              className="w-full flex items-center justify-center px-4 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="mr-2">📘</span>
              Continue with Facebook
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-neutral-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Sign in here
              </Link>
            </p>
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