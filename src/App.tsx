import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import UserDashboard from './pages/UserDashboard';
import AdminPage from './pages/AdminPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <Router>
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
                <Navbar />
                <main className="pt-20">
                  <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/products/:id" element={<ProductDetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/dashboard" element={<UserDashboard />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/about" element={<AboutPage />} />
                  </Routes>
                </main>
                <Footer />
                <ScrollToTop />
              </div>
            </Router>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;