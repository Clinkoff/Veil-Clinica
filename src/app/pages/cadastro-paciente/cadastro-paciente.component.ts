import { Component } from '@angular/core';
import { FormularioPacienteComponent } from "../../components/formulario-paciente/formulario-paciente.component";
import { PacienteListar } from '../../models/Paciente';
import { PacienteService } from '../../services/paciente.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-cadastro-paciente',
  standalone: true,
  imports: [FormularioPacienteComponent],
  templateUrl: './cadastro-paciente.component.html',
  styleUrl: './cadastro-paciente.component.css'
})
export class CadastroPacienteComponent {

  constructor(private pacienteService: PacienteService, private router: Router) {}

  criarPaciente(paciente : PacienteListar) {
     this.pacienteService.CriarPaciente(paciente).subscribe(response => {
      this.router.navigate(['/'])
     })
  }
}
