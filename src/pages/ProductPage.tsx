import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List } from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from '../components/Product/ProductCard';

const ProductPage: React.FC = () => {
  const { products } = useProducts();
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('name');
  const [filterCategory, setFilterCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const searchQuery = searchParams.get('search') || '';
  const categoryParam = searchParams.get('category') || '';

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
    return uniqueCategories;
  }, [products]);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    const activeCategory = categoryParam || filterCategory;
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    // Price filter
    filtered = filtered.filter(product =>
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, searchQuery, categoryParam, filterCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Our Products'}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Showing {filteredAndSortedProducts.length} products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
              <div className="flex items-center justify-between lg:justify-start">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h2>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={filterCategory === 'all' && !categoryParam}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300">All Categories</span>
                  </label>
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={filterCategory === category || categoryParam === category}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Price Range</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-gray-600 dark:text-gray-400">Min Price</label>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      step="10"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                      className="w-full"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300">${priceRange.min}</span>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 dark:text-gray-400">Max Price</label>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      step="10"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                      className="w-full"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300">${priceRange.max}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
                  >
                    <Filter className="h-4 w-4" />
                    <span>Filters</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Sort by Rating</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  No products found matching your criteria.
                </p>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                  : 'grid-cols-1'
              }`}>
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;