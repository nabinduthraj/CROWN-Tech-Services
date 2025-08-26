import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Truck, Shield, Headphones } from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/Product/ProductCard';

const LandingPage: React.FC = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to
                <span className="block text-yellow-300">CROWN Tech Services</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover premium technology products with unmatched quality and service. 
                From gaming laptops to professional accessories, we have everything you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Shop Now
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Tech Products"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose CROWN Tech Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Free shipping on orders over $100 with express delivery options available.
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Secure Shopping</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your data is protected with industry-standard encryption and secure payment processing.
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Headphones className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our expert support team is available around the clock to help with your questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover our most popular items
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter for the latest products and exclusive deals
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;