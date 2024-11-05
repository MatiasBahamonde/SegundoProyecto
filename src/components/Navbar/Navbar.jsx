import PropTypes from 'prop-types';
import { ShoppingCartIcon } from '../Icons/Icons'; 

const Navbar = ({ cartItemCount, toggleCart }) => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl"></h1>
        <img 
          src="/public/futbol.png" alt="Descripción de la imagen"    
          className="w-20" 
        />
        <button onClick={toggleCart} className="relative flex items-center">
          <ShoppingCartIcon />
          {cartItemCount > 0 && (
            <span className="ml-2 bg-red-600 text-white rounded-full px-2 text-sm">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  cartItemCount: PropTypes.number.isRequired, 
  toggleCart: PropTypes.func.isRequired, 
};

export default Navbar;
