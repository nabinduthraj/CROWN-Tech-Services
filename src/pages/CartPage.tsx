import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Your cart is empty
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Shopping Cart
          </h1>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium transition-colors"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {item.product.category}
                    </p>
                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      ${item.product.price}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-xl font-semibold text-gray-900 dark:text-white min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Subtotal and Remove */}
                  <div className="flex flex-col items-end space-y-2">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Shipping</span>
                  <span>{getTotalPrice() > 100 ? 'Free' : '$9.99'}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Tax</span>
                  <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                <hr className="border-gray-200 dark:border-gray-700" />
                <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span>
                    ${(getTotalPrice() + (getTotalPrice() > 100 ? 0 : 9.99) + getTotalPrice() * 0.08).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <Link
                  to="/checkout"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/products"
                  className="w-full flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Promo Code */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;