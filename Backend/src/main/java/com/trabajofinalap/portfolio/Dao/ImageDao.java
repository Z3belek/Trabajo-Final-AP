/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.trabajofinalap.portfolio.Dao;

import com.trabajofinalap.portfolio.Model.Imagen;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Z3belek
 */
public interface ImageDao extends JpaRepository<Imagen, Long>{
    Optional<Imagen> findByName(String name);
}
