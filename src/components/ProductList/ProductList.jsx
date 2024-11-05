





import React from 'react';
import ProductItem from '../ProductItem/ProductItem'; 
import PropTypes from 'prop-types';

const ProductList = ({ products, addToCart, onSelectProduct }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 -mt-40">
      {products.map((product) => (
        <ProductItem 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
          onSelectProduct={onSelectProduct} 
        />
      ))}
    </div>
  );
};


ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
  onSelectProduct: PropTypes.func.isRequired,
};

export default ProductList;
