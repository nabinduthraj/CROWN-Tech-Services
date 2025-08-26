import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  getProductById: (id: string) => Product | undefined;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Gaming Laptop Pro',
    price: 1299.99,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'High-performance gaming laptop with RTX graphics and Intel i7 processor.',
    category: 'Laptops',
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Wireless Gaming Mouse',
    price: 79.99,
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Precision wireless gaming mouse with RGB lighting and programmable buttons.',
    category: 'Accessories',
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    name: '4K Gaming Monitor',
    price: 399.99,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: '27-inch 4K gaming monitor with 144Hz refresh rate and HDR support.',
    category: 'Monitors',
    inStock: true,
    rating: 4.9,
    reviews: 76
  },
  {
    id: '4',
    name: 'Mechanical Keyboard',
    price: 149.99,
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Premium mechanical keyboard with Cherry MX switches and RGB backlighting.',
    category: 'Accessories',
    inStock: false,
    rating: 4.7,
    reviews: 203
  },
  {
    id: '5',
    name: 'Gaming Headset',
    price: 99.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Surround sound gaming headset with noise-canceling microphone.',
    category: 'Audio',
    inStock: true,
    rating: 4.5,
    reviews: 156
  },
  {
    id: '6',
    name: 'Ultrabook Laptop',
    price: 899.99,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    description: 'Slim and lightweight ultrabook perfect for work and productivity.',
    category: 'Laptops',
    inStock: true,
    rating: 4.4,
    reviews: 92
  }
];

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(initialProducts);
      localStorage.setItem('products', JSON.stringify(initialProducts));
    }
  }, []);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      ...product,
      id: Date.now().toString()
    };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const updateProduct = (id: string, updatedProduct: Partial<Product>) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const deleteProduct = (id: string) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      getProductById
    }}>
      {children}
    </ProductContext.Provider>
  );
};