import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Producto = ({ nombre, imagen, tallas }) => {
    const [tallaSeleccionada, setTallaSeleccionada] = useState('');

    const manejarCambioTalla = (talla) => {
        setTallaSeleccionada(talla);
    };

    return (
        <div className="producto">
            <h2>{nombre}</h2>
            <img src={imagen} alt={`Imagen de ${nombre}`} style={{ width: '300px' }} />
            <div className="tallas">
                <h4>Selecciona tu talla:</h4>
                {tallas.map((talla) => (
                    <button
                        key={talla}
                        onClick={() => manejarCambioTalla(talla)}
                        className={talla === tallaSeleccionada ? 'seleccionada' : ''}
                    >
                        {talla}
                    </button>
                ))}
            </div>
            {tallaSeleccionada && <p>Talla seleccionada: {tallaSeleccionada}</p>}
        </div>
    );
};

// Validación de las propiedades usando PropTypes
Producto.propTypes = {
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    tallas: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Producto;
