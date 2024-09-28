import React, { useState } from 'react';
import Header from './components/Header';
import ListadoProductos from './components/ListadoProductos';
import FormularioProducto from './components/FormularioProducto';

function App() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [actualizarLista, setActualizarLista] = useState(false);

  const actualizar = () => setActualizarLista(!actualizarLista);

  return (
    <div className="App">
      <Header />
      <FormularioProducto producto={productoSeleccionado} actualizar={actualizar} />
      <ListadoProductos key={actualizarLista} />
    </div>
  );
}

export default App;
