/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.trabajofinalap.portfolio.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Z3belek
 */
@Entity
@Table(name="Zz_education")
public class Education {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="Id")
    private Integer Id;
    @Column(name="Year1")
    private String Year1;
    @Column(name="Year2")
    private String Year2;
    @Column(name="Level")
    private String Level;
    @Column(name="Place")
    private String Place;
    @Column(name="DTexto")
    private String DTexto;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer Id) {
        this.Id = Id;
    }

    public String getYear1() {
        return Year1;
    }

    public void setYear1(String Year1) {
        this.Year1 = Year1;
    }

    public String getYear2() {
        return Year2;
    }

    public void setYear2(String Year2) {
        this.Year2 = Year2;
    }

    public String getLevel() {
        return Level;
    }

    public void setLevel(String Level) {
        this.Level = Level;
    }

    public String getPlace() {
        return Place;
    }

    public void setPlace(String Place) {
        this.Place = Place;
    }

    public String getDTexto() {
        return DTexto;
    }

    public void setDTexto(String DTexto) {
        this.DTexto = DTexto;
    }
    
}
