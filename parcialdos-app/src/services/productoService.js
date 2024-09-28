import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/productos';

const getProductos = () => {
  return axios.get(baseUrl);
};

const agregarProducto = (nuevoProducto) => {
  return axios.post(baseUrl, nuevoProducto);
};

const actualizarProducto = (id, productoActualizado) => {
  return axios.put(`${baseUrl}/${id}`, productoActualizado);
};

const eliminarProducto = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  getProductos,
  agregarProducto,
  actualizarProducto,
  eliminarProducto
};
