/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package upeu.edu.pe.evaluacion.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "programas")
public class Programa implements Serializable {
  
@Id
    @Column(name = "prog_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long progId;

    @Column(name = "prog_nombre")
    private String progNombre;

    @Column(name = "prog_descripcion")
    private String progDescripcion;

    @Column(name = "prog_estado")
    private String progEstado;
}  

