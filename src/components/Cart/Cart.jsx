
import React, { useState } from 'react';
import MetodoDePago from '../MetodoDePago/MetodoDePago';
import PropTypes from 'prop-types';
import { ShoppingCartIcon } from '../Icons/Icons'; 

const Cart = ({ cart, removeFromCart, closeCart }) => {
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleProceedToPayment = () => {
    setIsPaymentVisible(true);
  };

  return (
    <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <ShoppingCartIcon className="text-2xl" />
                      <h2 className="text-lg font-bold ml-2">Carrito de Compras</h2>
                    </div>
                    <div className="ml-3 flex h-7 items-center">
                      <button 
                        type="button" 
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={closeCart}
                      >
                        <span className="sr-only">Cerrar panel</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cart.length === 0 ? (
                          <li className="py-6 text-gray-500">No hay productos en el carrito.</li>
                        ) : (
                          cart.map((item) => (
                            <li key={item.id} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>{item.name}</h3>
                                    <p className="ml-4">${item.price.toFixed(2)}</p>
                                  </div>
                                  <p className="text-gray-500">Talla: {item.talla}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">Cantidad: {item.quantity}</p>
                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                      onClick={() => removeFromCart(item.id)}
                                    >
                                      Eliminar
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Los gastos de envío y impuestos se calcularán en el pago.</p>
                  <div className="mt-6">
                    <button
                      onClick={handleProceedToPayment}
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Proceder al Pago
                    </button>
                  </div>

                  {isPaymentVisible && (
                    <div className="mt-6">
                      <MetodoDePago />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  closeCart: PropTypes.func.isRequired,
};

export default Cart;
