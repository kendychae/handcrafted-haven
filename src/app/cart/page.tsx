'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function CartPage() {
  const { items: cart, updateQuantity, removeItem } = useCart();

  const subtotal = cart.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0);
  const shipping = cart.length > 0 ? 12.99 : 0;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Shopping Cart</h1>
            <p className="text-neutral-600">
              Review your items and proceed to checkout when ready
            </p>
          </div>

          {cart.length === 0 ? (
            /* Empty Cart */
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-12 text-center">
              <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🛒</span>
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Your cart is empty</h2>
              <p className="text-neutral-600 mb-8">
                Discover unique handcrafted items and add them to your cart
              </p>
              <Link
                href="/products"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
                  <div className="p-6 border-b border-neutral-200">
                    <h2 className="text-xl font-semibold text-neutral-900">
                      Cart Items ({cart.length})
                    </h2>
                  </div>
                  
                  <div className="divide-y divide-neutral-200">
                    {cart.map((item: any) => (
                      <div key={item.id} className="p-6">
                        <div className="flex items-start space-x-4">
                          {/* Product Image */}
                          <div className="w-20 h-20 bg-neutral-100 rounded-lg flex-shrink-0 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                              {item.name}
                            </h3>
                            <p className="text-sm text-primary-600 mb-1">by {item.artist}</p>
                            <p className="text-sm text-neutral-500 mb-2">{item.category}</p>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-3">
                              <span className="text-sm text-neutral-600">Qty:</span>
                              <div className="flex items-center border border-neutral-300 rounded">
                                <button 
                                  onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                  className="px-3 py-1 hover:bg-neutral-50"
                                >
                                  -
                                </button>
                                <span className="px-3 py-1 border-x border-neutral-300">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="px-3 py-1 hover:bg-neutral-50"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Price and Actions */}
                          <div className="text-right">
                            <p className="text-lg font-semibold text-neutral-900 mb-2">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <p className="text-sm text-neutral-500 mb-3">
                              ${item.price.toFixed(2)} each
                            </p>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-sm text-red-600 hover:text-red-700"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Continue Shopping */}
                <div className="mt-6">
                  <Link
                    href="/products"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    ← Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 sticky top-24">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-6">Order Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Subtotal</span>
                      <span className="text-neutral-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Shipping</span>
                      <span className="text-neutral-900">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Tax</span>
                      <span className="text-neutral-900">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-neutral-200 pt-4">
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold text-neutral-900">Total</span>
                        <span className="text-lg font-semibold text-neutral-900">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <label htmlFor="promo" className="block text-sm font-medium text-neutral-700 mb-2">
                      Promo Code
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="promo"
                        className="flex-1 px-3 py-2 border border-neutral-300 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter code"
                      />
                      <button className="px-4 py-2 bg-neutral-100 border border-neutral-300 border-l-0 rounded-r-lg hover:bg-neutral-200 transition-colors">
                        Apply
                      </button>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors font-semibold mb-4">
                    Proceed to Checkout
                  </button>

                  {/* Security Note */}
                  <div className="text-center">
                    <p className="text-xs text-neutral-500">
                      🔒 Secure checkout with SSL encryption
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}