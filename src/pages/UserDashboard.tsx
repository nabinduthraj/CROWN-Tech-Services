import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Calendar, ShoppingBag, Edit, Save, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const UserDashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    if (user) {
      setEditedUser({
        name: user.name,
        email: user.email
      });
    }
  }, [isAuthenticated, user, navigate]);

  const handleSave = () => {
    // In a real app, this would make an API call to update user info
    alert('Profile updated successfully!');
    setIsEditing(false);
  };

  const handleCancel = () => {
    if (user) {
      setEditedUser({
        name: user.name,
        email: user.email
      });
    }
    setIsEditing(false);
  };

  if (!user) {
    return null;
  }

  // Mock order history data
  const recentOrders = [
    {
      id: 'CR-12345678',
      date: '2024-01-15',
      status: 'Delivered',
      total: 459.97,
      items: 2
    },
    {
      id: 'CR-12345679',
      date: '2024-01-10',
      status: 'Processing',
      total: 199.99,
      items: 1
    },
    {
      id: 'CR-12345680',
      date: '2024-01-05',
      status: 'Shipped',
      total: 89.99,
      items: 3
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Profile Information
                </h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  {isEditing ? <X className="h-5 w-5" /> : <Edit className="h-5 w-5" />}
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedUser.name}
                        onChange={(e) => setEditedUser(prev => ({ ...prev, name: e.target.value }))}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900 dark:text-white font-medium">{user.name}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editedUser.email}
                        onChange={(e) => setEditedUser(prev => ({ ...prev, email: e.target.value }))}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900 dark:text-white font-medium">{user.email}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Member Since
                    </label>
                    <p className="text-gray-900 dark:text-white font-medium">January 2024</p>
                  </div>
                </div>

                {isEditing && (
                  <div className="flex space-x-3 pt-4">
                    <button
                      onClick={handleSave}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Save className="h-4 w-4" />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Total Orders</span>
                  <span className="font-semibold text-gray-900 dark:text-white">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Total Spent</span>
                  <span className="font-semibold text-gray-900 dark:text-white">$749.95</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Loyalty Points</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">750</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order History */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Recent Orders
                </h2>
                <ShoppingBag className="h-6 w-6 text-gray-400" />
              </div>

              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Order {order.id}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {new Date(order.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          ${order.total.toFixed(2)}
                        </p>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          order.status === 'Delivered'
                            ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                            : order.status === 'Shipped'
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                            : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300">
                      <span>{order.items} item{order.items !== 1 ? 's' : ''}</span>
                      <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {recentOrders.length === 0 && (
                <div className="text-center py-8">
                  <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
                    No orders yet
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Start shopping to see your order history here
                  </p>
                  <button
                    onClick={() => navigate('/products')}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Browse Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;