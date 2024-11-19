import { Component, OnInit } from '@angular/core';
import { AgendamentoListar } from '../../../models/Agendamento';
import { AgendamentoService } from '../../../services/agendamento.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './agendamento.component.html',
  styleUrl: './agendamento.component.css'
})
export class AgendamentoComponent implements OnInit {
   
  agendamentos: AgendamentoListar[] = []
  agendamentosGeral: AgendamentoListar[] = []

  constructor(private serviceAgendamento:AgendamentoService) {

  }
  ngOnInit(): void {
    // Obtendo a lista de pacientes do serviço
    this.serviceAgendamento.GetAgendamento().subscribe({
      next: (response) => {
        this.agendamentos = response; // Atualiza a variável pacientes com os dados recebidos
        this.agendamentosGeral = response; // Mantém uma cópia da lista completa para busca
        console.log(response);
      },
      error: (err) => {
        console.error('Erro ao carregar pacientes:', err); // Loga o erro para depuração
      }
    });
  }
}
