import React, { useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import products from './Data/asyncMock';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import ProductDetail from './components/ProductDetail/ProductDetail'; 
import Home from './components/Home/Home';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isInCart = prevCart.find((item) => item.id === product.id);
      if (!isInCart) {
        return [...prevCart, { ...product, quantity: 1 }];
      } else {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartItemCount={cart.length} toggleCart={toggleCart} />
      <Header />
      <Home />
      <div className="flex-grow container mx-auto py-4">
        <ProductList products={products} addToCart={addToCart} onSelectProduct={handleSelectProduct} />
        {isCartOpen && (
          <Cart cart={cart} removeFromCart={removeFromCart} closeCart={() => setIsCartOpen(false)} />
        )}
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={handleCloseDetail}
            addToCart={addToCart}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
