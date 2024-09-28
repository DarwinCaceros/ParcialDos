package com.example.ParcialDos.Service;

import com.example.ParcialDos.Model.Producto;
import com.example.ParcialDos.Repository.Repositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ProductoService {

    @Autowired
    private Repositorio Repositorio;

    public List<Producto> obtenerTodos(){
        return Repositorio.findAll();
    }

    public Producto obtenerPorId(Long id){
        return Repositorio.findById(id).orElse(null);

    }
    
    public Producto guardar(Producto producto) {
        return Repositorio.save(producto);
    }

    public void eliminar(Long id){
        Repositorio.deleteById(id);
    
    }
}
