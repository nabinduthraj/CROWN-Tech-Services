import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft, Plus, Minus } from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProductById } = useProducts();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Product Not Found
          </h1>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Show success message or navigate to cart
    alert('Product added to cart successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 mb-8 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-400">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                ${product.price}
              </div>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                product.inStock
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
              }`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Description
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Category
              </h2>
              <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                {product.category}
              </span>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-xl font-semibold text-gray-900 dark:text-white min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  product.inStock
                    ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </span>
              </button>
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-gray-900 dark:text-white">Free Shipping:</strong>
                  <span className="text-gray-600 dark:text-gray-300 ml-1">
                    On orders over $100
                  </span>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Warranty:</strong>
                  <span className="text-gray-600 dark:text-gray-300 ml-1">
                    1 Year Limited
                  </span>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Returns:</strong>
                  <span className="text-gray-600 dark:text-gray-300 ml-1">
                    30-day return policy
                  </span>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Support:</strong>
                  <span className="text-gray-600 dark:text-gray-300 ml-1">
                    24/7 customer service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;