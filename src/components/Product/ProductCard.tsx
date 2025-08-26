import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../../contexts/ProductContext';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/products/${product.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          {!product.inStock && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
              Out of Stock
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
              ({product.reviews})
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ${product.price}
            </span>
            
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors ${
                product.inStock
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="text-sm">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;