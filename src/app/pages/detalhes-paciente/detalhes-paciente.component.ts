import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { PacienteListar } from '../../models/Paciente';

@Component({
  selector: 'app-detalhes-paciente',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalhes-paciente.component.html',
  styleUrl: './detalhes-paciente.component.css'
})
export class PacienteDetalheComponent implements OnInit {
  paciente!: PacienteListar;

  constructor(private pacienteService: PacienteService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Captura o ID da rota
    const idPaciente = Number(this.route.snapshot.paramMap.get('idPaciente'));
    if (idPaciente) {
      this.getPacienteId(idPaciente);
    }
  }

  getPacienteId(idPaciente: number): void {
    this.pacienteService.GetPacienteId(idPaciente).subscribe(
      (data) => {
        this.paciente = data; // Atualiza os dados do paciente
        console.log('Dados do paciente carregados:', this.paciente);
      },
      (error) => {
        console.error('Erro ao carregar os dados do paciente:', error);
      }
    );
  }
}