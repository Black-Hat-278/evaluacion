/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package upeu.edu.pe.evaluacion.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 *
 * @author Lenovo
 */
@Controller
@RequestMapping("/menu")
public class MenuController {
  
    /**
     *
     * @param model
     * @return
     */
    @GetMapping("/programa")
    public String indexPrograma(Model model){
        model.addAttribute("mensaje", "Programas");
        return "programas/programa";
    
    } 

  @GetMapping("/taller")
    public String indeTaller(Model model){
        model.addAttribute("mensaje", "Talleres");
        return "talleres/taller";
    
    }

  @GetMapping("/persona")
    public String indexPersona(Model model){
        model.addAttribute("mensaje", "Personas");
        return "personas/persona";
    
    }

}
