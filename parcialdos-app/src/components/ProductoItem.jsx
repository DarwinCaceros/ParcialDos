import React from 'react';

const ProductoItem = ({ producto }) => {
  return (
    <div>
      <h3>{producto.nombre}</h3>
      <p>Precio: Q{producto.precio}</p>
      <p>En existencia: {producto.disponible ? 'Sí' : 'No'}</p>
      <button>Editar</button>
      <button>Eliminar</button>
    </div>
  );
};

export default ProductoItem;
