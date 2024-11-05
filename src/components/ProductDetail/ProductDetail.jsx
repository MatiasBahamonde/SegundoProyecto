import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductDetail = ({ product, onClose, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleAddToCart = () => {
    const productWithSize = { ...product, size: selectedSize };
    addToCart(productWithSize);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" 
      onClick={onClose}
    >
      <div 
        className="bg-white p-4 rounded shadow-lg max-w-4xl flex relative overflow-auto max-h-screen"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 text-xl">
          &times;
        </button>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-auto max-h-[60vh] mb-4 object-contain"
        />
        <div className="ml-4 flex flex-col justify-between w-2/5">
          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-lg text-gray-600">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Talla:</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500"
              >
                <option value="">Seleccione una talla</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className={`mt-4 py-2 px-4 text-white rounded-md ${selectedSize ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetail;
