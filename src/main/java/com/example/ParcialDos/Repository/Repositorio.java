package com.example.ParcialDos.Repository;

import com.example.ParcialDos.Model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;




public interface Repositorio extends JpaRepository<Producto, Long> {

    
}
