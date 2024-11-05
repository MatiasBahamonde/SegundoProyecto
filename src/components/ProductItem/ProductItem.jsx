

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ product, addToCart, onSelectProduct }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <div
      className={`border p-4 rounded shadow transition-transform duration-300 ${isZoomed ? 'scale-105' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelectProduct(product)} 
    >
      <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
      <h2 className="text-xl">{product.name}</h2>
      <p className="text-lg">${product.price.toFixed(2)}</p>
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          addToCart(product);
        }}
        className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  onSelectProduct: PropTypes.func.isRequired, 
};

export default ProductItem;
