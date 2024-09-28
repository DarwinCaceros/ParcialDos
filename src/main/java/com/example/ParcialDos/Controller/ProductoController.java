package com.example.ParcialDos.Controller;


import com.example.ParcialDos.Model.Producto;
import com.example.ParcialDos.Service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Productos")
@CrossOrigin(origins = "http://localhost:3000")

public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping
    public List<Producto> obtenerTodos(){
        return productoService.obtenerTodos();
    }

    @GetMapping("/{id}")
    public Producto obtenerPorId(@PathVariable Long id){
        return productoService.obtenerPorId(id);
    }
    
    @PostMapping
    public Producto agreProducto(@RequestBody Producto producto){
        return productoService.guardar(producto);

    }

    @PutMapping("/{id}")
    public Producto actualizarProducto(@PathVariable Long id, @RequestBody Producto productoActualizado){
        Producto productoExistente = productoService.obtenerPorId(id);
        if(productoExistente != null){
            productoExistente.setNombre(productoActualizado.getNombre());
            productoExistente.setPrecio(productoActualizado.getPrecio());
            productoExistente.setDisponible(productoActualizado.getDisponible());
            return productoService.guardar(productoExistente);
        }
        return null;

        }

        @DeleteMapping("/{id}")
        public void eliminarProducto(@PathVariable Long id) {
            productoService.eliminar(id);
        }
    }

