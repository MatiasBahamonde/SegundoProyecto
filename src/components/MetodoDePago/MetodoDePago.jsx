
import React, { useState } from "react"; 
import PropTypes from "prop-types"; 

const MetodoDePago = ({ agregarMetodoDePago }) => {
  const [metodoSeleccionado, setMetodoSeleccionado] = useState("");
  const [tarjetaInfo, setTarjetaInfo] = useState({
    numero: "",
    fecha: "",
    cvv: "",
  });

  const manejarCambio = (e) => {
    setMetodoSeleccionado(e.target.value);
  };

  const manejarTarjetaCambio = (e) => {
    const { name, value } = e.target;
    setTarjetaInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const completarPago = () => {
    if (!tarjetaInfo.numero || !tarjetaInfo.fecha || !tarjetaInfo.cvv) {
      alert("Por favor, completa todos los campos de la tarjeta.");
      return;
    }

    
    alert(`Pago realizado con éxito usando la tarjeta terminada en ${tarjetaInfo.numero.slice(-4)}`);

  
    
    agregarMetodoDePago({ ...tarjetaInfo, metodoSeleccionado });

    
    setTarjetaInfo({ numero: "", fecha: "", cvv: "" });
    setMetodoSeleccionado("");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Método de Pago</h2>
      <select
        value={metodoSeleccionado}
        onChange={manejarCambio}
        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="">Selecciona un método</option>
        <option value="Tarjeta de Crédito">Tarjeta de Crédito</option>
        <option value="Tarjeta de Débito">Tarjeta de Débito</option>
      </select>

      {metodoSeleccionado && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Detalles de la Tarjeta</h3>
          <input
            type="text"
            name="numero"
            placeholder="Número de Tarjeta"
            value={tarjetaInfo.numero}
            onChange={manejarTarjetaCambio}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="fecha"
            placeholder="MM/AA"
            value={tarjetaInfo.fecha}
            onChange={manejarTarjetaCambio}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={tarjetaInfo.cvv}
            onChange={manejarTarjetaCambio}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
          <button
            onClick={completarPago}
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Completar Pago
          </button>
        </div>
      )}
    </div>
  );
};


MetodoDePago.propTypes = {
  agregarMetodoDePago: PropTypes.func.isRequired,
};

export default MetodoDePago;
