import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Save, X, Upload, Package, Users, ShoppingCart, TrendingUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useProducts, Product } from '../contexts/ProductContext';

const AdminPage: React.FC = () => {
  const { user, isAdmin } = useAuth();
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const navigate = useNavigate();
  
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<string | null>(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    image: '',
    description: '',
    category: '',
    inStock: true,
    rating: 0,
    reviews: 0
  });

  // Redirect if not admin
  React.useEffect(() => {
    if (!isAdmin) {
      navigate('/');
    }
  }, [isAdmin, navigate]);

  if (!isAdmin) {
    return null;
  }

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.description && newProduct.category) {
      addProduct({
        ...newProduct,
        rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // Random rating 3-5
        reviews: Math.floor(Math.random() * 200) + 10 // Random reviews 10-210
      });
      setNewProduct({
        name: '',
        price: 0,
        image: '',
        description: '',
        category: '',
        inStock: true,
        rating: 0,
        reviews: 0
      });
      setIsAddingProduct(false);
    }
  };

  const handleEditProduct = (productId: string, updatedData: Partial<Product>) => {
    updateProduct(productId, updatedData);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (productId: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(productId);
    }
  };

  const categories = ['Laptops', 'Accessories', 'Monitors', 'Audio', 'Gaming', 'Storage'];

  // Sample images for product placeholders
  const sampleImages = [
    'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  const stats = {
    totalProducts: products.length,
    totalUsers: 156, // Simulated
    totalOrders: 324, // Simulated
    totalRevenue: 45670.50 // Simulated
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Welcome back, {user?.name}! Manage your CROWN Tech Services store.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Products</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalProducts}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalUsers}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <ShoppingCart className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalOrders}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Revenue</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${stats.totalRevenue.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Management */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Product Management
              </h2>
              <button
                onClick={() => setIsAddingProduct(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-5 w-5" />
                <span>Add Product</span>
              </button>
            </div>
          </div>

          {/* Add Product Form */}
          {isAddingProduct && (
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Add New Product
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct(prev => ({ ...prev, name: e.target.value }))}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={newProduct.price || ''}
                  onChange={(e) => setNewProduct(prev => ({ ...prev, price: Number(e.target.value) }))}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct(prev => ({ ...prev, category: e.target.value }))}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <select
                  value={newProduct.image}
                  onChange={(e) => setNewProduct(prev => ({ ...prev, image: e.target.value }))}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Image</option>
                  {sampleImages.map((img, index) => (
                    <option key={img} value={img}>Sample Image {index + 1}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Product Description"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
                  className="md:col-span-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={newProduct.inStock}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, inStock: e.target.checked }))}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label className="text-sm text-gray-700 dark:text-gray-300">In Stock</label>
                </div>
              </div>
              <div className="flex space-x-3 mt-4">
                <button
                  onClick={handleAddProduct}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Product</span>
                </button>
                <button
                  onClick={() => setIsAddingProduct(false)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <X className="h-4 w-4" />
                  <span>Cancel</span>
                </button>
              </div>
            </div>
          )}

          {/* Products List */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-750">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-12 w-12 object-cover rounded-lg mr-4"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {product.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                            {product.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      ${product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        product.inStock
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                      }`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button
                        onClick={() => setEditingProduct(product.id)}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit Product Modal */}
        {editingProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Edit Product
                  </h3>
                  <button
                    onClick={() => setEditingProduct(null)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                {(() => {
                  const product = products.find(p => p.id === editingProduct);
                  if (!product) return null;
                  
                  return (
                    <EditProductForm
                      product={product}
                      onSave={(updatedData) => handleEditProduct(product.id, updatedData)}
                      onCancel={() => setEditingProduct(null)}
                      categories={categories}
                      sampleImages={sampleImages}
                    />
                  );
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface EditProductFormProps {
  product: Product;
  onSave: (data: Partial<Product>) => void;
  onCancel: () => void;
  categories: string[];
  sampleImages: string[];
}

const EditProductForm: React.FC<EditProductFormProps> = ({
  product,
  onSave,
  onCancel,
  categories,
  sampleImages
}) => {
  const [editData, setEditData] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
    category: product.category,
    image: product.image,
    inStock: product.inStock
  });

  const handleSave = () => {
    onSave(editData);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Product Name"
          value={editData.name}
          onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="number"
          placeholder="Price"
          value={editData.price}
          onChange={(e) => setEditData(prev => ({ ...prev, price: Number(e.target.value) }))}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <select
          value={editData.category}
          onChange={(e) => setEditData(prev => ({ ...prev, category: e.target.value }))}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select
          value={editData.image}
          onChange={(e) => setEditData(prev => ({ ...prev, image: e.target.value }))}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {sampleImages.map((img, index) => (
            <option key={img} value={img}>Sample Image {index + 1}</option>
          ))}
        </select>
        <textarea
          placeholder="Product Description"
          value={editData.description}
          onChange={(e) => setEditData(prev => ({ ...prev, description: e.target.value }))}
          className="md:col-span-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
        />
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={editData.inStock}
            onChange={(e) => setEditData(prev => ({ ...prev, inStock: e.target.checked }))}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label className="text-sm text-gray-700 dark:text-gray-300">In Stock</label>
        </div>
      </div>
      
      <div className="flex space-x-3 pt-4">
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Save className="h-4 w-4" />
          <span>Save Changes</span>
        </button>
        <button
          onClick={onCancel}
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <X className="h-4 w-4" />
          <span>Cancel</span>
        </button>
      </div>
    </div>
  );
};

export default AdminPage;