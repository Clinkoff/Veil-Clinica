import { Component, OnInit } from '@angular/core';
import { MedicoListar } from '../../../models/Medico';
import { MedicoService } from '../../../services/medico.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-medico',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './medico.component.html',
  styleUrl: './medico.component.css'
})
export class MedicoComponent implements OnInit {
    
  medicos: MedicoListar[] = [];
  medicosGeral: MedicoListar[] = [];

  constructor(private serviceMedico:MedicoService) {}


   ngOnInit(): void {
    // Obtendo a lista de pacientes do serviço
    this.serviceMedico.GetMedico().subscribe({
      next: (response) => {
        this.medicos = response; // Atualiza a variável pacientes com os dados recebidos
        this.medicosGeral = response; // Mantém uma cópia da lista completa para busca
        console.log(response);
      },
      error: (err) => {
        console.error('Erro ao carregar pacientes:', err); // Loga o erro para depuração
      }
    });
  }

  search(evento: Event): void {
    const target = evento.target as HTMLInputElement; // Obtém o valor do input
    const value = target.value.toLowerCase().trim(); // Normaliza o texto (caixa baixa e sem espaços)
  
    // Filtra médicos pela propriedade nome
    this.medicos = this.medicosGeral.filter((medico) => 
      medico.nome?.toLowerCase().includes(value) // Verifica se o nome inclui o texto buscado
    );
  }
}