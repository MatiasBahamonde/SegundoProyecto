import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import PropTypes from 'prop-types'; 

const Header = ({ cartItemCount }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">
          <Link to="/">Matias Store</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
            </li>
            
              
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                Categoría
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <ul className="py-1">
                    <li>
                      <Link to="/camisetas-chile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Camisetas de Chile</Link>
                    </li>
                    <li>
                      <Link to="/camisetas-libertadores" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Camisetas Libertadores</Link>
                    </li>
                    {
                      
                    }
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/cart" className="relative text-gray-300 hover:text-white">
                Novedades
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  cartItemCount: PropTypes.number.isRequired, 
};

export default Header;
