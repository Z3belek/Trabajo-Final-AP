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
@Table(name="Zz_aboutme")
public class Aboutme {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="Id")
    private Integer Id;
    @Column(name="Name")
    private String Name;
    @Column(name="DTexto")
    private String DTexto;
    @Column(name="Skill1")
    private String Skill1;
    @Column(name="SKill2")
    private String Skill2;
    @Column(name="Skill3")
    private String Skill3;
    @Column(name="Percentage1")
    private Integer Percentage1;
    @Column(name="Percentage2")
    private Integer Percentage2;
    @Column(name="Percentage3")
    private Integer Percentage3;
    @Column(name="Urlselfie")
    private String Urlselfie;
    @Column(name="Urlcv")
    private String Urlcv;
    @Column(name="Linkedin")
    private String Linkedin;
    @Column(name="Github")
    private String Github;
    @Column(name="Mail")
    private String Mail;
    @Column(name="Pinterest")
    private String Pinterest;
    @Column(name="PCompletados")
    private Integer PCompletados;
    @Column(name="CTomados")
    private Integer CTomados;
    @Column(name="CSatisfactorios")
    private Integer CSatisfactorios;
    @Column(name="Premios")
    private Integer Premios;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer Id) {
        this.Id = Id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String Name) {
        this.Name = Name;
    }

    public String getDTexto() {
        return DTexto;
    }

    public void setDTexto(String DTexto) {
        this.DTexto = DTexto;
    }

    public String getSkill1() {
        return Skill1;
    }

    public void setSkill1(String Skill1) {
        this.Skill1 = Skill1;
    }

    public String getSkill2() {
        return Skill2;
    }

    public void setSkill2(String Skill2) {
        this.Skill2 = Skill2;
    }

    public String getSkill3() {
        return Skill3;
    }

    public void setSkill3(String Skill3) {
        this.Skill3 = Skill3;
    }

    public Integer getPercentage1() {
        return Percentage1;
    }

    public void setPercentage1(Integer Percentage1) {
        this.Percentage1 = Percentage1;
    }

    public Integer getPercentage2() {
        return Percentage2;
    }

    public void setPercentage2(Integer Percentage2) {
        this.Percentage2 = Percentage2;
    }

    public Integer getPercentage3() {
        return Percentage3;
    }

    public void setPercentage3(Integer Percentage3) {
        this.Percentage3 = Percentage3;
    }

    public String getUrlselfie() {
        return Urlselfie;
    }

    public void setUrlselfie(String Urlselfie) {
        this.Urlselfie = Urlselfie;
    }

    public String getUrlcv() {
        return Urlcv;
    }

    public void setUrlcv(String Urlcv) {
        this.Urlcv = Urlcv;
    }

    public String getLinkedin() {
        return Linkedin;
    }

    public void setLinkedin(String Linkedin) {
        this.Linkedin = Linkedin;
    }

    public String getGithub() {
        return Github;
    }

    public void setGithub(String Github) {
        this.Github = Github;
    }

    public String getMail() {
        return Mail;
    }

    public void setMail(String Mail) {
        this.Mail = Mail;
    }

    public String getPinterest() {
        return Pinterest;
    }

    public void setPinterest(String Pinterest) {
        this.Pinterest = Pinterest;
    }

    public Integer getPCompletados() {
        return PCompletados;
    }

    public void setPCompletados(Integer PCompletados) {
        this.PCompletados = PCompletados;
    }

    public Integer getCTomados() {
        return CTomados;
    }

    public void setCTomados(Integer CTomados) {
        this.CTomados = CTomados;
    }

    public Integer getCSatisfactorios() {
        return CSatisfactorios;
    }

    public void setCSatisfactorios(Integer CSatisfactorios) {
        this.CSatisfactorios = CSatisfactorios;
    }

    public Integer getPremios() {
        return Premios;
    }

    public void setPremios(Integer Premios) {
        this.Premios = Premios;
    }

}
