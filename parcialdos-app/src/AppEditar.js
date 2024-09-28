import React, { useState } from 'react';
import axios from 'axios';

const FormularioProducto = ({ producto, actualizar }) => {
  const [nombre, setNombre] = useState(producto ? producto.nombre : '');
  const [precio, setPrecio] = useState(producto ? producto.precio : '');
  const [disponible, setDisponible] = useState(producto ? producto.disponible : false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoProducto = { nombre, precio, disponible };

    if (producto) {
      axios.put(`http://localhost:8080/api/productos/${producto.id}`, nuevoProducto)
        .then(response => actualizar(response.data));
    } else {
      axios.post('http://localhost:8080/api/productos', nuevoProducto)
        .then(response => actualizar(response.data));
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
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormularioProducto;
