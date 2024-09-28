import React, { useState, useEffect } from 'react';
import productoService from '../services/productoService';

const FormularioProducto = ({ producto, actualizar }) => {
  const [nombre, setNombre] = useState(producto ? producto.nombre : '');
  const [precio, setPrecio] = useState(producto ? producto.precio : '');
  const [disponible, setDisponible] = useState(producto ? producto.disponible : false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoProducto = { nombre, precio, disponible };

    if (producto) {
      productoService.actualizarProducto(producto.id, nuevoProducto)
        .then(() => actualizar());
    } else {
      productoService.agregarProducto(nuevoProducto)
        .then(() => actualizar());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <label>
        Disponible:
        <input
          type="checkbox"
          checked={disponible}
          onChange={(e) => setDisponible(e.target.checked)}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default FormularioProducto;
