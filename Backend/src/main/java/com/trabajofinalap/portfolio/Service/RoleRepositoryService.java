/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.trabajofinalap.portfolio.Service;

import com.trabajofinalap.portfolio.Model.ERole;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.trabajofinalap.portfolio.Model.Role;

/**
 *
 * @author Z3belek
 */
public interface RoleRepositoryService extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}