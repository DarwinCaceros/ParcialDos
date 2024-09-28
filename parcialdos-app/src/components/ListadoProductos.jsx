import React, { useState, useEffect } from 'react';
import productoService from '../services/productoService';
import ProductoItem from './ProductoItem';

const ListadoProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    productoService.getProductos()
      .then(response => setProductos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Productos en Stock</h2>
      {productos.length > 0 ? (
        productos.map((producto) => (
          <ProductoItem key={producto.id} producto={producto} />
        ))
      ) : (
        <p>Aun no tenemos nada disponible.</p>
      )}
    </div>
  );
};

export default ListadoProductos;
