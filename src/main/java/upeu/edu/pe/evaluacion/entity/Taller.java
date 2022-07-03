/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package upeu.edu.pe.evaluacion.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import lombok.Data;

@Data
@Entity
@Table(name = "talleres")
public class Taller implements Serializable {
  
    @Id
    @Column(name = "tall_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tallId;

    @Column(name = "tall_tema")
    private String tallTema;

    @Column(name = "tall_fecha")
    private LocalDate tallFecha;

    @Column(name = "tall_hora")
    private LocalTime tallHora;

    @Column(name = "tall_lugar")
    private String tallLugar;

     @Column(name = "tall_direccion")
    private String tallDireccion;

}  

