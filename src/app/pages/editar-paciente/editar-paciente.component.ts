import { Component, OnInit } from '@angular/core';
import { FormularioPacienteComponent } from "../../components/formulario-paciente/formulario-paciente.component";
import { PacienteService } from '../../services/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { PacienteListar } from '../../models/Paciente';

@Component({
  selector: 'app-editar-paciente',
  standalone: true,
  imports: [FormularioPacienteComponent],
  templateUrl: './editar-paciente.component.html',
  styleUrl: './editar-paciente.component.css'
})
export class EditarPacienteComponent implements OnInit{

  paciente!: PacienteListar

  constructor(private pacienteService:PacienteService, private router: Router, private rota: ActivatedRoute) {}

  ngOnInit(): void {
      
       const idPaciente = Number(this.rota.snapshot.paramMap.get('idPaciente'))

       
    }
  
    
}