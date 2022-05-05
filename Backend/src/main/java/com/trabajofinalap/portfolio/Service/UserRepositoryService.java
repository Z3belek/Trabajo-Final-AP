/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.trabajofinalap.portfolio.Service;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.trabajofinalap.portfolio.Model.User;

/**
 *
 * @author Z3belek
 */
public interface UserRepositoryService extends JpaRepository<User, Long>{
    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
